
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css';

export const metadata: Metadata = {
    title: "HVAC Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for HVAC companies. Dominate local search for repairs and system replacements.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function HVACMarketingPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="HVAC Marketing"
                description="Exclusive digital marketing for HVAC companies. Dominate local search for repairs and system replacements."
                url="https://kilvington.digital/industries/hvac-marketing"
                serviceType="Digital Marketing for HVAC Contractors"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>INDUSTRY FOCUS: CLIMATE CONTROL</span>
                    <h1 className={styles.title}>HVAC DOMINANCE</h1>
                    <p className={styles.subtitle}>
                        When the AC dies, speed wins.
                        Our &quot;Speed to Lead&quot; AIO agents book appointments while your competitors are still checking voicemail.
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
                            <div className={styles.promiseBox}>
                                <strong className={styles.promiseTitle}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p className={styles.promiseText}>
                                    We represent ONE HVAC company per territory.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/hvac-contractor-marketing-ac-repair-leads.png"
                                alt="HVAC Contractor Marketing AC Repair Leads"
                                width={600}
                                height={400}
                                className={styles.serviceIntroImage}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>SEASONAL SHIFTS</h3>
                            <p className={styles.featureDesc}>
                                We automatically switch your SEO focus from &quot;AC Repair&quot; to &quot;Furnace Tune-up&quot; based on weather triggers.
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
