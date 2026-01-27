
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css'; // Reusing the shared style module

export const metadata: Metadata = {
    title: "Tree Service Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for Tree Service companies. Dominate your county with SEO, GEO, and AI Revenue Agents.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function TreeServicePage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="Tree Service Marketing"
                description="Exclusive digital marketing for Tree Service companies. Dominate your county with SEO, GEO, and AI Revenue Agents."
                url="https://kilvington.digital/industries/tree-service-marketing"
                serviceType="Digital Marketing for Arborists"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>INDUSTRY FOCUS: ARBORICULTURE</span>
                    <h1 className={styles.title}>TREE SERVICE DOMINANCE</h1>
                    <p className={styles.subtitle}>
                        Stop fighting for scraps in Angi leads.
                        Values-based, high-ticket tree service marketing for companies that want to own their county.
                    </p>
                    <Link href="/contact" className="btn btn-primary">CHECK COUNTY AVAILABILITY</Link>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>OWN YOUR BACKYARD. <br />LITERALLY.</h2>
                            <p className={styles.introText}>
                                In the tree service industry, proximity is power. You don&apos;t need leads from 50 miles away that cost you more in fuel than you make in profit.
                            </p>
                            <p className={styles.introText}>
                                We build digital infrastructure that locks down your specific high-value territories. Whether you want to dominate <strong>Wake County</strong> high-end removals or capture the growing <strong>Lee County</strong> land clearing market, our system is engineered for local monopoly.
                            </p>
                            <div className={styles.promiseBox}>
                                <strong className={styles.promiseTitle}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p className={styles.promiseText}>
                                    We represent ONE tree service company per county. If we act for you in Moore County, we will not work with your competitors there. Period.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/tree-service-marketing-arborist-lead-generation.png"
                                alt="Tree Service Marketing Arborist Lead Generation"
                                width={600}
                                height={400}
                                className={`${styles.introImage} ${styles.treeImage}`}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>EMERGENCY STRIKE TEAMS</h3>
                            <p className={styles.featureDesc}>
                                When a storm hits, search volume spikes 500%. Our &quot;Storm Mode&quot; protocol instantly adjusts your ads and site to capture emergency removal revenue.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>HIGH-TICKET TARGETING</h3>
                            <p className={styles.featureDesc}>
                                We filter out the &quot;trim one branch&quot; callers. Our SEO targets commercial contracts, land clearing, and hazardous complex removals.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>REVENUE AGENTS</h3>
                            <p className={styles.featureDesc}>
                                You&apos;re in a bucket truck, not at a desk. Our AI agents answer calls, quote estimates (roughly), and book appointments while you work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Territory Strategy */}
            <section className={styles.benefitSection}>
                <div className="container">
                    <h2 className={`${styles.introHeading} ${styles.centeredHeading}`}>CHOOSE YOUR BATTLEFIELD</h2>
                    <p className={`${styles.subtitle} ${styles.centerSubtitle}`}>
                        Different counties require different strategies. We tailor our approach to the economic tier of your target zone.
                    </p>

                    <div className={styles.tierGrid}>
                        {/* Tier 1 */}
                        <div className={`${styles.tierCard} ${styles.tier1}`}>
                            <h3 className={styles.tierTitle}>TIER 1 (METRO CORE)</h3>
                            <p className={styles.tierSubtitle}>WAKE, MECKLENBURG</p>
                            <p className={styles.tierDesc}>High volume, fierce competition.</p>
                            <ul className={styles.tierList}>
                                <li className={styles.tierItem}>• Aggressive Technical SEO</li>
                                <li className={styles.tierItem}>• High-Budget &nbsp; PPC Management</li>
                                <li className={styles.tierItem}>• Brand Dominance Campaigns</li>
                            </ul>
                        </div>

                        {/* Tier 2 */}
                        <div className={`${styles.tierCard} ${styles.tier2}`}>
                            <h3 className={styles.tierTitle}>TIER 2 (GROWTH ZONES)</h3>
                            <p className={styles.tierSubtitle}>MOORE, LEE, JOHNSTON</p>
                            <p className={styles.tierDesc}>Rapid growth, moderate competition.</p>
                            <ul className={styles.tierList}>
                                <li className={styles.tierItem}>• &quot;Big Fish&quot; Local SEO</li>
                                <li className={styles.tierItem}>• Ethical Review Collection</li>
                                <li className={styles.tierItem}>• Community Authority Building</li>
                            </ul>
                        </div>

                        {/* Tier 3 */}
                        <div className={`${styles.tierCard} ${styles.tier3}`}>
                            <h3 className={styles.tierTitle}>TIER 3 (EXPANSION)</h3>
                            <p className={styles.tierSubtitle}>CHATHAM, HARNETT</p>
                            <p className={styles.tierDesc}>Rural/Emerging, low competition.</p>
                            <ul className={styles.tierList}>
                                <li className={styles.tierItem}>• Cost-Effective Expansion</li>
                                <li className={styles.tierItem}>• Wide-Net Geo-Fencing</li>
                                <li className={styles.tierItem}>• First-Mover Advantage</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.introHeading}>IS YOUR TERRITORY OPEN?</h2>
                    <p className={styles.subtitle}>
                        We only accept one partner per industry, per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
