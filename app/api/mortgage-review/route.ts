import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"

export const maxDuration = 30

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, systemPrompt } = body as {
      message?: string
      systemPrompt?: string
    }

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Missing message" }, { status: 400 })
    }

    const { text } = await generateText({
      model: "openai/gpt-5-mini",
      system:
        systemPrompt ||
        "You are Rob Bhullar, a licensed Canadian mortgage broker in BC with BRX Mortgage. Respond only with the requested review. No preamble, no headers, no bullet points.",
      prompt: message,
    })

    return NextResponse.json({ message: text })
  } catch (error) {
    console.error("[v0] mortgage-review API error:", error)
    return NextResponse.json(
      { error: "Unable to generate review at this time." },
      { status: 500 },
    )
  }
}
