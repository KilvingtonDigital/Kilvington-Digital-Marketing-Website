
import { Metadata } from 'next';
import styles from './contact.module.css';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
    title: "Contact | Kilvington Digital Marketing",
    description: "Secure your territory. Contact Kilvington Digital Marketing for exclusive ROI-focused partnerships.",
};

export default function ContactPage() {
    return (
        <div className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Left Column: Info */}
                    <div>
                        <h1 className={styles.title}>INITIATE CONTACT</h1>
                        <p className={styles.subtitle}>
                            Ready to dominate your local market? We accept <strong>one partner per industry, per territory</strong>. Verify your availability below.
                        </p>

                        <div className={styles.infoCard}>
                            <div className={styles.infoLabel}>Direct Email</div>
                            <div className={styles.infoValue}>info@kilvingtondigitalmarketing.com</div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoLabel}>Headquarters</div>
                            <div className={styles.infoValue}>
                                101 E Trade Street Unit G<br />
                                Sanford, NC, 27330
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
