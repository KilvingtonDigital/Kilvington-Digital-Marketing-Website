
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css';

export const metadata: Metadata = {
    title: "Spray Foam Insulation Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for Spray Foam & Insulation companies. Educate homeowners and capture high-ticket energy efficiency jobs.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function SprayFoamPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="Spray Foam Insulation Marketing"
                description="Exclusive digital marketing for Spray Foam & Insulation companies. Educate homeowners and capture high-ticket energy efficiency jobs."
                url="https://kilvington.digital/industries/spray-foam-insulation-marketing"
                serviceType="Digital Marketing for Insulation Contractors"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>INDUSTRY FOCUS: ENERGY EFFICIENCY</span>
                    <h1 className={styles.title}>SPRAY FOAM DOMINANCE</h1>
                    <p className={styles.subtitle}>
                        High ticket. High technicality. High reward.
                        We educate the customer so you don&apos;t have to explain &quot;R-Value&quot; 50 times a day.
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
                            <div className={styles.promiseBox}>
                                <strong className={styles.promiseTitle}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p className={styles.promiseText}>
                                    We represent ONE insulation company per territory.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/spray-foam-insulation-marketing-leads.png"
                                alt="Spray Foam Insulation Marketing Leads"
                                width={600}
                                height={400}
                                className={styles.serviceIntroImage}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>EDUCATIONAL CONTENT STRATEGY</h3>
                            <p className={styles.featureDesc}>
                                Technical articles on &quot;Open Cell vs Closed Cell&quot; that rank nationally and build local trust.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>CRAWL SPACE ENCAPSULATION</h3>
                            <p className={styles.featureDesc}>
                                A massive add-on service. We target &quot;moisture control&quot; keywords to drive high-ticket encapsulation jobs.
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
