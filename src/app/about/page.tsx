
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata: Metadata = {
    title: "About Kilvington Digital | The Anti-Agency for NC Trades",
    description: "We are infrastructure architects, not a marketing agency. We build exclusive, permanent digital assets for one partner per territory in North Carolina.",
};

export default function AboutPage() {
    return (
        <div className="page-wrapper">
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.label}>OUR MISSION</span>
                        <h1 className={styles.title}>THE ANTI-AGENCY.</h1>
                        <p className={styles.subtitle}>
                            We were founded on a simple truth: <strong>Most digital marketing agencies are scams.</strong> They sell retainers, not results. They lease you a website you don&apos;t own. We are here to kill that model.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission / Story Grid */}
            <section className={styles.missionSection}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.missionContent}>
                            <h2 className={styles.missionHeading}>INFRASTRUCTURE, NOT SERVICES.</h2>
                            <p className={styles.text}>
                                Kilvington Digital Marketing isn&apos;t a &quot;Service Provider&quot;. We are infrastructure architects.
                                When you work with us, we aren&apos;t just posting on Facebook for you. We are building a
                                <strong> permanent digital asset</strong> that dominates your specific territory.
                            </p>
                            <p className={styles.text}>
                                We saw excellent tradesmen—roofers, builders, arborists—being taken advantage of by
                                fast-talking marketing &quot;gurus&quot; who had never held a hammer in their lives.
                                We decided to bring the same level of precision and integrity to digital marketing
                                that you bring to your job site.
                            </p>

                            <div className={styles.statGrid}>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>100</span>
                                    <span className={styles.statLabel}>NC Counties</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>1</span>
                                    <span className={styles.statLabel}>Partner Per Match</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>100%</span>
                                    <span className={styles.statLabel}>Exclusivity</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/kilvington-digital-agency-strategy-control-room.png"
                                alt="Kilvington Digital Agency Strategy Control Room"
                                fill
                                className={styles.objectCover}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className={styles.valuesSection}>
                <div className="container">
                    <h2 className={`${styles.missionHeading} ${styles.centeredHeading}`}>THE CODE WE LIVE BY</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>TERRITORY INTEGRITY</h3>
                            <p className={styles.valueText}>
                                We will never work with your competitor. If you secure Wake County for Tree Service,
                                we will turn down every other tree service in Raleigh. Your growth is our only priority.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>WHITE HAT ETHICS</h3>
                            <p className={styles.valueText}>
                                No fake reviews. No spam links. No black-hat tricks that get you penalized by Google.
                                We build sustainable, long-term dominance through superior engineering and content.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>RADICAL TRANSPARENCY</h3>
                            <p className={styles.valueText}>
                                You own your data. You see exactly what we do.
                                We provide real-time dashboards showing exactly where your leads are coming from and what your ROI is.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={`container ${styles.ctaContainer}`}>
                    <h2 className={styles.missionHeading}>READY TO OWN YOUR MARKET?</h2>
                    <p className={styles.ctaText}>
                        We are currently vetting partners for the remaining Q1 2026 territories.
                    </p>
                    <Link href="/contact" className="btn btn-primary">CHECK YOUR COUNTY STATUS</Link>
                </div>
            </section>
        </div>
    );
}
