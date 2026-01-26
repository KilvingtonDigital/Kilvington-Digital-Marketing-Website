
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "Social Media Management | Kilvington Digital Marketing",
    description: "Build local authority and community trust. We turn your social profiles into proof of competence.",
};

export default function SocialMediaPage() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>TACTICAL SERVICE</span>
                    <h1 className={styles.title}>COMMUNITY AUTHORITY</h1>
                    <p className={styles.subtitle}>
                        Posting for the sake of posting is useless. We build social proof strategies that validate your expertise to potential customers.
                    </p>
                    <Link href="/contact" className="btn btn-primary">BUILD YOUR BRAND</Link>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>BE THE LOCAL CELEBRITY.</h2>
                            <p className={styles.introText}>
                                When a neighbor asks "Who did your fence?", you want them to tag your page.
                                We manage your presence to ensure when they look you up, they see a thriving, active, and professional business.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    Project Showcases (Before/Afters)
                                </li>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    Community Engagement
                                </li>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    Review Sharing
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/social-media-hero.png"
                                alt="Social Media Network Visualization"
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
                </div>
            </section>
        </div>
    );
}
