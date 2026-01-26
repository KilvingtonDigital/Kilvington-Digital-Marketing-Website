
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "Content Production | Kilvington Digital Marketing",
    description: "Professional video and photo assets that separate you from the 'Chuck in a Truck' competitors.",
};

export default function ContentProductionPage() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>TACTICAL SERVICE</span>
                    <h1 className={styles.title}>VISUAL DOMINANCE</h1>
                    <p className={styles.subtitle}>
                        In a visual world, the best looking business wins. We produce cinematic job-site content that builds immediate trust.
                    </p>
                    <Link href="/contact" className="btn btn-primary">UPGRADE YOUR IMAGE</Link>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>SHOW, DON'T TELL.</h2>
                            <p className={styles.introText}>
                                Homeowners are scared of hiring the wrong person.
                                High-quality video of your team, your trucks, and your finished work eliminates that fear instantly.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    Job Site Walkthroughs
                                </li>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    Drone / Aerial Videography
                                </li>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    Customer Testimonial Interviews
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/video-production-hero.png"
                                alt="Video Production Camera Gear"
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
