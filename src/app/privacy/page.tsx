import type { Metadata } from 'next';
import styles from './privacy.module.css';

export const metadata: Metadata = {
    title: "Privacy Policy | Kilvington Digital Marketing",
    description: "Privacy Policy and data handling practices for Kilvington Digital Marketing.",
};

export default function PrivacyPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last Updated: January 25, 2026</p>

            <div className={styles.content}>
                <p>
                    At Kilvington Digital Marketing (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data.
                </p>

                <h2>1. Information We Collect</h2>
                <p>
                    We collect information you voluntarily provide when you fill out our contact forms, request a territory check, or subscribe to our communications. This may include:
                </p>
                <ul>
                    <li>Name and Business Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Website URL and Business Details</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>
                    We use your information exclusively to:
                </p>
                <ul>
                    <li>Respond to your inquiries and territory requests.</li>
                    <li>Provide the services you have requested.</li>
                    <li>Send relevant updates regarding your account or our services.</li>
                </ul>
                <p>
                    <strong>We do not sell, rent, or trade your personal information to third parties.</strong>
                </p>

                <h2>3. Cookies and Tracking</h2>
                <p>
                    We use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.
                </p>

                <h2>4. Data Security</h2>
                <p>
                    We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is ensuring 100% security.
                </p>

                <h2>5. Contact Us</h2>
                <p>
                    If you have questions about this Privacy Policy, please contact us at:<br />
                    <strong>Email:</strong> info@kilvingtondigitalmarketing.com
                </p>
            </div>
        </div>
    );
}
