
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css';

export const metadata: Metadata = {
    title: "Mold Remediation Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for Mold Removal & Restoration companies. High-intent lead generation for urgent health hazards.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function MoldRemediationPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="Mold Remediation Marketing"
                description="Exclusive digital marketing for Mold Removal & Restoration companies. High-intent lead generation for urgent health hazards."
                url="https://kilvington.digital/industries/mold-remediation-marketing"
                serviceType="Digital Marketing for Mold Remediation"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>INDUSTRY FOCUS: ENVIRONMENTAL RESTORATION</span>
                    <h1 className={styles.title}>MOLD REMEDIATION DOMINANCE</h1>
                    <p className={styles.subtitle}>
                        Fear drives action.
                        We position your company as the scientific authority that homeowners trust to protect their families.
                    </p>
                    <Link href="/contact" className="btn btn-primary">CHECK COUNTY AVAILABILITY</Link>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>URGENCY + AUTHORITY.</h2>
                            <p className={styles.introText}>
                                When a homeowner finds black mold, they don&apos;t shop for price. They shop for speed and certainty.
                                We build &quot;Health-First&quot; funnels that convert panicked searches into high-ticket remediation jobs.
                            </p>
                            <p className={styles.introText}>
                                From crawl space encapsulation in <strong>Wake County</strong> to toxic mold testing in <strong>Mecklenburg County</strong>, we ensure you are the verified expert.
                            </p>
                            <div className={styles.promiseBox}>
                                <strong className={styles.promiseTitle}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p className={styles.promiseText}>
                                    We represent ONE remediation company per territory.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/mold-remediation-marketing-water-damage-leads.png"
                                alt="Mold Remediation Marketing Water Damage Leads"
                                width={600}
                                height={400}
                                className={styles.serviceIntroImage}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>EDUCATIONAL CONTENT</h3>
                            <p className={styles.featureDesc}>
                                We rank for symptoms (&quot;black mold symptoms&quot;) to catch the customer before they even know they need a pro.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>INSURANCE NAVIGATION</h3>
                            <p className={styles.featureDesc}>
                                Content that helps homeowners understand coverage, positioning you as an ally against the adjuster.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>TESTING & PROTOCOLS</h3>
                            <p className={styles.featureDesc}>
                                We highlight your certifications (IICRC) to prove you aren&apos;t just a guy with a bucket of bleach.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.introHeading}>RESTORE YOUR MARKET</h2>
                    <p className={styles.subtitle}>
                        We only accept one partner per industry, per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
