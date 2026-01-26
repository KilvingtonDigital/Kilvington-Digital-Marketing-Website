
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css';

export const metadata: Metadata = {
    title: "Mold Remediation Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for Mold Removal & Restoration companies. High-intent lead generation for urgent health hazards.",
};

export default function MoldRemediationPage() {
    return (
        <div className="page-wrapper">
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
                                When a homeowner finds black mold, they don't shop for price. They shop for speed and certainty.
                                We build "Health-First" funnels that convert panicked searches into high-ticket remediation jobs.
                            </p>
                            <p className={styles.introText}>
                                From crawl space encapsulation in <strong>Wake County</strong> to toxic mold testing in <strong>Mecklenburg County</strong>, we ensure you are the verified expert.
                            </p>
                            <div style={{ marginTop: '30px', padding: '20px', borderLeft: '3px solid var(--c-green-acid)', background: 'rgba(255,255,255,0.05)' }}>
                                <strong style={{ color: 'var(--c-white)', display: 'block', marginBottom: '10px' }}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p style={{ color: '#ccc', margin: 0 }}>
                                    We represent ONE remediation company per territory.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/mold-remediation-marketing-hero.png"
                                alt="Mold Remediation Marketing Data Visualization"
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

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>EDUCATIONAL CONTENT</h3>
                            <p className={styles.featureDesc}>
                                We rank for symptoms ("black mold symptoms") to catch the customer before they even know they need a pro.
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
                                We highlight your certifications (IICRC) to prove you aren't just a guy with a bucket of bleach.
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
