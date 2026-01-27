
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css';

export const metadata: Metadata = {
    title: "Roofing Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for Roofing & Storm Restoration companies. Dominate local search for repairs and replacements.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function RoofingMarketingPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="Roofing Marketing"
                description="Exclusive digital marketing for Roofing & Storm Restoration companies. Dominate local search for repairs and replacements."
                url="https://kilvington.digital/industries/roofing-marketing"
                serviceType="Digital Marketing for Roofers"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>INDUSTRY FOCUS: STORM RESTORATION</span>
                    <h1 className={styles.title}>ROOFING DOMINANCE</h1>
                    <p className={styles.subtitle}>
                        When the storm hits, you need to be the first call.
                        We build &quot;Storm Mode&quot; infrastructure that captures high-intent leads instantly.
                    </p>
                    <Link href="/contact" className="btn btn-primary">CHECK COUNTY AVAILABILITY</Link>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>CAPTURE THE STORM.</h2>
                            <p className={styles.introText}>
                                Most roofers rely on door knockers. We rely on data.
                                Our systems detect storm patterns and instantly deploy high-ranking pages to capture panicked homeowners.
                            </p>
                            <p className={styles.introText}>
                                Whether you want insurance claims in <strong>Wake County</strong> or retail replacements in <strong>Chatham County</strong>, we ensure you own the search results.
                            </p>
                            <div className={styles.promiseBox}>
                                <strong className={styles.promiseTitle}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p className={styles.promiseText}>
                                    We represent ONE roofing company per tier/territory.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/roofing-marketing-storm-damage-leads-system.png"
                                alt="Roofing Marketing Storm Damage Leads System"
                                width={600}
                                height={400}
                                className={styles.serviceIntroImage}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>STORM MODE SEO</h3>
                            <p className={styles.featureDesc}>
                                We deploy landing pages for specific neighborhoods immediately after hail events.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>COMMERCIAL TARGETING</h3>
                            <p className={styles.featureDesc}>
                                Focus on flat roofs and TPO systems. Commercial contracts are where the real margin is.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>AUTHENTIC REVIEW SYSTEMS</h3>
                            <p className={styles.featureDesc}>
                                We automate review requests to your real customers. No fakes. No bots. Just authorized 5-star feedback.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.introHeading}>CLAIM YOUR TERRITORY</h2>
                    <p className={styles.subtitle}>
                        We only accept one partner per industry, per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
