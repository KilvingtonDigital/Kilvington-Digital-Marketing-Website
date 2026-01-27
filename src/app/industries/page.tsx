
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../services/core-service.module.css';

export const metadata: Metadata = {
    title: "Industries | Kilvington Digital Marketing",
    description: "Specialized digital marketing infrastructure for high-value service industries. Tree Service, Fencing, Home Building, and more.",
};

export default function IndustriesHubPage() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>SECTOR EXPERTISE</span>
                    <h1 className={styles.title}>CHOOSE YOUR INDUSTRY</h1>
                    <p className={styles.subtitle}>
                        We don&apos;t specialize in &quot;marketing&quot;. We specialize in revenue models for specific high-ticket trades.
                        Select your sector to see how we engineer dominance.
                    </p>
                </div>
            </section>

            {/* Industry Grid */}
            <section className={`${styles.introSection} ${styles.industrySection}`}>
                <div className="container">
                    <div className={styles.industryGrid}>

                        {/* Tree Service Card */}
                        <Link href="/industries/tree-service-marketing" className={styles.industryCard}>
                            <div className={styles.industryImageWrapper}>
                                <Image
                                    src="/images/tree-service-marketing-arborist-lead-generation.png"
                                    alt="Tree Service Marketing"
                                    fill
                                    className={styles.industryImage}
                                />
                            </div>
                            <h3 className={styles.featureTitle}>TREE SERVICES</h3>
                            <p className={styles.featureDesc}>
                                For arborists who want high-ticket removals and storm work, not just hedge trimming.
                            </p>
                            <span className={`btn btn-secondary ${styles.industryButton}`}>EXPLORE STRATEGY →</span>
                        </Link>

                        {/* Fence Installation Card */}
                        <Link href="/industries/fence-installation-marketing" className={styles.industryCard}>
                            <div className={styles.industryImageWrapper}>
                                <Image
                                    src="/images/fence-installation-marketing-lead-generation.png"
                                    alt="Fence Installation Marketing"
                                    fill
                                    className={styles.industryImage}
                                />
                            </div>
                            <h3 className={styles.featureTitle}>FENCE INSTALLATION</h3>
                            <p className={styles.featureDesc}>
                                Dominate the HOA privacy fence market and secure high-margin commercial perimeter jobs.
                            </p>
                            <span className={`btn btn-secondary ${styles.industryButton}`}>EXPLORE STRATEGY →</span>
                        </Link>

                        {/* Custom Home Builder Card */}
                        <Link href="/industries/custom-home-builder-marketing" className={styles.industryCard}>
                            <div className={styles.industryImageWrapper}>
                                <Image
                                    src="/images/custom-home-builder-marketing-luxury-construction-leads.png"
                                    alt="Custom Home Builder Marketing"
                                    fill
                                    className={styles.industryImage}
                                />
                            </div>
                            <h3 className={styles.featureTitle}>CUSTOM HOME BUILDERS</h3>
                            <p className={styles.featureDesc}>
                                Build trust and prestige for multi-million dollar projects. Long-game nurture for luxury buyers.
                            </p>
                            <span className={`btn btn-secondary ${styles.industryButton}`}>EXPLORE STRATEGY →</span>
                        </Link>

                        {/* Roofing Card */}
                        <Link href="/industries/roofing-marketing" className={styles.industryCard}>
                            <div className={styles.industryImageWrapper}>
                                <Image
                                    src="/images/roofing-marketing-storm-damage-leads-system.png"
                                    alt="Roofing Marketing"
                                    fill
                                    className={styles.industryImage}
                                />
                            </div>
                            <h3 className={styles.featureTitle}>ROOFING & STORM</h3>
                            <p className={styles.featureDesc}>
                                Capture high-value insurance claims and retail replacements with &quot;Storm Response&quot; site infrastructure.
                            </p>
                            <span className={`btn btn-secondary ${styles.industryButton}`}>EXPLORE STRATEGY →</span>
                        </Link>

                        {/* HVAC Card */}
                        <Link href="/industries/hvac-marketing" className={styles.industryCard}>
                            <div className={styles.industryImageWrapper}>
                                <Image
                                    src="/images/hvac-contractor-marketing-ac-repair-leads.png"
                                    alt="HVAC Marketing"
                                    fill
                                    className={styles.industryImage}
                                />
                            </div>
                            <h3 className={styles.featureTitle}>HVAC SERVICES</h3>
                            <p className={styles.featureDesc}>
                                Win the race for &quot;AC Repair&quot; with high-speed mobile pages and automated booking agents.
                            </p>
                            <span className={`btn btn-secondary ${styles.industryButton}`}>EXPLORE STRATEGY →</span>
                        </Link>

                        {/* Epoxy Card */}
                        <Link href="/industries/epoxy-flooring-marketing" className={styles.industryCard}>
                            <div className={styles.industryImageWrapper}>
                                <Image
                                    src="/images/epoxy-flooring-contractor-marketing-system.png"
                                    alt="Epoxy Flooring Marketing"
                                    fill
                                    className={styles.industryImage}
                                />
                            </div>
                            <h3 className={styles.featureTitle}>EPOXY FLOORING</h3>
                            <p className={styles.featureDesc}>
                                Use portfolio-driven design to sell high-margin garage and commercial floor coatings.
                            </p>
                            <span className={`btn btn-secondary ${styles.industryButton}`}>EXPLORE STRATEGY →</span>
                        </Link>

                        {/* Spray Foam Card */}
                        <Link href="/industries/spray-foam-insulation-marketing" className={styles.industryCard}>
                            <div className={styles.industryImageWrapper}>
                                <Image
                                    src="/images/spray-foam-insulation-marketing-leads.png"
                                    alt="Spray Foam Marketing"
                                    fill
                                    className={styles.industryImage}
                                />
                            </div>
                            <h3 className={styles.featureTitle}>SPRAY FOAM</h3>
                            <p className={styles.featureDesc}>
                                Educate homeowners on energy ROI and dominate the crawl space encapsulation market.
                            </p>
                            <span className={`btn btn-secondary ${styles.industryButton}`}>EXPLORE STRATEGY →</span>
                        </Link>

                        {/* Land Clearing Card */}
                        <Link href="/industries/land-clearing-marketing" className={styles.industryCard}>
                            <div className={styles.industryImageWrapper}>
                                <Image
                                    src="/images/land-clearing-forestry-mulching-marketing.png"
                                    alt="Land Clearing Marketing"
                                    fill
                                    className={styles.industryImage}
                                />
                            </div>
                            <h3 className={styles.featureTitle}>LAND CLEARING</h3>
                            <p className={styles.featureDesc}>
                                Connect with developers and builders. Win forestry mulching and grading contracts.
                            </p>
                            <span className={`btn btn-secondary ${styles.industryButton}`}>EXPLORE STRATEGY →</span>
                        </Link>

                        {/* Mold Remediation Card */}
                        <Link href="/industries/mold-remediation-marketing" className={styles.industryCard}>
                            <div className={styles.industryImageWrapper}>
                                <Image
                                    src="/images/mold-remediation-marketing-water-damage-leads.png"
                                    alt="Mold Remediation Marketing"
                                    fill
                                    className={styles.industryImage}
                                />
                            </div>
                            <h3 className={styles.featureTitle}>MOLD REMEDIATION</h3>
                            <p className={styles.featureDesc}>
                                Capture urgent &quot;Black Mold&quot; searches. Position your brand as the health authority homeowners trust.
                            </p>
                            <span className={`btn btn-secondary ${styles.industryButton}`}>EXPLORE STRATEGY →</span>
                        </Link>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.introHeading}>DON&apos;T SEE YOUR INDUSTRY?</h2>
                    <p className={styles.subtitle}>
                        We occasionally accept partners in other high-ticket verticals if the economics make sense.
                    </p>
                    <Link href="/contact" className="btn btn-primary">INQUIRE ABOUT AVAILABILITY</Link>
                </div>
            </section>
        </div>
    );
}
