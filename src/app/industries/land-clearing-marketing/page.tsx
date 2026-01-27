
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css';

export const metadata: Metadata = {
    title: "Land Clearing Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for Land Clearing & Excavation. Dominate site prep, forestry mulching, and grading keywords.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function LandClearingPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="Land Clearing Marketing"
                description="Exclusive digital marketing for Land Clearing & Excavation. Dominate site prep, forestry mulching, and grading keywords."
                url="https://kilvington.digital/industries/land-clearing-marketing"
                serviceType="Digital Marketing for Land Clearing"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>INDUSTRY FOCUS: SITE PREPARATION</span>
                    <h1 className={styles.title}>LAND CLEARING DOMINANCE</h1>
                    <p className={styles.subtitle}>
                        Big machines. Big contracts.
                        We connect you with developers, builders, and landowners who need massive earth-moving power.
                    </p>
                    <Link href="/contact" className="btn btn-primary">CHECK COUNTY AVAILABILITY</Link>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>WE OWN THE DIRT.</h2>
                            <p className={styles.introText}>
                                Before the builder starts, they need you. We position your brand as the first step in any major local project.
                            </p>
                            <p className={styles.introText}>
                                From forestry mulching in <strong>Chatham County</strong> to commercial grading in <strong>Wake County</strong>, we ensure you are the bid they accept.
                            </p>
                            <div className={styles.promiseBox}>
                                <strong className={styles.promiseTitle}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p className={styles.promiseText}>
                                    We represent ONE excavation company per territory.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/land-clearing-forestry-mulching-marketing.png"
                                alt="Land Clearing Forestry Mulching Marketing"
                                width={600}
                                height={400}
                                className={styles.serviceIntroImage}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>DEVELOPER NETWORKS</h3>
                            <p className={styles.featureDesc}>
                                We use LinkedIn automation to get your name in front of the major property developers in your county.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>FORESTRY MULCHING SEO</h3>
                            <p className={styles.featureDesc}>
                                A high-volume niche. We dominate keywords related to &quot;brush clearing&quot;, &quot;underbrush removal&quot;, and &quot;land reclamation&quot;.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>EQUIPMENT SHOWCASE</h3>
                            <p className={styles.featureDesc}>
                                We highlight your fleet. Showing you have the right iron for the job builds instant confidence with GCs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.introHeading}>CLEAR THE PATH</h2>
                    <p className={styles.subtitle}>
                        We only accept one partner per industry, per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
