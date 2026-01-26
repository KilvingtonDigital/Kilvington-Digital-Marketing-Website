import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, company, message, territory, industry } = await request.json();

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
    } catch (error) {
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
