
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../services/core-service.module.css'; // Reusing the shared style module

export const metadata: Metadata = {
    title: "Tree Service Marketing | Kilvington Digital Marketing",
    description: "Exclusive digital marketing for Tree Service companies. Dominate your county with SEO, GEO, and AI Revenue Agents.",
};

export default function TreeServicePage() {
    return (
        <div className="page-wrapper">
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
                                In the tree service industry, proximity is power. You don't need leads from 50 miles away that cost you more in fuel than you make in profit.
                            </p>
                            <p className={styles.introText}>
                                We build digital infrastructure that locks down your specific high-value territories. Whether you want to dominate <strong>Wake County</strong> high-end removals or capture the growing <strong>Lee County</strong> land clearing market, our system is engineered for local monopoly.
                            </p>
                            <div style={{ marginTop: '30px', padding: '20px', borderLeft: '3px solid var(--c-green-acid)', background: 'rgba(255,255,255,0.05)' }}>
                                <strong style={{ color: 'var(--c-white)', display: 'block', marginBottom: '10px' }}>THE EXCLUSIVE PARTNER PROMISE</strong>
                                <p style={{ color: '#ccc', margin: 0 }}>
                                    We represent ONE tree service company per county. If we act for you in Moore County, we will not work with your competitors there. Period.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/tree-service-marketing-hero.png"
                                alt="Tree Service Marketing Data Visualization"
                                width={600}
                                height={400}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    border: '1px solid #333',
                                    borderRadius: '4px',
                                    boxShadow: '0 0 30px rgba(0,0,0,0.5)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>EMERGENCY STRIKE TEAMS</h3>
                            <p className={styles.featureDesc}>
                                When a storm hits, search volume spikes 500%. Our "Storm Mode" protocol instantly adjusts your ads and site to capture emergency removal revenue.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>HIGH-TICKET TARGETING</h3>
                            <p className={styles.featureDesc}>
                                We filter out the "trim one branch" callers. Our SEO targets commercial contracts, land clearing, and hazardous complex removals.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>REVENUE AGENTS</h3>
                            <p className={styles.featureDesc}>
                                You're in a bucket truck, not at a desk. Our AI agents answer calls, quote estimates (roughly), and book appointments while you work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Territory Strategy */}
            <section className={styles.benefitSection}>
                <div className="container">
                    <h2 className={styles.introHeading} style={{ textAlign: 'center' }}>CHOOSE YOUR BATTLEFIELD</h2>
                    <p className={styles.subtitle} style={{ textAlign: 'center', marginBottom: '60px' }}>
                        Different counties require different strategies. We tailor our approach to the economic tier of your target zone.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {/* Tier 1 */}
                        <div style={{ background: '#111', padding: '30px', borderTop: '4px solid #FFD700' }}>
                            <h3 style={{ color: '#fff', marginBottom: '10px' }}>TIER 1 (METRO CORE)</h3>
                            <p style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '20px' }}>WAKE, MECKLENBURG</p>
                            <p style={{ color: '#ccc', marginBottom: '20px' }}>High volume, fierce competition.</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px', color: '#fff' }}>• Aggressive Technical SEO</li>
                                <li style={{ marginBottom: '10px', color: '#fff' }}>• High-Budget &nbsp; PPC Management</li>
                                <li style={{ marginBottom: '10px', color: '#fff' }}>• Brand Dominance Campaigns</li>
                            </ul>
                        </div>

                        {/* Tier 2 */}
                        <div style={{ background: '#111', padding: '30px', borderTop: '4px solid var(--c-green-acid)' }}>
                            <h3 style={{ color: '#fff', marginBottom: '10px' }}>TIER 2 (GROWTH ZONES)</h3>
                            <p style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '20px' }}>MOORE, LEE, JOHNSTON</p>
                            <p style={{ color: '#ccc', marginBottom: '20px' }}>Rapid growth, moderate competition.</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px', color: '#fff' }}>• "Big Fish" Local SEO</li>
                                <li style={{ marginBottom: '10px', color: '#fff' }}>• Ethical Review Collection</li>
                                <li style={{ marginBottom: '10px', color: '#fff' }}>• Community Authority Building</li>
                            </ul>
                        </div>

                        {/* Tier 3 */}
                        <div style={{ background: '#111', padding: '30px', borderTop: '4px solid #00BFFF' }}>
                            <h3 style={{ color: '#fff', marginBottom: '10px' }}>TIER 3 (EXPANSION)</h3>
                            <p style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '20px' }}>CHATHAM, HARNETT</p>
                            <p style={{ color: '#ccc', marginBottom: '20px' }}>Rural/Emerging, low competition.</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px', color: '#fff' }}>• Cost-Effective Expansion</li>
                                <li style={{ marginBottom: '10px', color: '#fff' }}>• Wide-Net Geo-Fencing</li>
                                <li style={{ marginBottom: '10px', color: '#fff' }}>• First-Mover Advantage</li>
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
