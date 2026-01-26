
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css';

export const metadata: Metadata = {
    title: "Roofing Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for Roofing & Storm Restoration companies. Dominate local search for repairs and replacements.",
};

export default function RoofingMarketingPage() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>INDUSTRY FOCUS: STORM RESTORATION</span>
                    <h1 className={styles.title}>ROOFING DOMINANCE</h1>
                    <p className={styles.subtitle}>
                        When the storm hits, you need to be the first call.
                        We build "Storm Mode" infrastructure that captures high-intent leads instantly.
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
                            <div style={{ marginTop: '30px', padding: '20px', borderLeft: '3px solid var(--c-green-acid)', background: 'rgba(255,255,255,0.05)' }}>
                                <strong style={{ color: 'var(--c-white)', display: 'block', marginBottom: '10px' }}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p style={{ color: '#ccc', margin: 0 }}>
                                    We represent ONE roofing company per tier/territory.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/roofing-marketing-hero.png"
                                alt="Roofing Marketing Data Visualization"
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
