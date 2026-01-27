import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './apex-tree.module.css';
import RoiChart from '../../../components/RoiChart';
import CaseStudySchema from '../../../components/CaseStudySchema';

export const metadata: Metadata = {
    title: "Case Studies | Apex Tree Company ROI",
    description: "How we generated 1,600% monthly ROI for a North Carolina arborist using our Exclusive Focus marketing system.",
};

export default function ApexTreeCaseStudy() {
    return (
        <div className="page-wrapper">
            <CaseStudySchema
                clientName="Apex Tree Company"
                serviceName="Exclusive Digital Infrastructure"
                outcome="Generated 1,600% Monthly ROI and 14x Lead Increase"
                reviewRating={5}
                reviewBody="We're thrilled with the results. The significant increase in qualified leads and conversions has made a real difference to our business."
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={styles.heroSubtitle}>PROVEN BATTLEFIELD RESULTS</p>
                    <h1 className={styles.heroTitle}>APEX TREE COMPANY</h1>
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <div className={`${styles.statNumber} ${styles.statNumberHighlight}`}>1,600%</div>
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
                            They needed a strategic overhaul. Their goal wasn&apos;t just &quot;more calls&quot;—it was to attract clients who valued expertise over cheap labor. They needed a system that would grow organic leads (which historically converted better) and establish them as the local authority.
                        </p>

                        <div className={styles.testimonial}>
                            <p className={styles.quote}>
                                &quot;We&apos;re thrilled with the results. The significant increase in qualified leads and conversions has made a real difference to our business.&quot;
                            </p>
                            <p className={styles.author}>- Jon, Apex Tree Company</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.chartContainer}>
                            <h3 className={styles.chartLabel}>REVENUE TRAJECTORY</h3>
                            <RoiChart />
                            <p className={styles.chartDisclaimer}>
                                *Actual growth visualization based on Q1-Q3 2024 performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Strategy */}
            <section className={`section ${styles.executionSection}`}>
                <div className={`container ${styles.grid}`}>
                    <div>
                        <h2 className={styles.heading}>THE EXECUTION</h2>
                        <p className={styles.text}>
                            We deployed our full &quot;Core Engine&quot; infrastructure:
                        </p>
                        <ul className={styles.executionList}>
                            <li className={styles.executionItem}>
                                <span className={styles.executionNumber}>01 //</span>
                                <span className={styles.executionText}><strong>Hyper-Local SEO:</strong> We reversed-engineered local search intent to dominate keywords like &quot;Tree Limb Removal&quot; and &quot;Emergency Arborist&quot;.</span>
                            </li>
                            <li className={styles.executionItem}>
                                <span className={styles.executionNumber}>02 //</span>
                                <span className={styles.executionText}><strong>GMB Optmization:</strong> We overhauled their Google Business Profile, turning it into a 24/7 lead capture machine with high-quality visual proof.</span>
                            </li>
                            <li className={styles.executionItem}>
                                <span className={styles.executionNumber}>03 //</span>
                                <span className={styles.executionText}><strong>AI Booking Agents:</strong> To handle the 14x surge in leads, we implemented AI booking management to qualify and schedule quotes instantly.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={styles.heading}>THE AFTERMATH</h2>
                        <div className={styles.aftermathBox}>
                            <h3 className={styles.aftermathTitle}>JULY PERFORMANCE PROTOCOL</h3>
                            <div className={styles.aftermathRow}>
                                <span className={styles.aftermathLabel}>Marketing Cost</span>
                                <span className={styles.aftermathValue}>$2,500</span>
                            </div>
                            <div className={styles.aftermathRow}>
                                <span className={styles.aftermathLabel}>Revenue Generated</span>
                                <span className={styles.aftermathHighlight}>$43,371</span>
                            </div>
                            <div className={styles.aftermathFooter}>
                                <span className={styles.aftermathLabel}>Net Profit</span>
                                <span className={styles.aftermathValue}>$40,871</span>
                            </div>
                        </div>
                        <p className={styles.aftermathDisclaimer}>
                            *Data verified from Jan 2024 - July 2024.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.hero} ${styles.ctaSection}`}>
                <div className="container">
                    <h2 className={styles.heroTitle}>ARE YOU NEXT?</h2>
                    <p className={styles.ctaText}>
                        We are looking for our next exclusive partner in the service industry. One partner per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
