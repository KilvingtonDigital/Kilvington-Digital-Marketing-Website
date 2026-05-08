'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface TerritoryState {
    success?: boolean;
    message?: string;
    errors?: {
        [key: string]: string[];
    };
}

export async function submitTerritoryCheck(prevState: TerritoryState | null, formData: FormData): Promise<TerritoryState> {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const company = formData.get('company') as string;
    const website = formData.get('website') as string;
    const location = formData.get('location') as string; // City/HQ
    const industry = formData.get('industry') as string;
    const county = formData.get('county') as string; // Territory
    const internal_control_code = formData.get('internal_control_code') as string; // Honeypot
    const sms_consent = formData.get('sms_consent') === 'true';

    // 1. Honeypot Guard
    if (internal_control_code) {
        console.log('BOT DETECTED: Territory Modal Honeypot triggered');
        return {
            success: true,
            message: 'Territory check submitted successfully. We are verifying availability.'
        }; // Silent Failure
    }

    if (!name || !email || !company || !location || !industry || !county) {
        return {
            success: false,
            message: 'Missing required fields'
        };
    }

    try {
        const ownerEmail = process.env.OWNER_EMAIL || 'ricky@kilvington.digital';
        const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

        await resend.emails.send({
            from: `Kilvington Bot <${fromEmail}>`,
            to: [ownerEmail],
            replyTo: email,
            subject: `[TERRITORY CHECK] ${company} - ${county}`,
            html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #4CFC0F; background: #000; padding: 10px;">New Territory Check Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>SMS Consent:</strong> ${sms_consent ? 'Yes' : 'No'}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Website:</strong> ${website || 'Not Provided'}</p>
          <hr />
          <p><strong>Industry:</strong> ${industry}</p>
          <p><strong>Territory:</strong> ${county}</p>
          <p><strong>HQ Location:</strong> ${location}</p>
          
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          
          <p style="font-size: 12px; color: #666;">
            This lead was captured from the Kilvington Digital Territory Modal.
          </p>
        </div>
      `
        });

        return {
            success: true,
            message: 'Territory check submitted successfully. We are verifying availability.'
        };
    } catch (error) {
        console.error('Email sending failed:', error);
        return {
            success: false,
            message: 'Failed to submit request. Please try again later.'
        };
    }
}
