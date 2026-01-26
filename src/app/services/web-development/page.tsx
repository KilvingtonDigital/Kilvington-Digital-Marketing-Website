
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "Web Development | Kilvington Digital Marketing",
    description: "High-performance, conversion-engineered websites for service businesses. Not just pretty designs—digital sales machines.",
};

export default function WebDevPage() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>TACTICAL SERVICE</span>
                    <h1 className={styles.title}>CONVERSION ARCHITECTURE</h1>
                    <p className={styles.subtitle}>
                        We don't build "brochure" websites. We build digital sales machines engineered to turn traffic into booked appointments.
                    </p>
                    <Link href="/contact" className="btn btn-primary">START YOUR BUILD</Link>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>SPEED KILLS (THE COMPETITION).</h2>
                            <p className={styles.introText}>
                                A slow site is a broken site. Our builds consistently score 95+ on Google PageSpeed Insights.
                                We use Next.js (the same tech as Netflix and TikTok) to ensure your site loads instantly on mobile.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    Mobile-First Interfaces
                                </li>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    Instant Load Times
                                </li>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    SEO-Baked-In (Not an afterthought)
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/web-dev-hero.png"
                                alt="Web Development Architecture"
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
