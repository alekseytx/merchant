// app/api/contact/route.ts
import { NextResponse } from "next/server"

const WEBHOOK_URL =
  "https://automations.mynytg.com/webhook/42c4ac74-3f4e-4f39-b572-91d335e81379"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log("[/api/contact] incoming payload:", data)

    let webhookRes: Response

    try {
      webhookRes = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    } catch (err) {
      console.error("[/api/contact] NETWORK error calling webhook:", err)

      return NextResponse.json(
        {
          success: false,
          stage: "network",
          message: "Failed to reach webhook server",
          error: String(err),
        },
        { status: 502 },
      )
    }

    const webhookBody = await webhookRes.text().catch(() => "")
    console.log(
      "[/api/contact] webhook response:",
      webhookRes.status,
      webhookBody,
    )

    if (!webhookRes.ok) {
      return NextResponse.json(
        {
          success: false,
          stage: "webhook",
          message: "Webhook request failed",
          webhookStatus: webhookRes.status,
          webhookBody,
        },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully.",
        webhookStatus: webhookRes.status,
        webhookBody,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[/api/contact] Contact API error:", error)

    return NextResponse.json(
      {
        success: false,
        stage: "api",
        message: "Unexpected error submitting contact form.",
        error: String(error),
      },
      { status: 500 },
    )
  }
}
