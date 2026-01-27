
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css';

export const metadata: Metadata = {
    title: "Custom Home Builder Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for Custom Home Builders. High-ticket lead generation for luxury builds.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function HomeBuilderPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="Custom Home Builder Marketing"
                description="Exclusive digital marketing for Custom Home Builders. High-ticket lead generation for luxury builds."
                url="https://kilvington.digital/industries/custom-home-builder-marketing"
                serviceType="Digital Marketing for Home Builders"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>INDUSTRY FOCUS: LUXURY CONSTRUCTION</span>
                    <h1 className={styles.title}>CUSTOM BUILDER MARKETING</h1>
                    <p className={styles.subtitle}>
                        One client is worth $1M+. Stop treating your marketing like it&apos;s a $50 service.
                        We build the digital prestige that attracts qualified, high-net-worth buyers.
                    </p>
                    <Link href="/contact" className="btn btn-primary">CHECK COUNTY AVAILABILITY</Link>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>PRESTIGE IS PROFIT.</h2>
                            <p className={styles.introText}>
                                A custom home buyer doesn&apos;t click the first Google Ad. They research. They stalk. They verify.
                                We build a digital presence that screams &quot;Authority&quot; from the moment they land on your site.
                            </p>
                            <p className={styles.introText}>
                                Whether you are building equestrian estates in <strong>Moore County</strong> or modern luxury in <strong>Wake County</strong>, we ensure your brand aligns with the quality of your work.
                            </p>
                            <div className={styles.promiseBox}>
                                <strong className={styles.promiseTitle}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p className={styles.promiseText}>
                                    We represent ONE custom builder per county. If we handle your Moore County territory, we do not work with anyone else there.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/custom-home-builder-marketing-luxury-construction-leads.png"
                                alt="Custom Home Builder Marketing Luxury Construction Leads"
                                width={600}
                                height={400}
                                className={styles.serviceIntroImage}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>PORTFOLIO OPTIMIZATION</h3>
                            <p className={styles.featureDesc}>
                                We turn your project photos into SEO assets. Every image is tagged, mapped, and structured so Google knows exactly what you build.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>TRUST ARCHITECTURE</h3>
                            <p className={styles.featureDesc}>
                                We implement &quot;Social Proof&quot; systems that showcase your awards, certifications, and high-end testimonials to build instant trust.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>LONG-GAME NURTURE</h3>
                            <p className={styles.featureDesc}>
                                Buyers take 6-12 months to decide. Our AI agents nurture leads with helpful content until they are ready to break ground.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.introHeading}>BUILD YOUR LEGACY</h2>
                    <p className={styles.subtitle}>
                        We only accept one partner per industry, per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
