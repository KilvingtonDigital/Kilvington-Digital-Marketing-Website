
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "PPC & Paid Ads | Kilvington Digital Marketing",
    description: "Data-driven Google Ads and Local Services Ads (LSA) management. We stop the budget bleed and scale the winners.",
};

export default function PaidAdsPage() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>TACTICAL SERVICE</span>
                    <h1 className={styles.title}>PRECISION STRIKE ADS</h1>
                    <p className={styles.subtitle}>
                        Stop burning cash on clicks that don't convert. We manage high-intent campaigns that put your offer in front of buyers, not browsers.
                    </p>
                    <Link href="/contact" className="btn btn-primary">AUDIT YOUR AD ACCOUNT</Link>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>DOMINATE THE AUCTION.</h2>
                            <p className={styles.introText}>
                                Most agencies "set it and forget it". We monitor bids daily.
                                We specialize in Google Local Services Ads (LSA) - getting you that coveted "Google Guaranteed" badge.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    Google LSA & Guarantee Setup
                                </li>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    High-Intent Search Campaigns
                                </li>
                                <li style={{ marginBottom: '15px', color: '#ccc', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--c-green-acid)', marginRight: '10px' }}>✓</span>
                                    Retargeting (The "Follow Up" Ad)
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/ppc-hero.png"
                                alt="PPC Data Visualization"
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
