
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css';

export const metadata: Metadata = {
    title: "Epoxy Flooring Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for Epoxy & Concrete Coating companies. Showcase your work and capture high-end garage leads.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function EpoxyFlooringPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="Epoxy Flooring Marketing"
                description="Exclusive digital marketing for Epoxy & Concrete Coating companies. Showcase your work and capture high-end garage leads."
                url="https://kilvington.digital/industries/epoxy-flooring-marketing"
                serviceType="Digital Marketing for Flooring Contractors"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>INDUSTRY FOCUS: SURFACE TRANSFORMATION</span>
                    <h1 className={styles.title}>EPOXY MARKETING</h1>
                    <p className={styles.subtitle}>
                        Turn garages into showrooms.
                        We use visual-first marketing to sell high-margin floor coatings.
                    </p>
                    <Link href="/contact" className="btn btn-primary">CHECK COUNTY AVAILABILITY</Link>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>SHOW IT, SELL IT.</h2>
                            <p className={styles.introText}>
                                Epoxy is a visual product. We build portfolio-heavy sites that make homeowners jealous of their neighbor&apos;s garage.
                            </p>
                            <p className={styles.introText}>
                                Capture the high-end residential market in <strong>Wake County</strong> or large warehouse contracts in <strong>Lee County</strong>.
                            </p>
                            <div className={styles.promiseBox}>
                                <strong className={styles.promiseTitle}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p className={styles.promiseText}>
                                    We represent ONE coating company per territory.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/epoxy-flooring-contractor-marketing-system.png"
                                alt="Epoxy Flooring Contractor Marketing System"
                                width={600}
                                height={400}
                                className={styles.serviceIntroImage}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>BEFORE & AFTER GALLERIES</h3>
                            <p className={styles.featureDesc}>
                                High-speed, high-resolution sliders that prove the value of your work instantly.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>COMMERCIAL & INDUSTRIAL</h3>
                            <p className={styles.featureDesc}>
                                Specific SEO funnels for warehouse safety striping and huge square-footage jobs.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>FACEBOOK & INSTAGRAM ADS</h3>
                            <p className={styles.featureDesc}>
                                We retarget homeowners with stunning visuals of floors you just completed in their zip code.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.introHeading}>TRANSFORM YOUR BUSINESS</h2>
                    <p className={styles.subtitle}>
                        We only accept one partner per industry, per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
