
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css';

export const metadata: Metadata = {
    title: "Spray Foam Insulation Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for Spray Foam & Insulation companies. Educate homeowners and capture high-ticket energy efficiency jobs.",
};

export default function SprayFoamPage() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>INDUSTRY FOCUS: ENERGY EFFICIENCY</span>
                    <h1 className={styles.title}>SPRAY FOAM DOMINANCE</h1>
                    <p className={styles.subtitle}>
                        High ticket. High technicality. High reward.
                        We educate the customer so you don't have to explain "R-Value" 50 times a day.
                    </p>
                    <Link href="/contact" className="btn btn-primary">CHECK COUNTY AVAILABILITY</Link>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>SELL THE SAVINGS.</h2>
                            <p className={styles.introText}>
                                Spray foam is an investment. Homeowners need to understand the ROI.
                                Our content explains the math, overcoming sticker shock before you ever arrive.
                            </p>
                            <div style={{ marginTop: '30px', padding: '20px', borderLeft: '3px solid var(--c-green-acid)', background: 'rgba(255,255,255,0.05)' }}>
                                <strong style={{ color: 'var(--c-white)', display: 'block', marginBottom: '10px' }}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p style={{ color: '#ccc', margin: 0 }}>
                                    We represent ONE insulation company per territory.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/spray-foam-marketing-hero.png"
                                alt="Spray Foam Marketing Data Visualization"
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
                            <h3 className={styles.featureTitle}>EDUCATIONAL CONTENT STRATEGY</h3>
                            <p className={styles.featureDesc}>
                                Technical articles on "Open Cell vs Closed Cell" that rank nationally and build local trust.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>CRAWL SPACE ENCAPSULATION</h3>
                            <p className={styles.featureDesc}>
                                A massive add-on service. We target "moisture control" keywords to drive high-ticket encapsulation jobs.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>ENERGY REBATE CALCULATORS</h3>
                            <p className={styles.featureDesc}>
                                Tools on your site that help homeowners see tax credits and utility savings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.introHeading}>ENCAPSULATE YOUR MARKET</h2>
                    <p className={styles.subtitle}>
                        We only accept one partner per industry, per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
