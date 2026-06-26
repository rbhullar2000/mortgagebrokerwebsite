"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/header";

// ── Market rates — update these periodically ─────────────────────────────────
const MARKET_RATES: Record<string, number> = {
  fixed_1: 5.09,
  fixed_2: 4.89,
  fixed_3: 4.74,
  fixed_5: 4.64,
  variable: 5.45,
};

const RATE_LABELS: Record<string, string> = {
  fixed_1: "1-yr Fixed",
  fixed_2: "2-yr Fixed",
  fixed_3: "3-yr Fixed",
  fixed_5: "5-yr Fixed",
  variable: "Variable",
};

const LENDERS = [
  "TD Bank", "RBC", "BMO", "CIBC", "Scotiabank",
  "National Bank", "Meridian", "First National",
  "MCAP", "Radius Financial", "Other",
];

const FREQ_FACTORS: Record<string, number> = {
  monthly: 12,
  "semi-monthly": 24,
  "bi-weekly": 26,
  weekly: 52,
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function calcMonthlyPayment(principal: number, annualRate: number, amortYears: number): number {
  if (!principal || !annualRate || !amortYears) return 0;
  const r = annualRate / 100 / 12;
  const n = amortYears * 12;
  if (r === 0) return principal / n;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function fmt(n: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency", currency: "CAD", maximumFractionDigits: 0,
  }).format(n);
}

function fmtNum(n: number): string {
  return new Intl.NumberFormat("en-CA", { maximumFractionDigits: 0 }).format(n);
}

// ── Sub-components ────────────────────────────────────────────────────────────
function StepDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex gap-2 justify-center mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === current ? 24 : 8,
            height: 8,
            borderRadius: 4,
            background: i === current ? "#1D2D44" : i < current ? "#C79A2B" : "#ddd",
            transition: "all 0.3s",
          }}
        />
      ))}
    </div>
  );
}

function ScoreRing({ score }: { score: number }) {
  const radius = 54;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (score / 100) * circ;
  const color = score >= 70 ? "#1D2D44" : score >= 40 ? "#C79A2B" : "#B94040";
  const label = score >= 70 ? "Well Positioned" : score >= 40 ? "Room to Save" : "Likely Overpaying";

  return (
    <div className="text-center mb-4">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={radius} fill="none" stroke="#f0f0f0" strokeWidth="10" />
        <circle
          cx="70" cy="70" r={radius} fill="none" stroke={color} strokeWidth="10"
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transform: "rotate(-90deg)", transformOrigin: "70px 70px", transition: "stroke-dashoffset 1.2s ease" }}
        />
        <text x="70" y="65" textAnchor="middle" fontSize="28" fontWeight="700" fill="#1a1a1a" fontFamily="Georgia, serif">{score}</text>
        <text x="70" y="84" textAnchor="middle" fontSize="11" fill="#888">/100</text>
      </svg>
      <span
        className="inline-block text-white text-sm font-bold px-4 py-1 rounded-full"
        style={{ background: color }}
      >{label}</span>
    </div>
  );
}

