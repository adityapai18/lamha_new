import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, eventType, date, guests, budgetRange, message } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    console.log('Attempting to send email via Resend')

    await resend.emails.send({
      from: 'Private Event Inquiry <noreply@resend.dev>',
      to: ['lamhaa.nj@gmail.com'], // Replace with your actual email
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #bfa14a; border-bottom: 2px solid #bfa14a; padding-bottom: 10px;">
             New Quote Request - Lamhaa Restaurant
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Customer Details</h3>
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong> Email:</strong> ${email}</p>
            <p><strong> Phone:</strong> ${phone}</p>
          </div>

          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Event Details</h3>
            <p><strong> Event Type:</strong> ${eventType || 'Not specified'}</p>
            <p><strong> Date:</strong> ${date || 'Not specified'}</p>
            <p><strong> Number of Guests:</strong> ${guests || 'Not specified'}</p>
            <p><strong> Budget Range:</strong> ${budgetRange || 'Not specified'}</p>
          </div>

          ${message ? `
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="font-style: italic;">${message}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Lamhaa Restaurant website quote request form.</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    })

    console.log('Email sent successfully via Resend')

    return NextResponse.json({ 
      success: true, 
      message: 'Quote request sent successfully!' 
    })

  } catch (error) {
    console.error('Resend email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}