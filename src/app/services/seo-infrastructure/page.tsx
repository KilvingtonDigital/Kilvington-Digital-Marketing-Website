
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "SEO Infrastructure | Kilvington Digital Marketing",
    description: "Technical SEO services engineered for domination. We build the infrastructure that ranks #1.",
};

export default function SEOInfrastructurePage() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>CORE ENGINE: MODULE 01</span>
                    <h1 className={styles.title}>SEO INFRASTRUCTURE</h1>
                    <p className={styles.subtitle}>
                        Visibility is not an accident. It is an engineered outcome.
                        We build the technical foundation that forces search engines to rank you first.
                    </p>
                    <Link href="/contact" className="btn btn-primary">AUDIT MY INFRASTRUCTURE</Link>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>BUILT FOR SPEED. <br />OPTIMIZED FOR DOMINANCE.</h2>
                            <p className={styles.introText}>
                                Most agencies sell "SEO" as a monthly mystery box. We sell infrastructure.
                                Before content is king, the kingdom must be built.
                            </p>
                            <p className={styles.introText}>
                                Our approach focuses on technical perfection: schema markup, site architecture,
                                and lightning-fast load times that signal authority to Google's algorithms.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/images/seo-infrastructure.png"
                                alt="SEO Infrastructure Visualization"
                                width={500}
                                height={300}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    border: '1px solid #333',
                                    borderRadius: '4px'
                                }}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>TECHNICAL FOUNDATION</h3>
                            <p className={styles.featureDesc}>
                                Clean code, proper semantic HTML5, and optimized asset delivery.
                                We fix the errors that hold other sites back.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>LOCAL DOMINANCE</h3>
                            <p className={styles.featureDesc}>
                                Hyper-local schema markup that tells Google exactly where you serve.
                                own your backyard.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>SPEED OPTIMIZATION</h3>
                            <p className={styles.featureDesc}>
                                Sub-second load times. We optimize specifically for Google's Core Web Vitals to ensure you pass every test.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Matters */}
            <section className={styles.benefitSection}>
                <div className="container">
                    <h2 className={styles.introHeading} style={{ textAlign: 'center' }}>WHY INFRASTRUCTURE MATTERS</h2>
                    <ul className={styles.benefitList}>
                        <li className={styles.benefitItem}>Increases crawling budget from search engines</li>
                        <li className={styles.benefitItem}>Reduces bounce rates with instant loading</li>
                        <li className={styles.benefitItem}>Future-proofs your site for algorithm updates</li>
                        <li className={styles.benefitItem}>Provides the base for Content & AI scaling</li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.introHeading}>IS YOUR FOUNDATION CRACKED?</h2>
                    <p className={styles.subtitle}>
                        We only accept one partner per industry, per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
