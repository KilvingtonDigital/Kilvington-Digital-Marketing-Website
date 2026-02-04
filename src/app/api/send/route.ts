import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

export async function POST(request: Request) {
    try {
        const { name, email, company, message, territory, industry, role_title_check, submission_time } = await request.json();

        // 1. Honeypot Guard (If this hidden field has value, it's a bot)
        if (role_title_check) {
            console.log('BOT DETECTED: Honeypot triggered');
            return Response.json({ success: true }); // Silent Failure
        }

        // 2. Time Guard (If submitted in under 2 seconds, it's a bot)
        // Client sends `submission_time` which is the DURATION.

        if (submission_time < 2000) {
            console.log(`BOT DETECTED: Speed trap (${submission_time}ms)`);
            return Response.json({ success: true }); // Silent Failure
        }

        const { data, error } = await resend.emails.send({
            from: 'Kilvington Leads <onboarding@resend.dev>', // Update this if you have a verified domain
            to: ['info@kilvingtondigitalmarketing.com'],
            subject: `New Territory Request: ${company}`,
            html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Desired Territory:</strong> ${territory || 'N/A'}</p>
        <p><strong>Industry:</strong> ${industry || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No additional message provided.'}</p>
      `,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch {
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
