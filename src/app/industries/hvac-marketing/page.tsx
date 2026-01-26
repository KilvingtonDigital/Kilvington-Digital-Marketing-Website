
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css';

export const metadata: Metadata = {
    title: "HVAC Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for HVAC companies. Dominate local search for repairs and system replacements.",
};

export default function HVACMarketingPage() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>INDUSTRY FOCUS: CLIMATE CONTROL</span>
                    <h1 className={styles.title}>HVAC DOMINANCE</h1>
                    <p className={styles.subtitle}>
                        When the AC dies, speed wins.
                        Our "Speed to Lead" AIO agents book appointments while your competitors are still checking voicemail.
                    </p>
                    <Link href="/contact" className="btn btn-primary">CHECK COUNTY AVAILABILITY</Link>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>COMFORT IS URGENT.</h2>
                            <p className={styles.introText}>
                                In July, a broken AC is an emergency.
                                We optimize your mobile presence ensuring one-click calling and instant booking.
                            </p>
                            <p className={styles.introText}>
                                From high-margin system replacements in <strong>Moore County</strong> to emergency repairs in <strong>Lee County</strong>, we ensure you are the first responder.
                            </p>
                            <div style={{ marginTop: '30px', padding: '20px', borderLeft: '3px solid var(--c-green-acid)', background: 'rgba(255,255,255,0.05)' }}>
                                <strong style={{ color: 'var(--c-white)', display: 'block', marginBottom: '10px' }}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p style={{ color: '#ccc', margin: 0 }}>
                                    We represent ONE HVAC company per territory.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/hvac-marketing-hero.png"
                                alt="HVAC Marketing Data Visualization"
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
                            <h3 className={styles.featureTitle}>SEASONAL SHIFTS</h3>
                            <p className={styles.featureDesc}>
                                We automatically switch your SEO focus from "AC Repair" to "Furnace Tune-up" based on weather triggers.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>MEMBERSHIP SALES</h3>
                            <p className={styles.featureDesc}>
                                We build funnels specifically designed to sell annual maintenance contracts, increasing your business valuation.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>LSA OPTIMIZATION</h3>
                            <p className={styles.featureDesc}>
                                Dominate Google Local Services Ads (guaranteed badge) to appear at the absolute top.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.introHeading}>OWN THE SEASON</h2>
                    <p className={styles.subtitle}>
                        We only accept one partner per industry, per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
