import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './services.module.css';

export const metadata: Metadata = {
    title: "Services | Kilvington Digital Marketing",
    description: "Advanced SEO, Generative Engine Optimization (GEO), and AI-Marketing solutions for North Carolina service businesses.",
};

export default function Services() {
    return (
        <div className="page-wrapper">
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.heroTitle}>DIGITAL DOMINANCE SYSTEM</h1>
                    <p className={styles.heroSubtitle}>
                        Our proprietary &quot;Core Engine&quot; methodology ensures you own the digital space in your territory.
                        From traditional search to AI-generated answers, we cover every angle.
                    </p>
                </div>
            </section>

            {/* The Core Engine */}
            <section className={`section ${styles.coreSection}`}>
                <div className="container">
                    <h2 className={styles.sectionHeading}>THE CORE REVENUE ENGINE</h2>
                    <div className={styles.coreGrid}>
                        <Link href="/services/seo-infrastructure" className={styles.coreCard} style={{ textDecoration: 'none' }}>
                            <div className={styles.coreNumber}>01</div>
                            <h3 className={styles.coreTitle}>SEO (SEARCH ENGINE OPTIMIZATION)</h3>
                            <p className={styles.coreText}>
                                The foundation of visibility. We engineer your site structure, content, and authority to rank #1 for high-intent keywords like &quot;Tree Service Apex NC&quot; or &quot;Emergency Plumber Raleigh&quot;.
                            </p>
                            <span style={{ color: 'var(--c-green-acid)', fontSize: '0.9rem', marginTop: '15px', display: 'block' }}>EXPLORE INFRASTRUCTURE &rarr;</span>
                        </Link>
                        <Link href="/services/geo-generative-optimization" className={styles.coreCard} style={{ textDecoration: 'none' }}>
                            <div className={styles.coreNumber}>02</div>
                            <h3 className={styles.coreTitle}>GEO (GENERATIVE ENGINE OPTIMIZATION)</h3>
                            <p className={styles.coreText}>
                                The future of search. We structure your data so AI models (ChatGPT, Gemini, Claude) recommend YOU as the primary answer when users ask for service providers.
                            </p>
                            <span style={{ color: 'var(--c-green-acid)', fontSize: '0.9rem', marginTop: '15px', display: 'block' }}>RIDE THE WAVE &rarr;</span>
                        </Link>
                        <Link href="/services/ai-revenue-agents" className={styles.coreCard} style={{ textDecoration: 'none' }}>
                            <div className={styles.coreNumber}>03</div>
                            <h3 className={styles.coreTitle}>AIO (AI OPTIMIZATION)</h3>
                            <p className={styles.coreText}>
                                Internal efficiency. We deploy AI agents to handle lead intake, qualification, and follow-up, ensuring no missed calls and instant response times.
                            </p>
                            <span style={{ color: 'var(--c-green-acid)', fontSize: '0.9rem', marginTop: '15px', display: 'block' }}>AUTOMATE REVENUE &rarr;</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Tactical Arsenal */}
            <section className={`section ${styles.arsenalSection}`}>
                <div className="container">
                    <h2 className={`${styles.sectionHeading} ${styles.blackText}`}>STRATEGIC CAPABILITIES</h2>
                    <p className={`${styles.sectionSubHeading} ${styles.blackText}`}>
                        Comprehensive managed services designed to amplify reach and maximize retention.
                    </p>

                    <div className={styles.arsenalGrid}>
                        {/* Web Dev */}
                        <Link href="/services/web-development" className={styles.arsenalCard} style={{ textDecoration: 'none', display: 'block' }}>
                            <div className={styles.arsenalIcon}>⬢</div>
                            <h4 className={styles.arsenalTitle}>WEB DEVELOPMENT</h4>
                            <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '10px' }}>High-performance, conversion-engineered sites.</p>
                        </Link>

                        {/* PPC */}
                        <Link href="/services/paid-advertising" className={styles.arsenalCard} style={{ textDecoration: 'none', display: 'block' }}>
                            <div className={styles.arsenalIcon}>⬢</div>
                            <h4 className={styles.arsenalTitle}>PAID ADS (PPC)</h4>
                            <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '10px' }}>Google LSA, Search, & Social Ad Management.</p>
                        </Link>

                        {/* Social Media */}
                        <Link href="/services/social-media" className={styles.arsenalCard} style={{ textDecoration: 'none', display: 'block' }}>
                            <div className={styles.arsenalIcon}>⬢</div>
                            <h4 className={styles.arsenalTitle}>SOCIAL MEDIA</h4>
                            <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '10px' }}>Authority building and community engagement.</p>
                        </Link>

                        {/* Email */}
                        <Link href="/services/email-automation" className={styles.arsenalCard} style={{ textDecoration: 'none', display: 'block' }}>
                            <div className={styles.arsenalIcon}>⬢</div>
                            <h4 className={styles.arsenalTitle}>EMAIL AUTOMATION</h4>
                            <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '10px' }}>Nurture sequencies that turn leads into revenue.</p>
                        </Link>

                        {/* Video */}
                        <Link href="/services/content-production" className={styles.arsenalCard} style={{ textDecoration: 'none', display: 'block' }}>
                            <div className={styles.arsenalIcon}>⬢</div>
                            <h4 className={styles.arsenalTitle}>CONTENT PRODUCTION</h4>
                            <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '10px' }}>Cinematic video & photo assets for your brand.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Ethics Statement */}
            <section style={{ padding: '80px 0', borderTop: '1px solid #222', background: '#050505' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 className={styles.sectionHeading} style={{ marginBottom: '20px', color: 'var(--c-white)' }}>WHITE HAT INTEGRITY</h2>
                        <p style={{ color: '#aaa', fontSize: '1.2rem', marginBottom: '40px' }}>
                            We build digital dominance on a foundation of truth.
                        </p>
                        <div style={{ textAlign: 'left', background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '4px', borderLeft: '3px solid var(--c-green-acid)' }}>
                            <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '20px' }}>
                                <strong style={{ color: '#fff' }}>Reviews & Reputation:</strong> We do not verify false reviews or falsify capabilities. We use technology to make it easier for your actual customers to share their real experiences. We provide templates to help them articulate their satisfaction, but the voice remains theirs.
                            </p>
                            <p style={{ color: '#ccc', lineHeight: '1.6', margin: 0 }}>
                                <strong style={{ color: '#fff' }}>Sustainable Rankings:</strong> We avoid &quot;churn and burn&quot; spam tactics. We build infrastructure that adheres to search engine guidelines, ensuring your digital asset appreciates in value over time without risk of penalty.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.ctaSection}`}>
                <div className="container">
                    <h2 className={styles.ctaHeading}>DEPLOY THE SYSTEM</h2>
                    <p className={styles.ctaText}>
                        We only work with one partner per industry, per territory. Secure yours before your competitor does.
                    </p>
                    <Link href="/contact" className="btn btn-primary">CHECK AVAILABILITY</Link>
                </div>
            </section>
        </div>
    );
}
