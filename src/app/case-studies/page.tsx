import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './case-studies.module.css';

export const metadata: Metadata = {
    title: "Digital Marketing Case Studies & ROI Reports | Kilvington",
    description: "Verified results: See how our Territory-Exclusive infrastructure generated 1,600% ROI for NC Tree Service and Home Service businesses.",
};

export default function CaseStudiesListing() {
    return (
        <main>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>BATTLEFIELD REPORTS</h1>
                    <p className={styles.intro}>
                        We verify everything. Here are the documented results of our territory-exclusive infrastructure.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    {/* Case Study Card 1: Apex Tree */}
                    <div className={styles.card}>
                        <a
                            href="https://apextreecompany.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.cardImage} ${styles.cardImageRelative}`}
                        >
                            <Image
                                src="/images/case-studies/apex-tree-company-logo-marketing-results.png"
                                alt="Apex Tree Company Logo Marketing Results"
                                fill
                                className={styles.objectContain}
                            />
                        </a>
                        <div className={styles.cardContent}>
                            <div className={styles.industryTag}>Tree Service / Arborist</div>
                            <h2 className={styles.cardTitle}>Apex Tree Company</h2>

                            <div className={styles.cardStats}>
                                <div className={styles.stat}>
                                    <span className={`${styles.statValue} ${styles.statHighlight}`}>1,600%</span>
                                    <span className={styles.statLabel}>ROI</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.statValue}>Perm.</span>
                                    <span className={styles.statLabel}>Territory Lock</span>
                                </div>
                            </div>

                            <Link href="/case-studies/apex-tree-company" className={styles.link}>
                                View Full Report →
                            </Link>
                        </div>
                    </div>

                    {/* Placeholder for future cards to show the grid structure */}
                    <div className={`${styles.card} ${styles.cardPlaceholder}`}>
                        <div className={`${styles.cardImage} ${styles.cardImagePlaceholder}`}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.industryTag}>Coming Soon</div>
                            <h2 className={`${styles.cardTitle} ${styles.cardTitlePlaceholder}`}>Moore County Project</h2>
                            <div className={`${styles.cardStats} ${styles.cardStatsPlaceholder}`}>
                                <div className={styles.stat}>
                                    <span className={`${styles.statValue} ${styles.statPlaceholder}`}>---</span>
                                    <span className={styles.statLabel}>ROI</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={`${styles.statValue} ${styles.statPlaceholder}`}>---</span>
                                    <span className={styles.statLabel}>Status</span>
                                </div>
                            </div>
                            <span className={`${styles.link} ${styles.linkPlaceholder}`}>Locked</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
