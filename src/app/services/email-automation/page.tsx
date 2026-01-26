
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "Email Automation | Kilvington Digital Marketing",
    description: "Automated nurture campaigns that turn leads into customers and customers into referral sources.",
};

export default function EmailAutomationPage() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>TACTICAL SERVICE</span>
                    <h1 className={styles.title}>AUTOMATED NURTURE</h1>
                    <p className={styles.subtitle}>
                        The money is in the follow-up. We build automated email & SMS sequences that warm up cold leads while you sleep.
                    </p>
                    <Link href="/contact" className="btn btn-primary">AUTOMATE YOUR FOLLOW-UP</Link>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>NEVER LOSE A LEAD.</h2>
                            <p className={styles.introText}>
                                A lead fills out a form. What happens next?
                                If the answer isn't "They instantly get a text and an email sequence," you are losing 50% of your revenue.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    Instant Lead Response (SMS/Email)
                                </li>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    Long-Term Nurture Campaigns
                                </li>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    Review Request Sequences
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/email-automation-hero.png"
                                alt="Email Automations Visualization"
                                width={600}
                                height={400}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    border: '1px solid #333',
                                    borderRadius: '4px',
                                    boxShadow: '0 0 30px rgba(0,0,0,0.5)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
