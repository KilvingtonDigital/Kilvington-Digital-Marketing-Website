
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css';

export const metadata: Metadata = {
    title: "Fence Installation Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for Fence companies. Dominate your county with SEO, GEO, and AI Revenue Agents.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function FenceInstallationPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="Fence Installation Marketing"
                description="Exclusive digital marketing for Fence companies. Dominate your county with SEO, GEO, and AI Revenue Agents."
                url="https://kilvington.digital/industries/fence-installation-marketing"
                serviceType="Digital Marketing for Fence Contractors"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>INDUSTRY FOCUS: PERIMETER SECURITY</span>
                    <h1 className={styles.title}>FENCE MARKETING DOMINANCE</h1>
                    <p className={styles.subtitle}>
                        You build boundaries. We build revenue pipelines.
                        Secure the #1 spot in your county for Vinyl, Aluminum, and Privacy Fence leads.
                    </p>
                    <Link href="/contact" className="btn btn-primary">CHECK COUNTY AVAILABILITY</Link>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>STOP BUYING SHARED LEADS.</h2>
                            <p className={styles.introText}>
                                HomeAdvisor sends the same &quot;need a fence&quot; lead to 8 other guys.
                                We build a digital fortress around your brand so 100% of the traffic belongs to you.
                            </p>
                            <p className={styles.introText}>
                                Whether you are targeting HOA privacy fences in <strong>Cumberland County</strong> or high-end security gates in <strong>Lee County</strong>, we position you as the only logical choice.
                            </p>
                            <div className={styles.promiseBox}>
                                <strong className={styles.promiseTitle}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p className={styles.promiseText}>
                                    We represent ONE fence company per county. If we act for you in Lee County, your competitors are locked out.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/fence-installation-marketing-lead-generation.png"
                                alt="Fence Marketing Data Visualization"
                                width={600}
                                height={400}
                                className={`${styles.introImage} ${styles.treeImage}`}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>HOA TARGETING</h3>
                            <p className={styles.featureDesc}>
                                We geo-fence new subdivisions where homeowners desperately need privacy fences. We hit them before they even Google &quot;fence company&quot;.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>MATERIAL SPECIFIC SEO</h3>
                            <p className={styles.featureDesc}>
                                We don&apos;t just rank for &quot;fence&quot;. We rank for &quot;Tan Vinyl Privacy Fence&quot;, &quot;Black Aluminum Puppy Picket&quot;, and &quot;Commercial Chain Link&quot;.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>INSTANT QUOTE AGENTS</h3>
                            <p className={styles.featureDesc}>
                                Homeowners want prices immediately. Our AI agents can provide ballpark estimates based on linear footage 24/7 to capture the lead.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.introHeading}>SECURE YOUR PERIMETER</h2>
                    <p className={styles.subtitle}>
                        We only accept one partner per industry, per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
