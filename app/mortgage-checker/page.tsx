"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}
// ── Market rates — update these periodically ─────────────────────────────────
const MARKET_RATES: Record<string, number> = {
  fixed_1: 4.84,
  fixed_2: 4.39,
  fixed_3: 4.49,
  fixed_5: 4.64,
  variable: 3.95,
};
const RATE_LABELS: Record<string, string> = {
  fixed_1: "1-yr Fixed",
  fixed_2: "2-yr Fixed",
  fixed_3: "3-yr Fixed",
  fixed_5: "5-yr Fixed",
  variable: "Variable",
};
const LENDERS = [
  "TD Bank",
  "RBC",
  "BMO",
  "CIBC",
  "Scotiabank",
  "National Bank",
  "Meridian",
  "First National",
  "MCAP",
  "Radius Financial",
  "Other",
];
const SERVICE_OPTIONS = ["New Purchase", "Renewal", "Refinance", "Other"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const FREQ_FACTORS: Record<string, number> = {
  monthly: 12,
  "semi-monthly": 24,
  "bi-weekly": 26,
  "accelerated-bi-weekly": 24,
  weekly: 52,
  "accelerated-weekly": 48,
};
const FREQ_LABELS: Record<string, string> = {
  monthly: "Monthly",
  "semi-monthly": "Semi-monthly",
  "bi-weekly": "Bi-weekly",
  "accelerated-bi-weekly": "Accelerated bi-weekly",
  weekly: "Weekly",
  "accelerated-weekly": "Accelerated weekly",
};
// ── Helpers ───────────────────────────────────────────────────────────────────
// Canadian mortgage payment formula: fixed mortgages use semi-annual compounding.
// This also works well as an estimate for variable comparison purposes.
function calcMonthlyPayment(
  principal: number,
  annualRate: number,
  amortYears: number,
): number {
  if (!principal || !annualRate || !amortYears) return 0;
  const nominal = annualRate / 100;
  const monthlyRate = Math.pow(1 + nominal / 2, 2 / 12) - 1;
  const n = amortYears * 12;
  if (monthlyRate === 0) return principal / n;
  return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -n));
}
function fmt(n: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(n);
}
function fmtNum(n: number): string {
  return new Intl.NumberFormat("en-CA", {
    maximumFractionDigits: 0,
  }).format(n);
}
function getPerPeriodPayment(monthlyPayment: number, frequency: string): number {
  if (frequency === "accelerated-bi-weekly") return monthlyPayment / 2;
  if (frequency === "accelerated-weekly") return monthlyPayment / 4;
  const factor = FREQ_FACTORS[frequency] || 12;
  return (monthlyPayment * 12) / factor;
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
  const label =
    score >= 70 ? "Well Positioned" : score >= 40 ? "Room to Save" : "Likely Overpaying";
  return (
    <div className="text-center mb-4">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={radius} fill="none" stroke="#f0f0f0" strokeWidth="10" />
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "70px 70px",
            transition: "stroke-dashoffset 1.2s ease",
          }}
        />
        <text
          x="70"
          y="65"
          textAnchor="middle"
          fontSize="28"
          fontWeight="700"
          fill="#1a1a1a"
          fontFamily="Georgia, serif"
        >
          {score}
        </text>
        <text x="70" y="84" textAnchor="middle" fontSize="11" fill="#888">
          /100
        </text>
      </svg>
      <span
        className="inline-block text-white text-sm font-bold px-4 py-1 rounded-full"
        style={{ background: color }}
      >
        {label}
      </span>
    </div>
  );
}
function ResultCard({
  label,
  value,
  sub,
  highlight,
  icon,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
  icon: string;
}) {
  return (
    <div
      className="rounded-2xl p-4 flex-1"
      style={{
        minWidth: 130,
        background: highlight
          ? "linear-gradient(135deg, #1D2D44 0%, #2a4060 100%)"
          : "#F4F6F8",
        border: highlight ? "none" : "1px solid #e8e8e8",
      }}
    >
      <div className="text-xl mb-1">{icon}</div>
      <div
        className="text-2xl font-bold"
        style={{
          fontFamily: "Georgia, serif",
          color: highlight ? "#C79A2B" : "#1a1a1a",
        }}
      >
        {value}
      </div>
      <div className="text-xs mt-1" style={{ color: highlight ? "#a8c5e0" : "#888" }}>
        {label}
      </div>
      {sub && (
        <div className="text-xs mt-1" style={{ color: highlight ? "#7a9fc0" : "#aaa" }}>
          {sub}
        </div>
      )}
    </div>
  );
}
// ── Types ─────────────────────────────────────────────────────────────────────
interface MortgageForm {
  service: string;
  balance: string;
  rate: string;
  type: string;
  lender: string;
  amort: string;
  originalAmort: string;
  yearsIntoAmort: string;
  frequency: string;
  renewalMonth: string;
  renewalYear: string;
}
interface PropertyForm {
  value: string;
  purchasePrice: string;
  purchaseYear: string;
}
interface ContactForm {
  name: string;
  email: string;
  phone: string;
}
type RenewalUrgency = "imminent" | "upcoming" | "distant" | "overdue" | "unknown";
interface Results {
  monthlyActual: number;
  monthlyMarket: number;
  perPeriodActual: number;
  perPeriodMarket: number;
  monthlySavings: number;
  annualSavings: number;
  equity: number;
  accessibleEquity: number;
  ltv: number;
  appreciation: number;
  yearsOwned: number;
  amortRemaining: number;
  renewalWarning: boolean;
  score: number;
  marketRate: number;
  rateDiff: number;
  monthsToRenewal: number | null;
  renewalUrgency: RenewalUrgency;
  earlyBreakLikely: boolean | null;
}
// ── Main Component ────────────────────────────────────────────────────────────
export default function MortgageCheckerPage() {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [aiText, setAiText] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const conversionSent = useRef(false);
  const [mortgage, setMortgage] = useState<MortgageForm>({
    service: "",
    balance: "",
    rate: "",
    type: "fixed_5",
    lender: "",
    amort: "",
    originalAmort: "",
    yearsIntoAmort: "",
    frequency: "monthly",
    renewalMonth: "",
    renewalYear: "",
  });
  const [property, setProperty] = useState<PropertyForm>({
    value: "",
    purchasePrice: "",
    purchaseYear: "",
  });
  const [contact, setContact] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
  });
  const setM = (k: keyof MortgageForm, v: string) =>
    setMortgage((p) => ({ ...p, [k]: v }));
  const setP = (k: keyof PropertyForm, v: string) =>
    setProperty((p) => ({ ...p, [k]: v }));
  const setC = (k: keyof ContactForm, v: string) =>
    setContact((p) => ({ ...p, [k]: v }));
  const currentYear = new Date().getFullYear();
  const YEARS = Array.from({ length: 7 }, (_, i) => currentYear + i);
  const isNewPurchase = mortgage.service === "New Purchase";
  const validate = (s: number): boolean => {
    const e: Record<string, string> = {};
    if (s === 0) {
      if (!mortgage.service) e.service = "Please select one";
      if (!isNewPurchase) {
        if (!mortgage.balance || isNaN(+mortgage.balance) || +mortgage.balance <= 0) {
          e.balance = "Required";
        }
        if (
          !mortgage.rate ||
          isNaN(+mortgage.rate) ||
          +mortgage.rate <= 0 ||
          +mortgage.rate > 20
        ) {
          e.rate = "Enter a valid rate, e.g. 5.49";
        }
        if (!mortgage.lender) e.lender = "Select your lender";
      }
      if (isNewPurchase) {
        if (!mortgage.amort || isNaN(+mortgage.amort) || +mortgage.amort < 1 || +mortgage.amort > 30) {
          e.amort = "Enter years remaining, 1–30";
        }
      } else {
        if (
          !mortgage.originalAmort ||
          isNaN(+mortgage.originalAmort) ||
          +mortgage.originalAmort < 1 ||
          +mortgage.originalAmort > 35
        ) {
          e.originalAmort = "Enter original amortization, 1–35";
        }
        if (
          mortgage.yearsIntoAmort === "" ||
          isNaN(+mortgage.yearsIntoAmort) ||
          +mortgage.yearsIntoAmort < 0
        ) {
          e.yearsIntoAmort = "Enter years, 0 or more";
        } else if (
          !e.originalAmort &&
          +mortgage.yearsIntoAmort >= +mortgage.originalAmort
        ) {
          e.yearsIntoAmort = "Should be less than original amortization";
        }
      }
    }
    if (s === 1) {
      if (!property.value || isNaN(+property.value) || +property.value <= 0) {
        e.value = "Required";
      }
      if (!isNewPurchase) {
        if (!property.purchasePrice || isNaN(+property.purchasePrice) || +property.purchasePrice <= 0) {
          e.purchasePrice = "Required";
        }
        if (
          !property.purchaseYear ||
          +property.purchaseYear < 1990 ||
          +property.purchaseYear > new Date().getFullYear()
        ) {
          e.purchaseYear = "Enter a valid year";
        }
      }
    }
    if (s === 2) {
      if (!contact.name.trim()) e.name = "Required";
      if (!contact.email.includes("@")) e.email = "Enter a valid email";
      if (!contact.phone.replace(/\D/g, "").match(/^\d{10}$/)) {
        e.phone = "Enter a 10-digit phone number";
      }
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const next = () => {
    if (validate(step)) setStep((s) => s + 1);
  };
  const back = () => {
    setErrors({});
    setStep((s) => s - 1);
  };
  useEffect(() => {
    if (step !== 3) return;
    const bal = isNewPurchase ? parseFloat(property.value) * 0.8 : parseFloat(mortgage.balance);
    const rate = isNewPurchase ? MARKET_RATES[mortgage.type] : parseFloat(mortgage.rate);
    // For existing mortgages, the client enters their original amortization and how
    // long they've been paying on it — we compute the true remaining years ourselves
    // rather than asking them to do that subtraction (and risk them re-entering their
    // original term out of habit instead of what's actually left).
    const amort = isNewPurchase
      ? parseFloat(mortgage.amort)
      : Math.max(1, parseFloat(mortgage.originalAmort) - parseFloat(mortgage.yearsIntoAmort));
    const propVal = parseFloat(property.value);
    const purchasePrice = isNewPurchase
      ? parseFloat(property.value)
      : parseFloat(property.purchasePrice);
    const purchaseYear = isNewPurchase
      ? new Date().getFullYear()
      : parseInt(property.purchaseYear);
    const marketRate = MARKET_RATES[mortgage.type];
    const monthlyActual = calcMonthlyPayment(bal, rate, amort);
    const monthlyMarket = calcMonthlyPayment(bal, marketRate, amort);
    const perPeriodActual = getPerPeriodPayment(monthlyActual, mortgage.frequency);
    const perPeriodMarket = getPerPeriodPayment(monthlyMarket, mortgage.frequency);
    const monthlySavings = isNewPurchase ? 0 : Math.max(0, monthlyActual - monthlyMarket);
    const annualSavings = monthlySavings * 12;
    const equity = Math.max(0, propVal - bal);
    const ltv = propVal > 0 ? (bal / propVal) * 100 : 0;
    const accessibleEquity = ltv < 80 ? Math.max(0, Math.min(propVal * 0.8 - bal, propVal - bal)) : 0;
    const appreciation = propVal - purchasePrice;
    const yearsOwned = new Date().getFullYear() - purchaseYear;
    const rateDiff = isNewPurchase ? 0 : rate - marketRate;
    const renewalWarning = !isNewPurchase && rateDiff > 0.5;
    const renewalMonth = mortgage.renewalMonth ? parseInt(mortgage.renewalMonth) : null;
    const renewalYearInput = mortgage.renewalYear ? parseInt(mortgage.renewalYear) : null;
    const hasRenewalDate = renewalMonth !== null && renewalYearInput !== null;
    const now = new Date();
    const monthsToRenewal = hasRenewalDate
      ? (renewalYearInput! - now.getFullYear()) * 12 + (renewalMonth! - (now.getMonth() + 1))
      : null;
    let renewalUrgency: RenewalUrgency = "unknown";
    if (!isNewPurchase && monthsToRenewal !== null) {
      if (monthsToRenewal < 0) renewalUrgency = "overdue";
      else if (monthsToRenewal <= 4) renewalUrgency = "imminent";
      else if (monthsToRenewal <= 12) renewalUrgency = "upcoming";
      else renewalUrgency = "distant";
    }
    const earlyBreakLikely = isNewPurchase
      ? null
      : monthsToRenewal === null
        ? null
        : monthsToRenewal > 4;
    let score = 100;
    if (!isNewPurchase && rateDiff > 0) {
      score -= Math.min(40, Math.round(rateDiff * 15));
    }
    if (ltv > 80) score -= 15;
    if (amort > 25) score -= 5;
    score = Math.max(10, Math.min(100, score));
    const r: Results = {
      monthlyActual,
      monthlyMarket,
      perPeriodActual,
      perPeriodMarket,
      monthlySavings,
      annualSavings,
      equity,
      accessibleEquity,
      ltv,
      appreciation,
      yearsOwned,
      amortRemaining: amort,
      renewalWarning,
      score,
      marketRate,
      rateDiff,
      monthsToRenewal,
      renewalUrgency,
      earlyBreakLikely,
    };
    setResults(r);
    setLoading(true);
    setAiText("");
    const firstName = contact.name.split(" ")[0];
    const p1 = (() => {
      if (isNewPurchase) {
        return `${firstName}, thanks for running your numbers. Based on a property value of ${fmt(propVal)}, this gives you a useful starting point for understanding estimated payments, loan-to-value, and affordability before making a purchase.`;
      }
      if (monthlySavings > 0) {
        return `${firstName}, your current rate of ${rate}% is running above today's market — that gap is worth addressing because lenders rarely lead with their best offer.`;
      }
      if (renewalUrgency === "imminent" || renewalUrgency === "overdue") {
        return `${firstName}, thanks for taking a few minutes to run your numbers. The good news is your current rate of ${rate}% is already competitive with today's market, and your mortgage health score of ${score}/100 reflects that you're in a solid position. Since your term is coming up for renewal soon, now's the time to make sure that stays true for your next term too.`;
      }
      return `${firstName}, thanks for taking a few minutes to run your numbers. The good news is your current rate of ${rate}% is already competitive with today's market, and your mortgage health score of ${score}/100 reflects that you're in a solid position. It's still smart to review the details before your next renewal.`;
    })();
    const p2 = (() => {
      if (isNewPurchase) {
        return `Using a comparable market rate of ${marketRate}%, your estimated payment would be about ${fmt(perPeriodMarket)} ${FREQ_LABELS[mortgage.frequency].toLowerCase()} based on an estimated 80% loan-to-value mortgage.`;
      }
      if (monthlySavings > 0) {
        return `Based on a comparable market rate of ${marketRate}%, switching could save you roughly ${fmt(monthlySavings)} a month — about ${fmt(annualSavings)} a year.`;
      }
      return `At a market rate of ${marketRate}%, there isn't a meaningful payment saving to capture right now on your $${fmtNum(bal)} balance. That said, rates and your goals can shift, so it's worth keeping an eye on your renewal window so you're never caught paying more than you need to.`;
    })();
    const equityLine = accessibleEquity > 0
      ? `You've also built up around $${fmtNum(accessibleEquity)} in accessible equity, with your mortgage at approximately ${ltv.toFixed(0)}% loan-to-value.`
      : "";
    const penaltyNote = (() => {
      if (isNewPurchase || monthlySavings <= 0) return "";
      if (earlyBreakLikely === true) {
        const penaltyType =
          mortgage.type === "variable"
            ? "a penalty, typically three months' interest"
            : "a prepayment penalty, typically the greater of three months' interest or an interest rate differential";
        return `One important note: with roughly ${monthsToRenewal} months left in your current term, switching today would mean breaking it early, which usually triggers ${penaltyType}. The savings above don't factor that in — speak with the BC Mortgage Team to run your actual numbers before assuming it's worth it.`;
      }
      if (earlyBreakLikely === null) {
        return `One note: the savings above assume there's no cost to switch. If you're not yet at the end of your current term, breaking it early can trigger a penalty that isn't reflected here — share your renewal date with the BC Mortgage Team for a clearer picture.`;
      }
      return "";
    })();
    const renewalLine = (() => {
      if (isNewPurchase) return "";
      if (renewalUrgency === "overdue") {
        return `One thing worth flagging: based on what you entered, your current term may have already ended. If so, it's worth confirming you're not sitting on your lender's posted rate by default, since that's rarely their best offer.`;
      }
      if (renewalUrgency === "imminent") {
        const m = monthsToRenewal as number;
        return `Your current term is set to renew in about ${m} month${m === 1 ? "" : "s"} — this is exactly the window to shop the market before your lender's renewal letter arrives, rather than after.`;
      }
      if (renewalUrgency === "upcoming") {
        return `Your renewal is roughly ${monthsToRenewal} months out. Not urgent yet, but worth getting on the calendar so you're not caught off guard when it arrives.`;
      }
      return "";
    })();
    const p3 = (() => {
      if (isNewPurchase) {
        return `Recommendation: speak with the BC Mortgage Team before writing an offer so you can confirm your real borrowing power, payment comfort, down payment strategy, and whether a fixed or variable rate makes the most sense.${equityLine ? ` ${equityLine}` : ""}`;
      }
      if (renewalUrgency === "imminent" || renewalUrgency === "overdue") {
        return `Recommendation: speak with the BC Mortgage Team to lock in your next term with the best available rate rather than defaulting to your lender's renewal offer.${equityLine ? ` ${equityLine}` : ""}`;
      }
      return renewalWarning
        ? `Recommendation: it's worth shopping the market before your next renewal rather than simply signing your lender's renewal letter, since that offer is rarely their sharpest rate.${equityLine ? ` ${equityLine}` : ""}`
        : `Recommendation: start reviewing your options 90–120 days before your renewal date rather than waiting for your lender's letter, which is rarely their best offer.${equityLine ? ` ${equityLine}` : ""}`;
    })();
    const p4 =
      "Speak with the BC Mortgage Team on a free 15-minute call — no pressure, just a clear plan, with access to 50+ lenders.";
    const review = [p1, p2, penaltyNote, renewalLine, p3, p4]
      .filter(Boolean)
      .join("\n\n");
    setAiText(review);
    setLoading(false);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    if (!conversionSent.current) {
      conversionSent.current = true;
      sendLead(r, review);
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "mortgage_checker_complete",
          conversion_value: 50,
          currency: "CAD",
        });
      }
    }
  }, [step]);
  const sendLead = (r: Results, review: string) => {
    const mortgageType = mortgage.service || "Not specified";
    const renewalDateLabel =
      mortgage.renewalMonth && mortgage.renewalYear
        ? `${MONTHS[parseInt(mortgage.renewalMonth) - 1]} ${mortgage.renewalYear}`
        : "Not provided";
    const isUrgent = r.renewalUrgency === "imminent" || r.renewalUrgency === "overdue";
    const subjectSavings =
      r.annualSavings > 0 ? ` — ${fmt(r.annualSavings)}/yr potential savings` : "";
    const subject = `${isUrgent ? "⚠️ " : ""}Mortgage Checker Lead: ${contact.name} — ${mortgageType}${subjectSavings}`;
    const details = [
      "--- MORTGAGE CHECKER LEAD ---",
      "",
      `Service requested: ${mortgageType}`,
      `Current balance: ${mortgage.balance ? `$${fmtNum(parseFloat(mortgage.balance))}` : "Not provided / purchase estimate"}`,
      `Current rate: ${mortgage.rate ? `${mortgage.rate}%` : "Not provided / purchase estimate"}`,
      `Mortgage type: ${RATE_LABELS[mortgage.type]}`,
      `Lender: ${mortgage.lender || "Not provided"}`,
      `Amortization remaining: ${r.amortRemaining} years${
        isNewPurchase ? "" : ` (original ${mortgage.originalAmort} yrs, ${mortgage.yearsIntoAmort} yrs in)`
      }`,
      `Payment frequency: ${FREQ_LABELS[mortgage.frequency]}`,
      `Estimated ${FREQ_LABELS[mortgage.frequency].toLowerCase()} payment: ${fmt(r.perPeriodActual)}`,
      `Renewal date: ${renewalDateLabel}`,
      `Months to renewal: ${r.monthsToRenewal !== null ? r.monthsToRenewal : "—"}`,
      `Renewal urgency: ${r.renewalUrgency}${isUrgent ? " ⚠️" : ""}`,
      `Likely mid-term: ${
        r.earlyBreakLikely === null ? "Unknown" : r.earlyBreakLikely ? "Yes" : "No"
      }`,
      "",
      `Property value: $${fmtNum(parseFloat(property.value))}`,
      `Original purchase price: ${
        property.purchasePrice ? `$${fmtNum(parseFloat(property.purchasePrice))}` : "Not provided / new purchase"
      }`,
      `Year purchased: ${property.purchaseYear || "Not provided / new purchase"}`,
      "",
      `Market rate: ${r.marketRate}%`,
      `Estimated monthly savings: ${fmt(r.monthlySavings)}`,
      `Estimated annual savings: ${fmt(r.annualSavings)}`,
      `Equity: $${fmtNum(r.equity)} (LTV: ${r.ltv.toFixed(1)}%)`,
      `Accessible equity: $${fmtNum(r.accessibleEquity)}`,
      `Strategy score: ${r.score}/100`,
      `Renewal warning: ${r.renewalWarning ? "Yes" : "No"}`,
      "",
      "--- AI REVIEW SHOWN TO CLIENT ---",
      review,
    ].join("\n");
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        mortgageType,
        propertyValue: property.value ? `$${fmtNum(parseFloat(property.value))}` : "",
        downPayment: "",
        message: details,
        to: "rob@bcmortgageteam.com",
        subject,
      }),
    }).catch((err) => {
      console.error("Mortgage checker lead failed:", err);
    });
  };
  const inp = (hasErr: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-base bg-gray-50 outline-none transition-colors ${
      hasErr ? "border-red-500" : "border-gray-200 focus:border-[#1D2D44]"
    }`;
  const btnPrimary =
    "w-full py-4 bg-[#1D2D44] hover:bg-[#1D2D44]/90 text-white rounded-xl text-base font-semibold mt-2 transition-colors cursor-pointer border-0";
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#F4F6F8] py-10 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-8 sm:p-10">
          <StepDots current={step} total={4} />
          {step === 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#C79A2B] mb-3">
                Free · 2 minutes · No obligation
              </p>
              <h1
                className="text-3xl font-bold text-[#1D2D44] mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Am I overpaying on my mortgage?
              </h1>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Enter your details and we'll compare your rate against today's market — instantly showing what you could save.
              </p>
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  What are you looking for?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setM("service", opt)}
                      className={`py-2 px-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        mortgage.service === opt
                          ? "border-[#1D2D44] bg-[#1D2D44]/5 text-[#1D2D44]"
                          : "border-gray-200 text-gray-500 hover:border-gray-400"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>
              {!isNewPurchase && (
                <>
                  <div className="mb-5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Remaining mortgage balance
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 450000"
                      value={mortgage.balance}
                      onChange={(e) => setM("balance", e.target.value)}
                      className={inp(!!errors.balance)}
                    />
                    {errors.balance && <p className="text-red-500 text-xs mt-1">{errors.balance}</p>}
                  </div>
                  <div className="mb-5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Your current interest rate (%)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="e.g. 5.49"
                      value={mortgage.rate}
                      onChange={(e) => setM("rate", e.target.value)}
                      className={inp(!!errors.rate)}
                    />
                    {errors.rate && <p className="text-red-500 text-xs mt-1">{errors.rate}</p>}
                  </div>
                </>
              )}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  {isNewPurchase ? "Preferred mortgage type" : "Mortgage type"}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(RATE_LABELS).map(([val, lbl]) => (
                    <button
                      key={val}
                      onClick={() => setM("type", val)}
                      className={`py-2 px-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        mortgage.type === val
                          ? "border-[#1D2D44] bg-[#1D2D44]/5 text-[#1D2D44]"
                          : "border-gray-200 text-gray-500 hover:border-gray-400"
                      }`}
                    >
                      {lbl}
                    </button>
                  ))}
                </div>
              </div>
              {!isNewPurchase && (
                <div className="mb-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    When does your current term renew?{" "}
                    <span className="text-gray-400 font-normal">(optional, but helps a lot)</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <select
                      value={mortgage.renewalMonth}
                      onChange={(e) => setM("renewalMonth", e.target.value)}
                      className={inp(false)}
                    >
                      <option value="">Month</option>
                      {MONTHS.map((m, i) => (
                        <option key={m} value={i + 1}>
                          {m}
                        </option>
                      ))}
                    </select>
                    <select
                      value={mortgage.renewalYear}
                      onChange={(e) => setM("renewalYear", e.target.value)}
                      className={inp(false)}
                    >
                      <option value="">Year</option>
                      {YEARS.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              {!isNewPurchase && (
                <div className="mb-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Current lender
                  </label>
                  <select
                    value={mortgage.lender}
                    onChange={(e) => setM("lender", e.target.value)}
                    className={inp(!!errors.lender)}
                  >
                    <option value="">Select your lender</option>
                    {LENDERS.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                  {errors.lender && <p className="text-red-500 text-xs mt-1">{errors.lender}</p>}
                </div>
              )}
              {isNewPurchase ? (
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Desired amortization (yrs)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 25"
                      value={mortgage.amort}
                      onChange={(e) => setM("amort", e.target.value)}
                      className={inp(!!errors.amort)}
                    />
                    {errors.amort && <p className="text-red-500 text-xs mt-1">{errors.amort}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Payment frequency
                    </label>
                    <select
                      value={mortgage.frequency}
                      onChange={(e) => setM("frequency", e.target.value)}
                      className={inp(false)}
                    >
                      {Object.entries(FREQ_LABELS).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Original amortization (yrs)
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 25"
                        value={mortgage.originalAmort}
                        onChange={(e) => setM("originalAmort", e.target.value)}
                        className={inp(!!errors.originalAmort)}
                      />
                      {errors.originalAmort && (
                        <p className="text-red-500 text-xs mt-1">{errors.originalAmort}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Years since it started
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 2"
                        value={mortgage.yearsIntoAmort}
                        onChange={(e) => setM("yearsIntoAmort", e.target.value)}
                        className={inp(!!errors.yearsIntoAmort)}
                      />
                      {errors.yearsIntoAmort && (
                        <p className="text-red-500 text-xs mt-1">{errors.yearsIntoAmort}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mb-5 leading-snug min-h-[1rem]">
                    {mortgage.originalAmort &&
                      mortgage.yearsIntoAmort !== "" &&
                      !isNaN(+mortgage.originalAmort) &&
                      !isNaN(+mortgage.yearsIntoAmort) &&
                      !errors.originalAmort &&
                      !errors.yearsIntoAmort &&
                      `= ${Math.max(
                        1,
                        Math.round(+mortgage.originalAmort - +mortgage.yearsIntoAmort),
                      )} years remaining — we'll use this for your payment calculation.`}
                  </p>
                  <div className="mb-5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Payment frequency
                    </label>
                    <select
                      value={mortgage.frequency}
                      onChange={(e) => setM("frequency", e.target.value)}
                      className={inp(false)}
                    >
                      {Object.entries(FREQ_LABELS).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
              <button className={btnPrimary} onClick={next}>
                Next: Property Details →
              </button>
            </div>
          )}
          {step === 1 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#C79A2B] mb-3">
                Step 2 of 4
              </p>
              <h1
                className="text-3xl font-bold text-[#1D2D44] mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Your property details
              </h1>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                We'll use this to calculate your equity position and what you could potentially access.
              </p>
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  {isNewPurchase ? "Estimated purchase price" : "Current estimated property value"}
                </label>
                <input
                  type="number"
                  placeholder="e.g. 850000"
                  value={property.value}
                  onChange={(e) => setP("value", e.target.value)}
                  className={inp(!!errors.value)}
                />
                {errors.value && <p className="text-red-500 text-xs mt-1">{errors.value}</p>}
              </div>
              {!isNewPurchase && (
                <>
                  <div className="mb-5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Original purchase price
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 650000"
                      value={property.purchasePrice}
                      onChange={(e) => setP("purchasePrice", e.target.value)}
                      className={inp(!!errors.purchasePrice)}
                    />
                    {errors.purchasePrice && (
                      <p className="text-red-500 text-xs mt-1">{errors.purchasePrice}</p>
                    )}
                  </div>
                  <div className="mb-5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Year purchased
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 2018"
                      value={property.purchaseYear}
                      onChange={(e) => setP("purchaseYear", e.target.value)}
                      className={inp(!!errors.purchaseYear)}
                    />
                    {errors.purchaseYear && (
                      <p className="text-red-500 text-xs mt-1">{errors.purchaseYear}</p>
                    )}
                  </div>
                </>
              )}
              <button className={btnPrimary} onClick={next}>
                Next: Get My Results →
              </button>
              <button
                className="block mx-auto mt-3 text-sm text-gray-400 underline cursor-pointer bg-transparent border-0"
                onClick={back}
              >
                ← Back
              </button>
            </div>
          )}
          {step === 2 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#C79A2B] mb-3">
                Almost there
              </p>
              <h1
                className="text-3xl font-bold text-[#1D2D44] mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Where should we send your results?
              </h1>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Your mortgage health report will be shown instantly.
              </p>
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={contact.name}
                  onChange={(e) => setC("name", e.target.value)}
                  className={inp(!!errors.name)}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="jane@email.com"
                  value={contact.email}
                  onChange={(e) => setC("email", e.target.value)}
                  className={inp(!!errors.email)}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="604-555-0123"
                  value={contact.phone}
                  onChange={(e) => setC("phone", e.target.value)}
                  className={inp(!!errors.phone)}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <button className={btnPrimary} onClick={next}>
                Show My Mortgage Report →
              </button>
              <button
                className="block mx-auto mt-3 text-sm text-gray-400 underline cursor-pointer bg-transparent border-0"
                onClick={back}
              >
                ← Back
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                No spam. Unsubscribe anytime. CASL compliant.
              </p>
            </div>
          )}
          {step === 3 && results && (
            <div ref={resultRef}>
              <p className="text-xs font-bold uppercase tracking-widest text-[#C79A2B] mb-3">
                Your Mortgage Health Report
              </p>
              <h1
                className="text-2xl font-bold text-[#1D2D44] mb-1"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Here&apos;s your full picture, {contact.name.split(" ")[0]}.
              </h1>
              <p className="text-gray-500 text-sm mb-6">
                Based on today&apos;s market rates for a {RATE_LABELS[mortgage.type]}.
              </p>
              {!isNewPurchase && <ScoreRing score={results.score} />}
              {isNewPurchase && (
                <p className="text-center text-sm text-gray-500 mb-5 leading-relaxed">
                  This is an early estimate based on a typical 80% loan-to-value mortgage — your real numbers will depend on your down payment, credit profile, and the property you choose.
                </p>
              )}
              {results.renewalWarning && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 flex gap-3 items-start">
                  <span className="text-lg">⚠️</span>
                  <p className="text-amber-800 text-sm">
                    Your rate is <strong>{results.rateDiff.toFixed(2)}%</strong> above today&apos;s market rate.
                    This is worth reviewing before your next renewal.
                  </p>
                </div>
              )}
              {results.renewalUrgency === "overdue" && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 flex gap-3 items-start">
                  <span className="text-lg">⏰</span>
                  <p className="text-amber-800 text-sm">
                    Based on what you entered, your current term may have already ended. If so, you could be sitting on your lender&apos;s posted rate by default — worth confirming.
                  </p>
                </div>
              )}
              {results.renewalUrgency === "imminent" && (
                <div
                  className="rounded-xl p-4 mb-5 flex gap-3 items-start"
                  style={{
                    background: "rgba(199,154,43,0.1)",
                    border: "1px solid rgba(199,154,43,0.4)",
                  }}
                >
                  <span className="text-lg">📅</span>
                  <p className="text-sm" style={{ color: "#8a6c1f" }}>
                    Your term renews in about{" "}
                    <strong>
                      {results.monthsToRenewal} month{results.monthsToRenewal === 1 ? "" : "s"}
                    </strong>{" "}
                    — the ideal window to lock in your next rate before your lender&apos;s letter arrives.
                  </p>
                </div>
              )}
              {results.renewalUrgency === "upcoming" && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-5 flex gap-3 items-start">
                  <span className="text-lg">🗓️</span>
                  <p className="text-gray-600 text-sm">
                    Your renewal is about <strong>{results.monthsToRenewal} months</strong> out — worth keeping on your radar.
                  </p>
                </div>
              )}
              <div className="h-px bg-gray-100 my-5" />
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Your Payments
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <ResultCard
                  icon="💳"
                  label={`Your ${FREQ_LABELS[mortgage.frequency].toLowerCase()} payment`}
                  value={fmt(results.perPeriodActual)}
                  sub={isNewPurchase ? "Estimated purchase payment" : `At ${mortgage.rate}%`}
                />
                {!isNewPurchase && (
                  <ResultCard
                    icon="📉"
                    label="Market-rate payment"
                    value={fmt(results.perPeriodMarket)}
                    sub={`At ${results.marketRate}%`}
                  />
                )}
              </div>
              {!isNewPurchase && (
                <>
                  <div className="flex flex-wrap gap-3 mb-2">
                    <ResultCard
                      icon="💰"
                      label="Est. monthly savings"
                      value={results.monthlySavings > 0 ? fmt(results.monthlySavings) : "—"}
                      sub={results.monthlySavings > 0 ? "If you switched today" : "Rate is competitive"}
                      highlight={results.monthlySavings > 200}
                    />
                    <ResultCard
                      icon="📅"
                      label="Est. annual savings"
                      value={results.annualSavings > 0 ? fmt(results.annualSavings) : "—"}
                      sub={results.annualSavings > 0 ? "Over 12 months" : "Rate is competitive"}
                      highlight={results.annualSavings > 2000}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mb-5 leading-relaxed min-h-[1rem]">
                    {results.monthlySavings > 0 &&
                      results.earlyBreakLikely === true &&
                      "Doesn't include any cost of breaking your current term early — speak with the BC Mortgage Team before assuming."}
                    {results.monthlySavings > 0 &&
                      results.earlyBreakLikely === null &&
                      "Assumes no cost to switch. If you're not at the end of your term, breaking early may carry a penalty not reflected here."}
                  </p>
                </>
              )}
              <div className="h-px bg-gray-100 my-5" />
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Your Equity Position
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <ResultCard
                  icon="🏡"
                  label={isNewPurchase ? "Estimated down payment" : "Total equity"}
                  value={fmt(results.equity)}
                  sub={isNewPurchase ? "Assumed 20% down" : `LTV: ${results.ltv.toFixed(1)}%`}
                />
                {!isNewPurchase && (
                  <ResultCard
                    icon="🔓"
                    label="Accessible equity"
                    value={results.accessibleEquity > 0 ? fmt(results.accessibleEquity) : "—"}
                    sub={results.accessibleEquity > 0 ? "Up to 80% LTV" : "LTV at/above 80%"}
                    highlight={results.accessibleEquity > 50000}
                  />
                )}
              </div>
              {!isNewPurchase && (
                <div className="flex flex-wrap gap-3 mb-5">
                  <ResultCard
                    icon="📈"
                    label="Property appreciation"
                    value={fmt(results.appreciation)}
                    sub={`Since ${property.purchaseYear} (${results.yearsOwned} yrs)`}
                  />
                  <ResultCard
                    icon="🎯"
                    label="Strategy score"
                    value={`${results.score}/100`}
                    sub={
                      results.score >= 70
                        ? "Well positioned"
                        : results.score >= 40
                          ? "Room to improve"
                          : "Action recommended"
                    }
                  />
                </div>
              )}
              <div className="h-px bg-gray-100 my-5" />
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                BC Mortgage Team&apos;s Assessment
              </p>
              <div className="bg-[#F4F6F8] border-l-4 border-[#C79A2B] rounded-xl p-5 text-sm text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                {loading ? (
                  <span className="animate-pulse">Preparing your personalized mortgage review…</span>
                ) : (
                  aiText || "Unable to generate review. Please book a call for your full assessment."
                )}
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
                  conversionSent.current = false;
                  setStep(0);
                  setResults(null);
                  setAiText("");
                  setMortgage({
                    service: "",
                    balance: "",
                    rate: "",
                    type: "fixed_5",
                    lender: "",
                    amort: "",
                    originalAmort: "",
                    yearsIntoAmort: "",
                    frequency: "monthly",
                    renewalMonth: "",
                    renewalYear: "",
                  });
                  setProperty({
                    value: "",
                    purchasePrice: "",
                    purchaseYear: "",
                  });
                  setContact({
                    name: "",
                    email: "",
                    phone: "",
                  });
                }}
              >
                Start over
              </button>
            </div>
          )}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6 leading-relaxed">
          Rob Bhullar · BRX Mortgage Inc. · BCFSA: X301291
          <br />
          Rates shown are current market estimates for comparison only and subject to change. Not a commitment to lend.
        </p>
      </div>
    </>
  );
}
