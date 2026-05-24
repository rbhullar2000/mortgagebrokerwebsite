export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "divider" }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "example"; text: string }
  | { type: "callout"; text: string }

export type LearnPost = {
  slug: string
  title: string
  question: string
  excerpt: string
  category: string
  blocks: ContentBlock[]
  faqs: { q: string; a: string }[]
}

export const learnPosts: LearnPost[] = [
  {
    slug: "minimum-down-payment-bc",
    title: "Minimum Down Payment in BC (2026)",
    question: "What is the minimum down payment to buy a home in BC?",
    category: "First-Time Buyers",
    excerpt:
      "The minimum down payment depends on the purchase price. For homes under $500K it's 5%, between $500K–$999K it's blended, and $1M+ requires 20%.",
    faqs: [
      {
        q: "What is the minimum down payment for a $700,000 home in BC?",
        a: "For a $700,000 purchase, the minimum down payment is $45,000. That's 5% of the first $500,000 ($25,000) plus 10% of the remaining $200,000 ($20,000).",
      },
      {
        q: "Can I use a gift for my down payment in BC?",
        a: "Yes. Gifted funds from an immediate family member are accepted. Your lender will require a signed gift letter confirming the money does not need to be repaid.",
      },
      {
        q: "Do I need 20% down to buy a home in BC?",
        a: "No — 5% is the minimum for homes under $500,000. You only need 20% for homes priced at $1,000,000 or more, or if you want to avoid mortgage default insurance.",
      },
    ],
    blocks: [
      { type: "h2", text: "How It Works by Price" },
      { type: "h3", text: "Under $500,000" },
      { type: "p", text: "The minimum down payment is 5% of the purchase price." },
      { type: "example", text: "$450,000 home → minimum down payment = $22,500" },
      { type: "h3", text: "$500,000 to $999,999" },
      {
        type: "p",
        text: "A blended rule applies: 5% on the first $500,000, then 10% on the amount above $500,000.",
      },
      {
        type: "ul",
        items: [
          "$750,000 home → 5% of $500,000 ($25,000) + 10% of $250,000 ($25,000) = $50,000 minimum",
          "$900,000 home → 5% of $500,000 ($25,000) + 10% of $400,000 ($40,000) = $65,000 minimum",
        ],
      },
      { type: "h3", text: "$1,000,000 and Over" },
      {
        type: "p",
        text: "The minimum is 20% of the full purchase price. Mortgage default insurance (CMHC) is not available at this price point.",
      },
      { type: "example", text: "$1,200,000 home → minimum down payment = $240,000" },
      { type: "divider" },
      { type: "h2", text: "What Happens If You Put Down Less Than 20%?" },
      {
        type: "p",
        text: "If your down payment is less than 20%, your mortgage must be insured through CMHC, Sagen, or Canada Guaranty. This is called a high-ratio mortgage. The insurance premium is added to your mortgage balance — it is not paid upfront.",
      },
      {
        type: "table",
        headers: ["Down Payment", "CMHC Premium Rate"],
        rows: [
          ["5% – 9.99%", "4.00%"],
          ["10% – 14.99%", "3.10%"],
          ["15% – 19.99%", "2.80%"],
        ],
      },
      {
        type: "example",
        text: "$600,000 purchase with 5% down ($30,000) → mortgage of $570,000 → CMHC premium of 4% = $22,800 added to your mortgage.",
      },
      { type: "divider" },
      { type: "h2", text: "Does BC Have Additional Rules?" },
      {
        type: "p",
        text: "BC does not add its own down payment rules on top of federal requirements. However:",
      },
      {
        type: "ul",
        items: [
          "Property Transfer Tax (PTT) is due at closing and must come from your own funds — it cannot be borrowed. First-time buyers may qualify for a full or partial PTT exemption.",
          "Gifted down payments are allowed but require a signed gift letter confirming the funds are non-repayable.",
        ],
      },
      { type: "divider" },
      { type: "h2", text: "What About the First Home Savings Account (FHSA)?" },
      {
        type: "p",
        text: "The FHSA lets first-time buyers save up to $40,000 tax-free toward a down payment. Contributions are tax-deductible, and withdrawals for a qualifying home purchase are tax-free. It can be combined with the RRSP Home Buyers' Plan (HBP), which allows a further $35,000 withdrawal per person ($70,000 per couple).",
      },
    ],
  },
  {
    slug: "stress-test-explained-bc",
    title: "The Mortgage Stress Test Explained (2026)",
    question: "How does the mortgage stress test work in Canada?",
    category: "Qualifying",
    excerpt:
      "The stress test requires you to qualify at your contract rate plus 2%, or 5.25% — whichever is higher. It typically reduces your borrowing power by 15–20%.",
    faqs: [
      {
        q: "What is the stress test rate in Canada in 2026?",
        a: "The stress test rate is the higher of your contract rate plus 2%, or 5.25%. If your mortgage rate is 4.5%, you'd qualify at 6.5%.",
      },
      {
        q: "Does the stress test apply to mortgage renewals?",
        a: "It applies if you switch to a new lender at renewal. If you stay with your existing lender, the stress test does not apply.",
      },
      {
        q: "How much does the stress test reduce my borrowing power?",
        a: "Typically 15–20% less than you would qualify for without it. The exact amount depends on your income, debts, and the rate you're being offered.",
      },
    ],
    blocks: [
      { type: "h2", text: "What Rate Do You Actually Qualify At?" },
      {
        type: "p",
        text: "Your lender takes the rate they're offering you and adds 2 percentage points. That stressed rate is then used to calculate your maximum mortgage.",
      },
      {
        type: "ul",
        items: [
          "Your actual mortgage rate: 4.50%",
          "Stressed qualifying rate: 4.50% + 2% = 6.50%",
          "Your mortgage payments are calculated at 6.50%, not 4.50%",
          "This reduces how much you can borrow by roughly 15–20%",
        ],
      },
      {
        type: "callout",
        text: "The 5.25% floor means that even if rates fall very low, you'd still need to qualify at a minimum of 5.25%.",
      },
      { type: "divider" },
      { type: "h2", text: "Who Does the Stress Test Apply To?" },
      { type: "h3", text: "Applies to:" },
      {
        type: "ul",
        items: [
          "All buyers getting a mortgage from a federally regulated lender (major banks, most credit unions)",
          "Buyers refinancing an existing mortgage",
          "Buyers switching lenders at renewal",
        ],
      },
      { type: "h3", text: "Does NOT apply to:" },
      {
        type: "ul",
        items: [
          "Buyers renewing with their existing lender",
          "Some provincial credit unions and alternative/private lenders",
        ],
      },
      { type: "divider" },
      { type: "h2", text: "How Does It Affect How Much You Can Borrow?" },
      {
        type: "p",
        text: "Here's a comparison using a 25-year amortization and $150,000 household income:",
      },
      {
        type: "table",
        headers: ["Scenario", "Qualifying Rate", "Approximate Max Mortgage"],
        rows: [
          ["Without stress test (actual rate 4.5%)", "4.50%", "~$780,000"],
          ["With stress test", "6.50%", "~$640,000"],
        ],
      },
      {
        type: "example",
        text: "The stress test in this example reduces borrowing power by roughly $140,000.",
      },
      { type: "divider" },
      { type: "h2", text: "Can You Work Around the Stress Test?" },
      {
        type: "p",
        text: "You cannot avoid the stress test at federally regulated lenders. However:",
      },
      {
        type: "ul",
        items: [
          "Larger down payment increases what you can afford even after the stress test",
          "Longer amortization reduces monthly payments and can increase qualifying amounts",
          "Alternative lenders may use different qualification criteria",
          "Co-signers or co-borrowers add income to the application",
        ],
      },
    ],
  },
  {
    slug: "fixed-vs-variable-rate-bc",
    title: "Fixed vs Variable Mortgage Rate in BC (2026)",
    question: "Should I choose a fixed or variable mortgage rate in BC?",
    category: "Rate Strategy",
    excerpt:
      "For most BC borrowers in 2026, fixed offers more predictability. Variable may suit shorter timelines or those expecting rate drops. The right answer depends on your situation.",
    faqs: [
      {
        q: "Is fixed or variable better in Canada in 2026?",
        a: "For most borrowers prioritising stability, fixed rates are the safer choice in 2026. Variable may suit those with shorter timelines or who are comfortable with rate movement.",
      },
      {
        q: "What happens to my variable rate when the Bank of Canada cuts rates?",
        a: "Your rate drops by the same amount as the BoC cut, typically within the same month. Your payment may decrease or more of it goes to principal, depending on your lender.",
      },
      {
        q: "What is the penalty for breaking a fixed mortgage early in Canada?",
        a: "It's typically an Interest Rate Differential (IRD) penalty, calculated by your lender. It can be substantial — often $10,000–$40,000+ depending on rates and time remaining. Variable rate penalties are capped at 3 months' interest and are usually much smaller.",
      },
    ],
    blocks: [
      { type: "h2", text: "How Each Type Works" },
      { type: "h3", text: "Fixed Rate" },
      {
        type: "p",
        text: "Your interest rate is locked for the term (commonly 1, 2, 3, or 5 years). Your payment stays the same regardless of what the Bank of Canada does. Predictability is the primary advantage.",
      },
      { type: "h3", text: "Variable Rate" },
      {
        type: "p",
        text: "Your rate moves with the lender's prime rate, which tracks the Bank of Canada's overnight rate. Variable rates are expressed as \"prime minus a discount\" (e.g., prime – 0.50%). When the BoC cuts, your rate drops. When it raises, your rate rises.",
      },
      { type: "divider" },
      { type: "h2", text: "When Fixed Makes More Sense" },
      {
        type: "ul",
        items: [
          "You value payment certainty — especially with a tight budget",
          "You're buying your primary home and plan to stay for the full term",
          "You're a first-time buyer getting comfortable with homeownership costs",
          "Your income is variable or commission-based",
        ],
      },
      { type: "divider" },
      { type: "h2", text: "When Variable Can Make Sense" },
      {
        type: "ul",
        items: [
          "You have flexibility and could absorb a rate increase",
          "You're likely to sell or refinance within 1–3 years",
          "You believe rates have peaked and will fall during your term",
          "You're an investor optimising for cash flow",
        ],
      },
      { type: "divider" },
      { type: "h2", text: "The Often-Overlooked Factor: Prepayment Penalties" },
      {
        type: "p",
        text: "This is where the decision gets real. Breaking a fixed rate mortgage early typically triggers an Interest Rate Differential (IRD) penalty — which can run into the tens of thousands of dollars.",
      },
      {
        type: "p",
        text: "Breaking a variable rate mortgage early is usually capped at 3 months' interest — far more predictable and often much smaller.",
      },
      {
        type: "callout",
        text: "If there's any chance you'll sell, move, or refinance before your term ends, the penalty risk of a fixed rate deserves serious consideration.",
      },
    ],
  },
  {
    slug: "mortgage-renewal-strategy-bc",
    title: "Mortgage Renewal Strategy in BC (2026)",
    question: "What should I do before my mortgage renewal in BC?",
    category: "Renewal",
    excerpt:
      "Your lender's renewal offer is rarely their best rate. Start shopping 90–120 days out, compare the market, and negotiate. Even 0.25% savings on a $600K mortgage is $7,500 over 5 years.",
    faqs: [
      {
        q: "When should I start thinking about my mortgage renewal in BC?",
        a: "Start 90–120 days before your renewal date. Most lenders will hold a rate that far in advance, which protects you if rates increase before your term ends.",
      },
      {
        q: "Can I switch lenders at renewal without paying a penalty?",
        a: "Yes — at renewal, there is no penalty for switching lenders. The new lender often covers legal and transfer costs. Note that switching does require passing the mortgage stress test.",
      },
      {
        q: "Is my lender's renewal offer their best rate?",
        a: "Rarely. Renewal offers are typically not the lender's most competitive rate. Shopping the market or working with a broker gives you negotiating leverage.",
      },
    ],
    blocks: [
      { type: "h2", text: "What Happens at Renewal" },
      {
        type: "p",
        text: "When your mortgage term ends, your remaining balance is due. You have three options:",
      },
      {
        type: "ol",
        items: [
          "Renew with your existing lender at the rate they offer",
          "Negotiate a better rate with your existing lender",
          "Switch to a new lender for a better rate or different terms",
        ],
      },
      {
        type: "p",
        text: "Switching lenders at renewal does not typically cost you anything — lenders often cover legal and transfer fees to win your business. However, switching does trigger the mortgage stress test.",
      },
      { type: "divider" },
      { type: "h2", text: "Why You Shouldn't Auto-Renew" },
      {
        type: "p",
        text: "Your lender knows many borrowers will sign without shopping around. Renewal letter rates reflect this. Even a 0.25% rate difference on a $600,000 mortgage saves approximately:",
      },
      {
        type: "ul",
        items: ["$1,500 per year", "$7,500 over a 5-year term"],
      },
      { type: "divider" },
      { type: "h2", text: "Your 90-Day Renewal Game Plan" },
      {
        type: "ul",
        items: [
          "90–120 days out: Start the process. Most lenders hold a rate at no cost this far out — protecting you if rates rise before your renewal.",
          "Compare the market: A mortgage broker can pull rates from 50+ lenders in one conversation.",
          "Negotiate: Armed with competing offers, go back to your existing lender and ask them to match or beat.",
          "Decide: If another lender offers a meaningfully better rate and the transfer is fee-free, switching is straightforward.",
          "Don't forget the terms: Prepayment privileges, early break penalties, and portability all matter — not just the rate.",
        ],
      },
      { type: "divider" },
      { type: "h2", text: "One Thing Most Borrowers Miss" },
      {
        type: "callout",
        text: "If you switch lenders at renewal, you will be subject to the mortgage stress test again. This usually isn't a problem if your finances are stable, but it's worth confirming before you commit to a switch.",
      },
    ],
  },
]