function ResultCard({
  label, value, sub, highlight, icon,
}: {
  label: string; value: string; sub?: string; highlight?: boolean; icon: string;
}) {
  return (
    <div
      className="rounded-2xl p-4 flex-1"
      style={{
        minWidth: 130,
        background: highlight ? "linear-gradient(135deg, #1D2D44 0%, #2a4060 100%)" : "#F4F6F8",
        border: highlight ? "none" : "1px solid #e8e8e8",
      }}
    >
      <div className="text-xl mb-1">{icon}</div>
      <div
        className="text-2xl font-bold"
        style={{ fontFamily: "Georgia, serif", color: highlight ? "#C79A2B" : "#1a1a1a" }}
      >{value}</div>
      <div className="text-xs mt-1" style={{ color: highlight ? "#a8c5e0" : "#888" }}>{label}</div>
      {sub && <div className="text-xs mt-1" style={{ color: highlight ? "#7a9fc0" : "#aaa" }}>{sub}</div>}
    </div>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────
interface MortgageForm {
  balance: string; rate: string; type: string;
  lender: string; amort: string; frequency: string;
}
interface PropertyForm {
  value: string; purchasePrice: string; purchaseYear: string;
}
interface ContactForm {
  name: string; email: string; phone: string;
}
interface Results {
  monthlyActual: number; monthlyMarket: number;
  perPeriodActual: number; perPeriodMarket: number;
  monthlySavings: number; annualSavings: number;
  equity: number; accessibleEquity: number; ltv: number;
  appreciation: number; yearsOwned: number;
  renewalWarning: boolean; score: number;
  marketRate: number; rateDiff: number;
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function MortgageCheckerPage() {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [aiText, setAiText] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const [mortgage, setMortgage] = useState<MortgageForm>({
    balance: "", rate: "", type: "fixed_5",
    lender: "", amort: "", frequency: "monthly",
  });
  const [property, setProperty] = useState<PropertyForm>({
    value: "", purchasePrice: "", purchaseYear: "",
  });
  const [contact, setContact] = useState<ContactForm>({
    name: "", email: "", phone: "",
  });

  const setM = (k: keyof MortgageForm, v: string) => setMortgage(p => ({ ...p, [k]: v }));
  const setP = (k: keyof PropertyForm, v: string) => setProperty(p => ({ ...p, [k]: v }));
  const setC = (k: keyof ContactForm, v: string) => setContact(p => ({ ...p, [k]: v }));

  const validate = (s: number): boolean => {
    const e: Record<string, string> = {};
    if (s === 0) {
      if (!mortgage.balance || isNaN(+mortgage.balance) || +mortgage.balance <= 0) e.balance = "Required";
      if (!mortgage.rate || isNaN(+mortgage.rate) || +mortgage.rate <= 0 || +mortgage.rate > 20) e.rate = "Enter a valid rate (e.g. 5.49)";
      if (!mortgage.lender) e.lender = "Select your lender";
      if (!mortgage.amort || isNaN(+mortgage.amort) || +mortgage.amort < 1 || +mortgage.amort > 30) e.amort = "Enter years remaining (1–30)";
    }
    if (s === 1) {
      if (!property.value || isNaN(+property.value) || +property.value <= 0) e.value = "Required";
      if (!property.purchasePrice || isNaN(+property.purchasePrice) || +property.purchasePrice <= 0) e.purchasePrice = "Required";
      if (!property.purchaseYear || +property.purchaseYear < 1990 || +property.purchaseYear > new Date().getFullYear()) e.purchaseYear = "Enter a valid year";
    }
    if (s === 2) {
      if (!contact.name.trim()) e.name = "Required";
      if (!contact.email.includes("@")) e.email = "Enter a valid email";
      if (!contact.phone.replace(/\D/g, "").match(/^\d{10}$/)) e.phone = "Enter a 10-digit phone number";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate(step)) setStep(s => s + 1); };
  const back = () => { setErrors({}); setStep(s => s - 1); };

  // ── Compute + AI on step 3 ────────────────────────────────────────────────
  useEffect(() => {
    if (step !== 3) return;

    const bal = parseFloat(mortgage.balance);
    const rate = parseFloat(mortgage.rate);
    const amort = parseFloat(mortgage.amort);
    const propVal = parseFloat(property.value);
    const purchasePrice = parseFloat(property.purchasePrice);
    const purchaseYear = parseInt(property.purchaseYear);
    const marketRate = MARKET_RATES[mortgage.type];
    const freqFactor = FREQ_FACTORS[mortgage.frequency];

    const monthlyActual = calcMonthlyPayment(bal, rate, amort);
    const monthlyMarket = calcMonthlyPayment(bal, marketRate, amort);
    const perPeriodActual = (monthlyActual * 12) / freqFactor;
    const perPeriodMarket = (monthlyMarket * 12) / freqFactor;
    const monthlySavings = Math.max(0, monthlyActual - monthlyMarket);
    const annualSavings = monthlySavings * 12;

    const equity = Math.max(0, propVal - bal);
    const ltv = (bal / propVal) * 100;
    const accessibleEquity = ltv < 80 ? Math.max(0, propVal * 0.8 - bal) : 0;
    const appreciation = propVal - purchasePrice;
    const yearsOwned = new Date().getFullYear() - purchaseYear;
    const rateDiff = rate - marketRate;
    const renewalWarning = rateDiff > 0.5;

    let score = 100;
    if (rateDiff > 0) score -= Math.min(40, Math.round(rateDiff * 15));
    if (ltv > 80) score -= 15;
    if (amort > 20) score -= 10;
    if (rateDiff > 1) score -= 10;
    score = Math.max(10, Math.min(100, score));

    const r: Results = {
      monthlyActual, monthlyMarket, perPeriodActual, perPeriodMarket,
      monthlySavings, annualSavings, equity, accessibleEquity, ltv,
      appreciation, yearsOwned, renewalWarning, score, marketRate, rateDiff,
    };
    setResults(r);

    setLoading(true);
    setAiText("");

    const firstName = contact.name.split(" ")[0];

    // Build a personalized review directly from the computed numbers — no external API or package.
    const p1 = monthlySavings > 0
      ? `${firstName}, thanks for taking a few minutes to run your numbers. Looking at your situation, your current rate of ${rate}% is running above today's market, and that gap is costing you money every month. Your mortgage health score comes in at ${score}/100 — there's a clear opportunity here worth a closer look.`
      : `${firstName}, thanks for taking a few minutes to run your numbers. The good news is your current rate of ${rate}% is already competitive with today's market, and your mortgage health score of ${score}/100 reflects that you're in a solid position. It's still smart to review the details before your next renewal.`;

    const p2 = monthlySavings > 0
      ? `Based on a comparable market rate of ${marketRate}%, switching could save you roughly ${fmt(monthlySavings)} a month — about ${fmt(annualSavings)} a year that's currently staying with your lender instead of in your pocket. On a balance of $${fmtNum(bal)}, even a small rate difference adds up quickly over the life of your term.`
      : `At a market rate of ${marketRate}%, there isn't a meaningful payment saving to capture right now on your $${fmtNum(bal)} balance. That said, rates and your goals can shift, so it's worth keeping an eye on your renewal window so you're never caught paying more than you need to.`;

    const equityLine = accessibleEquity > 0
      ? ` You've also built up around $${fmtNum(accessibleEquity)} in accessible equity (you're at ${ltv.toFixed(0)}% loan-to-value), which could be used for renovations, debt consolidation, or an investment if that fits your plans.`
      : "";
    const p3 = renewalWarning
      ? `My honest recommendation: don't simply sign your lender's renewal letter. That offer is rarely their sharpest rate, and with your numbers, shopping the market 90–120 days before renewal could make a real difference.${equityLine}`
      : `My recommendation: start reviewing your options 90–120 days before your renewal date rather than waiting for your lender's letter, which is rarely their best offer.${equityLine}`;

    const p4 = `If you'd like, let's hop on a free 15-minute strategy call and I'll walk you through your specific options with access to 50+ lenders — no pressure, just a clear plan. Talk soon, BC Mortgage Team.`;

    const review = `${p1}\n\n${p2}\n\n${p3}\n\n${p4}`;

    setAiText(review);
    setLoading(false);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    sendLead(r, review);
  }, [step]);

  // ── Send lead to Rob via the existing /api/contact email pipeline ─────────
  const sendLead = (r: Results, review: string) => {
    const details = [
      `--- MORTGAGE CHECKER LEAD ---`,
      ``,
      `Current balance: $${fmtNum(parseFloat(mortgage.balance))}`,
      `Current rate: ${mortgage.rate}%`,
      `Mortgage type: ${RATE_LABELS[mortgage.type]}`,
      `Lender: ${mortgage.lender}`,
      `Amortization remaining: ${mortgage.amort} years`,
      `Payment frequency: ${mortgage.frequency}`,
      `Current ${mortgage.frequency} payment: ${fmt(r.perPeriodActual)}`,
      ``,
      `Property value: $${fmtNum(parseFloat(property.value))}`,
      `Original purchase price: $${fmtNum(parseFloat(property.purchasePrice))}`,
      `Year purchased: ${property.purchaseYear}`,
      ``,
      `Market rate: ${r.marketRate}%`,
      `Estimated monthly savings: ${fmt(r.monthlySavings)}`,
      `Estimated annual savings: ${fmt(r.annualSavings)}`,
      `Equity: $${fmtNum(r.equity)} (LTV: ${r.ltv.toFixed(1)}%)`,
      `Accessible equity: $${fmtNum(r.accessibleEquity)}`,
      `Strategy score: ${r.score}/100`,
      `Renewal warning: ${r.renewalWarning ? "Yes" : "No"}`,
      ``,
      `--- AI REVIEW SHOWN TO CLIENT ---`,
      review,
    ].join("\n");

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        mortgageType: "renewal",
        propertyValue: property.value ? `$${fmtNum(parseFloat(property.value))}` : "",
        downPayment: "",
        message: details,
        to: "rob@bcmortgageteam.com",
        subject: `Mortgage Checker Lead: ${contact.name} — ${fmt(r.annualSavings)}/yr potential savings`,
      }),
    }).catch(() => {
      // Silent: the user still sees their on-screen report even if the email fails.
    });
  };

  // ── Input styles ──────────────────────────────────────────────────────────
  const inp = (hasErr: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-base bg-gray-50 outline-none transition-colors ${hasErr ? "border-red-500" : "border-gray-200 focus:border-[#1D2D44]"}`;

  const btnPrimary = "w-full py-4 bg-[#1D2D44] hover:bg-[#1D2D44]/90 text-white rounded-xl text-base font-semibold mt-2 transition-colors cursor-pointer border-0";

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
    <Header />
    <div className="min-h-screen bg-[#F4F6F8] py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-8 sm:p-10">
        <StepDots current={step} total={4} />

        {/* ── STEP 0: Mortgage Details ── */}
        {step === 0 && (
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C79A2B] mb-3">Free · 2 minutes · No obligation</p>
            <h1 className="text-3xl font-bold text-[#1D2D44] mb-2" style={{ fontFamily: "Georgia, serif" }}>
              Am I overpaying on my mortgage?
            </h1>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Enter your details and we'll compare your rate against today's market — instantly showing what you could save.
            </p>

            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Remaining mortgage balance</label>
              <input type="number" placeholder="e.g. 450000" value={mortgage.balance} onChange={e => setM("balance", e.target.value)} className={inp(!!errors.balance)} />
              {errors.balance && <p className="text-red-500 text-xs mt-1">{errors.balance}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Your current interest rate (%)</label>
              <input type="number" step="0.01" placeholder="e.g. 5.49" value={mortgage.rate} onChange={e => setM("rate", e.target.value)} className={inp(!!errors.rate)} />
              {errors.rate && <p className="text-red-500 text-xs mt-1">{errors.rate}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Mortgage type</label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(RATE_LABELS).map(([val, lbl]) => (
                  <button
                    key={val}
                    onClick={() => setM("type", val)}
                    className={`py-2 px-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${mortgage.type === val ? "border-[#1D2D44] bg-[#1D2D44]/5 text-[#1D2D44]" : "border-gray-200 text-gray-500 hover:border-gray-400"}`}
                  >{lbl}</button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Current lender</label>
              <select value={mortgage.lender} onChange={e => setM("lender", e.target.value)} className={inp(!!errors.lender)}>
                <option value="">Select your lender</option>
                {LENDERS.map(l => <option key={l}>{l}</option>)}
              </select>
              {errors.lender && <p className="text-red-500 text-xs mt-1">{errors.lender}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Amortization remaining (yrs)</label>
                <input type="number" placeholder="e.g. 22" value={mortgage.amort} onChange={e => setM("amort", e.target.value)} className={inp(!!errors.amort)} />
                {errors.amort && <p className="text-red-500 text-xs mt-1">{errors.amort}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Payment frequency</label>
                <select value={mortgage.frequency} onChange={e => setM("frequency", e.target.value)} className={inp(false)}>
                  <option value="monthly">Monthly</option>
                  <option value="semi-monthly">Semi-monthly</option>
                  <option value="bi-weekly">Bi-weekly</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
            </div>

            <button className={btnPrimary} onClick={next}>Next: Property Details →</button>
          </div>
        )}

        {/* ── STEP 1: Property Details ── */}
        {step === 1 && (
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C79A2B] mb-3">Step 2 of 3</p>
            <h1 className="text-3xl font-bold text-[#1D2D44] mb-2" style={{ fontFamily: "Georgia, serif" }}>Your property details</h1>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">We'll use this to calculate your equity position and what you could potentially access.</p>

            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Current estimated property value</label>
              <input type="number" placeholder="e.g. 850000" value={property.value} onChange={e => setP("value", e.target.value)} className={inp(!!errors.value)} />
              {errors.value && <p className="text-red-500 text-xs mt-1">{errors.value}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Original purchase price</label>
              <input type="number" placeholder="e.g. 650000" value={property.purchasePrice} onChange={e => setP("purchasePrice", e.target.value)} className={inp(!!errors.purchasePrice)} />
              {errors.purchasePrice && <p className="text-red-500 text-xs mt-1">{errors.purchasePrice}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Year purchased</label>
              <input type="number" placeholder="e.g. 2018" value={property.purchaseYear} onChange={e => setP("purchaseYear", e.target.value)} className={inp(!!errors.purchaseYear)} />
              {errors.purchaseYear && <p className="text-red-500 text-xs mt-1">{errors.purchaseYear}</p>}
            </div>

            <button className={btnPrimary} onClick={next}>Next: Get My Results →</button>
            <button className="block mx-auto mt-3 text-sm text-gray-400 underline cursor-pointer bg-transparent border-0" onClick={back}>← Back</button>
          </div>
        )}

        {/* ── STEP 2: Contact Gate ── */}
        {step === 2 && (
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C79A2B] mb-3">Almost there</p>
            <h1 className="text-3xl font-bold text-[#1D2D44] mb-2" style={{ fontFamily: "Georgia, serif" }}>Where should we send your results?</h1>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">Your mortgage health report will be shown instantly.</p>

            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full name</label>
              <input type="text" placeholder="Jane Smith" value={contact.name} onChange={e => setC("name", e.target.value)} className={inp(!!errors.name)} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email address</label>
              <input type="email" placeholder="jane@email.com" value={contact.email} onChange={e => setC("email", e.target.value)} className={inp(!!errors.email)} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone number</label>
              <input type="tel" placeholder="604-555-0123" value={contact.phone} onChange={e => setC("phone", e.target.value)} className={inp(!!errors.phone)} />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <button className={btnPrimary} onClick={next}>Show My Mortgage Report →</button>
            <button className="block mx-auto mt-3 text-sm text-gray-400 underline cursor-pointer bg-transparent border-0" onClick={back}>← Back</button>
            <p className="text-center text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime. CASL compliant.</p>
          </div>
        )}

        {/* ── STEP 3: Results ── */}
        {step === 3 && results && (
          <div ref={resultRef}>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C79A2B] mb-3">Your Mortgage Health Report</p>
            <h1 className="text-2xl font-bold text-[#1D2D44] mb-1" style={{ fontFamily: "Georgia, serif" }}>
              Here&apos;s your full picture, {contact.name.split(" ")[0]}.
            </h1>
            <p className="text-gray-500 text-sm mb-6">Based on today&apos;s market rates for a {RATE_LABELS[mortgage.type]}.</p>

            <ScoreRing score={results.score} />

            {results.renewalWarning && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 flex gap-3 items-start">
                <span className="text-lg">⚠️</span>
                <p className="text-amber-800 text-sm">
                  Your rate is <strong>{results.rateDiff.toFixed(2)}%</strong> above today&apos;s market rate. This is worth reviewing before your next renewal.
                </p>
              </div>
            )}

            <div className="h-px bg-gray-100 my-5" />

            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Your Payments</p>
            <div className="flex flex-wrap gap-3 mb-4">
              <ResultCard icon="💳" label={`Your ${mortgage.frequency} payment`} value={fmt(results.perPeriodActual)} sub={`At ${mortgage.rate}%`} />
              <ResultCard icon="📉" label="Market-rate payment" value={fmt(results.perPeriodMarket)} sub={`At ${results.marketRate}%`} />
            </div>
            <div className="flex flex-wrap gap-3 mb-5">
              <ResultCard icon="💰" label="Est. monthly savings" value={results.monthlySavings > 0 ? fmt(results.monthlySavings) : "—"} sub={results.monthlySavings > 0 ? "If you switched today" : "Rate is competitive"} highlight={results.monthlySavings > 200} />
              <ResultCard icon="📅" label="Est. annual savings" value={results.annualSavings > 0 ? fmt(results.annualSavings) : "—"} sub={results.annualSavings > 0 ? "Over 12 months" : "Rate is competitive"} highlight={results.annualSavings > 2000} />
            </div>

            <div className="h-px bg-gray-100 my-5" />

            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Your Equity Position</p>
            <div className="flex flex-wrap gap-3 mb-4">
              <ResultCard icon="🏡" label="Total equity" value={fmt(results.equity)} sub={`LTV: ${results.ltv.toFixed(1)}%`} />
              <ResultCard icon="🔓" label="Accessible equity" value={results.accessibleEquity > 0 ? fmt(results.accessibleEquity) : "—"} sub={results.accessibleEquity > 0 ? "Up to 80% LTV" : "LTV above 80%"} highlight={results.accessibleEquity > 50000} />
            </div>
            <div className="flex flex-wrap gap-3 mb-5">
              <ResultCard icon="📈" label="Property appreciation" value={fmt(results.appreciation)} sub={`Since ${property.purchaseYear} (${results.yearsOwned} yrs)`} />
              <ResultCard icon="🎯" label="Strategy score" value={`${results.score}/100`} sub={results.score >= 70 ? "Well positioned" : results.score >= 40 ? "Room to improve" : "Action recommended"} />
            </div>

            <div className="h-px bg-gray-100 my-5" />

            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">BC Mortgage Team&apos;s Assessment</p>
            <div className="bg-[#F4F6F8] border-l-4 border-[#C79A2B] rounded-xl p-5 text-sm text-gray-700 leading-relaxed mb-6">
              {loading
                ? <span className="animate-pulse">Preparing your personalized mortgage review…</span>
                : aiText || "Unable to generate review. Please book a call for your full assessment."
              }
            </div>

            <Link
              href="https://calendly.com/bcmortgageteam/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-[#1D2D44] hover:bg-[#1D2D44]/90 text-white rounded-xl text-base font-semibold text-center transition-colors"
            >
              📅 Book My Free 15-Minute Strategy Call
            </Link>

            <button
              className="block mx-auto mt-4 text-sm text-gray-400 underline cursor-pointer bg-transparent border-0"
              onClick={() => {
                setStep(0); setResults(null); setAiText("");
                setMortgage({ balance: "", rate: "", type: "fixed_5", lender: "", amort: "", frequency: "monthly" });
                setProperty({ value: "", purchasePrice: "", purchaseYear: "" });
                setContact({ name: "", email: "", phone: "" });
              }}
            >Start over</button>
          </div>
        )}
      </div>

      <p className="text-center text-xs text-gray-400 mt-6 leading-relaxed">
        Rob Bhullar · BRX Mortgage Inc. · BCFSA: X301291<br />
        Rates shown are current market estimates for comparison only and subject to change. Not a commitment to lend.
      </p>
    </div>
    </>
  );
}
