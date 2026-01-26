import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './apex-tree.module.css';
import RoiChart from '../../../components/RoiChart';

export const metadata: Metadata = {
    title: "Case Studies | Apex Tree Company ROI",
    description: "How we generated 1,600% monthly ROI for a North Carolina arborist using our Exclusive Focus marketing system.",
};

export default function ApexTreeCaseStudy() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={styles.heroSubtitle}>PROVEN BATTLEFIELD RESULTS</p>
                    <h1 className={styles.heroTitle}>APEX TREE COMPANY</h1>
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber} style={{ color: 'var(--c-green-acid)' }}>1,600%</div>
                            <div className={styles.statLabel}>Monthly ROI</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>14x</div>
                            <div className={styles.statLabel}>Lead Increase</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>60%</div>
                            <div className={styles.statLabel}>Organic Traffic</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>70%</div>
                            <div className={styles.statLabel}>Conv. Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Story */}
            <section className={styles.contentSection}>
                <div className={`container ${styles.grid}`}>
                    <div>
                        <h2 className={styles.heading}>THE MISSION</h2>
                        <p className={styles.text}>
                            Apex Tree Company, a dedicated two-man arborist team in North Carolina, faced a common enemy: <strong>Low-quality leads chasing the lowest price.</strong>
                        </p>
                        <p className={styles.text}>
                            They needed a strategic overhaul. Their goal wasn't just "more calls"—it was to attract clients who valued expertise over cheap labor. They needed a system that would grow organic leads (which historically converted better) and establish them as the local authority.
                        </p>

                        <div className={styles.testimonial}>
                            <p className={styles.quote}>
                                "We're thrilled with the results. The significant increase in qualified leads and conversions has made a real difference to our business."
                            </p>
                            <p className={styles.author}>- Jon, Apex Tree Company</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.chartContainer}>
                            <h3 className={styles.chartLabel}>REVENUE TRAJECTORY</h3>
                            <RoiChart />
                            <p style={{ marginTop: '20px', color: '#666', fontSize: '0.9rem', textAlign: 'center' }}>
                                *Actual growth visualization based on Q1-Q3 2024 performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Strategy */}
            <section className="section" style={{ backgroundColor: 'var(--c-black)' }}>
                <div className={`container ${styles.grid}`}>
                    <div>
                        <h2 className={styles.heading}>THE EXECUTION</h2>
                        <p className={styles.text}>
                            We deployed our full "Core Engine" infrastructure:
                        </p>
                        <ul style={{ listStyle: 'none', marginLeft: 0 }}>
                            <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                                <span style={{ color: 'var(--c-green-acid)' }}>01 //</span>
                                <span style={{ color: 'var(--c-grey-mid)' }}><strong>Hyper-Local SEO:</strong> We reversed-engineered local search intent to dominate keywords like "Tree Limb Removal" and "Emergency Arborist".</span>
                            </li>
                            <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                                <span style={{ color: 'var(--c-green-acid)' }}>02 //</span>
                                <span style={{ color: 'var(--c-grey-mid)' }}><strong>GMB Optmization:</strong> We overhauled their Google Business Profile, turning it into a 24/7 lead capture machine with high-quality visual proof.</span>
                            </li>
                            <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                                <span style={{ color: 'var(--c-green-acid)' }}>03 //</span>
                                <span style={{ color: 'var(--c-grey-mid)' }}><strong>AI Booking Agents:</strong> To handle the 14x surge in leads, we implemented AI booking management to qualify and schedule quotes instantly.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={styles.heading}>THE AFTERMATH</h2>
                        <div style={{ background: 'rgba(76, 252, 15, 0.05)', padding: '30px', border: '1px solid var(--c-green-acid)' }}>
                            <h3 style={{ color: 'var(--c-white)', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>JULY PERFORMANCE PROTOCOL</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '10px' }}>
                                <span style={{ color: '#aaa' }}>Marketing Cost</span>
                                <span style={{ color: 'var(--c-white)' }}>$2,500</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '10px' }}>
                                <span style={{ color: '#aaa' }}>Revenue Generated</span>
                                <span style={{ color: 'var(--c-green-acid)', fontWeight: 'bold' }}>$43,371</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
                                <span style={{ color: '#aaa' }}>Net Profit</span>
                                <span style={{ color: 'var(--c-white)' }}>$40,871</span>
                            </div>
                        </div>
                        <p style={{ marginTop: '20px', color: 'var(--c-grey-mid)', fontSize: '0.9rem' }}>
                            *Data verified from Jan 2024 - July 2024.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.hero}`} style={{ padding: '100px 0' }}>
                <div className="container">
                    <h2 className={styles.heroTitle}>ARE YOU NEXT?</h2>
                    <p style={{ color: 'var(--c-grey-mid)', maxWidth: '600px', margin: '0 auto 40px' }}>
                        We are looking for our next exclusive partner in the service industry. One partner per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
