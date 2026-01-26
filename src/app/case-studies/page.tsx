import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './case-studies.module.css';

export const metadata: Metadata = {
    title: "Case Studies | Results & ROI",
    description: "Real-world examples of how Kilvington Digital Marketing generates exclusive dominance for local service businesses.",
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
                        <div className={styles.cardImage}>
                            {/* Placeholder for image, or we could use next/image if we had one. 
                                Using text for now to keep it clean without broken images. 
                            */}
                            <span style={{ color: '#444', fontWeight: 'bold' }}>APEX VISUAL</span>
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.industryTag}>Tree Service / Arborist</div>
                            <h2 className={styles.cardTitle}>Apex Tree Company</h2>

                            <div className={styles.cardStats}>
                                <div className={styles.stat}>
                                    <span className={styles.statValue} style={{ color: 'var(--c-green-acid)' }}>1,600%</span>
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
                    <div className={styles.card} style={{ opacity: 0.3, borderColor: '#222' }}>
                        <div className={styles.cardImage} style={{ background: '#111' }}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.industryTag}>Coming Soon</div>
                            <h2 className={styles.cardTitle} style={{ color: '#555' }}>Harnett County Project</h2>
                            <div className={styles.cardStats} style={{ borderColor: '#222' }}>
                                <div className={styles.stat}>
                                    <span className={styles.statValue} style={{ color: '#555' }}>---</span>
                                    <span className={styles.statLabel}>ROI</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.statValue} style={{ color: '#555' }}>---</span>
                                    <span className={styles.statLabel}>Status</span>
                                </div>
                            </div>
                            <span className={styles.link} style={{ color: '#555' }}>Locked</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
