
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "Email Automation | Kilvington Digital Marketing",
    description: "Automated nurture campaigns that turn leads into customers and customers into referral sources.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function EmailAutomationPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="Email Automation"
                description="Automated nurture campaigns that turn leads into customers and customers into referral sources."
                url="https://kilvington.digital/services/email-automation"
                serviceType="Marketing Automation Service"
            />
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
                                Please note: The above snippet only shows the MODIFIED lines from the last change. It shows up to 3 lines of unchanged lines before and after the modified lines. The actual file contents may have many more lines not shown.
                                If the answer isn&apos;t &quot;They instantly get a text and an email sequence,&quot; you are losing 50% of your revenue.
                            </p>
                            <ul className={styles.checklist}>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    Instant Lead Response (SMS/Email)
                                </li>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    Long-Term Nurture Campaigns
                                </li>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    Review Request Sequences
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/automated-customer-retention-system-email-marketing.png"
                                alt="Automated Customer Retention System Email Marketing"
                                width={600}
                                height={400}
                                className={styles.serviceIntroImage}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
