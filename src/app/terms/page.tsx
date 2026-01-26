import type { Metadata } from 'next';
import styles from '../privacy/privacy.module.css'; // Reusing privacy styles for consistency

export const metadata: Metadata = {
    title: "Terms of Service | Kilvington Digital Marketing",
    description: "Terms of Service and exclusive partnership agreements for Kilvington Digital Marketing.",
};

export default function TermsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.lastUpdated}>Last Updated: January 25, 2026</p>

            <div className={styles.content}>
                <p>
                    Welcome to Kilvington Digital Marketing. By accessing our website or engaging our services, you agree to comply with and be bound by the following terms and conditions.
                </p>

                <h2>1. Service Agreement</h2>
                <p>
                    Our services are defined by individual service agreements signed by both parties. These online Terms of Service govern your use of our website and initial engagement.
                </p>

                <h2>2. Exclusive Focus Policy</h2>
                <p>
                    Kilvington Digital Marketing operates on an &quot;Exclusive Focus&quot; model. We partner with only one business per industry within a specific geographic territory.
                </p>
                <ul>
                    <li><strong>Territory Lock:</strong> Once a client secures a territory, we will not work with direct competitors in that defined area for the duration of the active contract.</li>
                    <li><strong>Availability:</strong> Territory availability is subject to verification. Submission of a request does not guarantee exclusivity until a contract is signed.</li>
                </ul>

                <h2>3. Intellectual Property</h2>
                <p>
                    All content, design, and code on generic parts of this website are owned by Kilvington Digital Marketing. Client-specific deliverables will be governed by the specific Service Agreement.
                </p>

                <h2>4. Payment Terms</h2>
                <p>
                    Payment terms for all services will be strictly adhered to as outlined in your specific proposal or ongoing service contract. Late payments may result in suspension of services.
                </p>

                <h2>5. Limitation of Liability</h2>
                <p>
                    Kilvington Digital Marketing shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our services or website.
                </p>

                <h2>6. Changes to Terms</h2>
                <p>
                    We reserve the right to modify these terms at any time. Continued use of our website constitutes acceptance of updated terms.
                </p>
            </div>
        </div>
    );
}
