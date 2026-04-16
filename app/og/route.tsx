import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: 'linear-gradient(135deg, #1a472a 0%, #2d6b4f 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'white',
            fontFamily: 'system-ui',
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 'bold', marginBottom: 20 }}>
            BC Mortgage Team
          </div>
          <div style={{ fontSize: 40, opacity: 0.8 }}>
            Smart Financial Solutions
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.error('Error generating OG image:', e)
    return new Response('Failed to generate image', { status: 500 })
  }
}
