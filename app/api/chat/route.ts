import { type NextRequest, NextResponse } from "next/server"

// Simple response system for common mortgage questions
const MORTGAGE_RESPONSES: Record<string, string> = {
  rate: "Current mortgage rates vary by lender and product. As of today, 5-year fixed rates typically range from 4.5% to 5.5%, while variable rates are around prime minus 0.5% to 1%. For your specific situation, I recommend booking a free consultation with the BC Mortgage Team to get personalized rate options: https://calendly.com/robsbhullar",
  
  downpayment: "In Canada, the minimum down payment depends on the purchase price:\n\n• Under $500,000: 5% minimum\n• $500,000 to $999,999: 5% on first $500K, 10% on remainder\n• $1,000,000+: 20% minimum\n\nWant to discuss your specific situation? Book a free call with the BC Mortgage Team: https://calendly.com/robsbhullar",
  
  preapproval: "A mortgage pre-approval gives you a clear picture of what you can afford and locks in a rate for 90-120 days. It shows sellers you're a serious buyer. The BC Mortgage Team can help you get pre-approved quickly — book a consultation: https://calendly.com/robsbhullar",
  
  renewal: "Your lender's renewal offer is rarely their best rate. Start shopping 90-120 days before your renewal date. Even 0.25% savings on a $600K mortgage = $7,500 over 5 years. Let the BC Mortgage Team review your options: https://calendly.com/robsbhullar",
  
  refinance: "Refinancing can help you access equity, consolidate debt, or get a better rate. Consider the costs (typically 0.5-1% of mortgage) vs benefits. Use our break-even calculator at /break-even-calculator or book a strategy call with the BC Mortgage Team: https://calendly.com/robsbhullar",
  
  firsttime: "First-time buyers have access to several programs:\n\n• First Home Savings Account (FHSA) - save up to $40K tax-free\n• RRSP Home Buyers' Plan - withdraw up to $35K\n• First-Time Home Buyer Incentive\n• BC Property Transfer Tax exemption\n\nWant help navigating these? The BC Mortgage Team can guide you: https://calendly.com/robsbhullar",
  
  selfemployed: "Self-employed mortgages require different documentation. Options include:\n\n• Traditional income verification (2 years tax returns)\n• Stated income programs\n• Bank statement programs\n\nThe BC Mortgage Team specializes in self-employed mortgages. Let's discuss your situation: https://calendly.com/robsbhullar",
  
  investment: "Investment property mortgages typically require:\n\n• 20% minimum down payment\n• Proof of rental income potential\n• Debt service coverage ratios\n\nThe BC Mortgage Team can help structure financing for your investment goals: https://calendly.com/robsbhullar",
  
  stresstest: "The mortgage stress test requires you to qualify at your contract rate plus 2%, or 5.25% — whichever is higher. This typically reduces borrowing power by 15-20%. Want to know what you qualify for? The BC Mortgage Team can help: https://calendly.com/robsbhullar",
  
  calculator: "You can use our mortgage calculator at /#calculator to estimate payments, or our refinance break-even calculator at /break-even-calculator. For personalized numbers, book a free consultation with the BC Mortgage Team: https://calendly.com/robsbhullar",
  
  contact: "You can reach the BC Mortgage Team directly:\n\n• Book a call: https://calendly.com/robsbhullar\n• Email: contact@bcmortgageteam.com\n• Use our contact form at /#contact\n\nWe typically respond within 24 hours.",
  
  default: "I'd be happy to help with that! For personalized mortgage advice tailored to your situation, I recommend booking a free 15-minute consultation with the BC Mortgage Team. We have access to 50+ lenders.\n\nBook here: https://calendly.com/robsbhullar\n\nOr feel free to ask me about rates, down payments, pre-approvals, renewals, refinancing, or first-time buyer programs!"
}

function getResponse(message: string): string {
  const lower = message.toLowerCase()
  
  if (lower.includes("rate") || lower.includes("interest")) {
    return MORTGAGE_RESPONSES.rate
  }
  if (lower.includes("down payment") || lower.includes("downpayment") || lower.includes("minimum")) {
    return MORTGAGE_RESPONSES.downpayment
  }
  if (lower.includes("pre-approval") || lower.includes("preapproval") || lower.includes("pre approval") || lower.includes("qualify")) {
    return MORTGAGE_RESPONSES.preapproval
  }
  if (lower.includes("renew") || lower.includes("renewal")) {
    return MORTGAGE_RESPONSES.renewal
  }
  if (lower.includes("refinanc") || lower.includes("equity") || lower.includes("heloc")) {
    return MORTGAGE_RESPONSES.refinance
  }
  if (lower.includes("first time") || lower.includes("first-time") || lower.includes("fhsa") || lower.includes("rrsp") || lower.includes("home buyer")) {
    return MORTGAGE_RESPONSES.firsttime
  }
  if (lower.includes("self-employed") || lower.includes("self employed") || lower.includes("business owner") || lower.includes("contractor")) {
    return MORTGAGE_RESPONSES.selfemployed
  }
  if (lower.includes("investment") || lower.includes("rental") || lower.includes("property")) {
    return MORTGAGE_RESPONSES.investment
  }
  if (lower.includes("stress test") || lower.includes("stresstest")) {
    return MORTGAGE_RESPONSES.stresstest
  }
  if (lower.includes("calculator") || lower.includes("calculate") || lower.includes("payment")) {
    return MORTGAGE_RESPONSES.calculator
  }
  if (lower.includes("contact") || lower.includes("reach") || lower.includes("email") || lower.includes("phone") || lower.includes("call") || lower.includes("book") || lower.includes("speak") || lower.includes("talk")) {
    return MORTGAGE_RESPONSES.contact
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hello! I'm here to help with any mortgage questions you have. What would you like to know about? I can help with:\n\n• Current rates\n• Down payment requirements\n• Pre-approvals\n• Renewals & refinancing\n• First-time buyer programs\n• Self-employed mortgages\n• Investment properties\n\nOr book a free consultation with the BC Mortgage Team: https://calendly.com/robsbhullar"
  }
  if (lower.includes("thank")) {
    return "You're welcome! If you have more questions, feel free to ask. When you're ready to move forward, the BC Mortgage Team is here to help: https://calendly.com/robsbhullar"
  }
  
  return MORTGAGE_RESPONSES.default
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { messages } = body

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ message: MORTGAGE_RESPONSES.default })
    }

    // Get the last user message
    const lastUserMessage = [...messages].reverse().find((m: { role: string }) => m.role === "user")
    
    if (!lastUserMessage) {
      return NextResponse.json({ message: MORTGAGE_RESPONSES.default })
    }

    const response = getResponse(lastUserMessage.content)
    
    return NextResponse.json({ message: response })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ 
      message: "I'm having trouble processing that. Please try again or email contact@bcmortgageteam.com for assistance."
    })
  }
}
