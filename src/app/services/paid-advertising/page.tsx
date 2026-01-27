
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "PPC & Paid Ads | Kilvington Digital Marketing",
    description: "Data-driven Google Ads and Local Services Ads (LSA) management. We stop the budget bleed and scale the winners.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function PaidAdsPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="PPC & Paid Ads"
                description="Data-driven Google Ads and Local Services Ads (LSA) management. We stop the budget bleed and scale the winners."
                url="https://kilvington.digital/services/paid-advertising"
                serviceType="PPC Management"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>TACTICAL SERVICE</span>
                    <h1 className={styles.title}>PRECISION STRIKE ADS</h1>
                    <p className={styles.subtitle}>
                        Stop burning cash on clicks that don&apos;t convert. We manage high-intent campaigns that put your offer in front of buyers, not browsers.
                    </p>
                    <Link href="/contact" className="btn btn-primary">AUDIT YOUR AD ACCOUNT</Link>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>DOMINATE THE AUCTION.</h2>
                            <p className={styles.introText}>
                                Most agencies &quot;set it and forget it&quot;. We monitor bids daily.
                                We specialize in Google Local Services Ads (LSA) - getting you that coveted &quot;Google Guaranteed&quot; badge.
                            </p>
                            <ul className={styles.checklist}>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    Google LSA & Guarantee Setup
                                </li>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    High-Intent Search Campaigns
                                </li>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    Retargeting (The &quot;Follow Up&quot; Ad)
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/google-ads-ppc-management-dashboard-analytics.png"
                                alt="Google Ads PPC Management Dashboard Analytics"
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
