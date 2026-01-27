
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "Technical SEO Services & Infrastructure | Kilvington Digital",
    description: "Dominate search rankings with our advanced Technical SEO Infrastructure. We engineer site architecture, schema markup, and speed for maximum visibility in Google and AI search engines.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function SEOInfrastructurePage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="SEO Infrastructure"
                description="Technical SEO services engineered for domination. We build the infrastructure that ranks #1."
                url="https://kilvington.digital/services/seo-infrastructure"
                serviceType="Technical SEO Service"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>CORE ENGINE: MODULE 01</span>
                    <h1 className={styles.title}>SEO INFRASTRUCTURE</h1>
                    <p className={styles.subtitle}>
                        Visibility is not an accident. It is an engineered outcome.
                        We build the technical foundation that forces search engines to rank you first.
                    </p>
                    <Link href="/contact" className="btn btn-primary">AUDIT MY INFRASTRUCTURE</Link>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>BUILT FOR SPEED. <br />OPTIMIZED FOR DOMINANCE.</h2>
                            <p className={styles.introText}>
                                Most agencies sell &quot;SEO&quot; as a monthly mystery box. We sell infrastructure.
                                Before content is king, the kingdom must be built.
                            </p>
                            <p className={styles.introText}>
                                Our approach focuses on technical perfection: schema markup, site architecture,
                                and lightning-fast load times that signal authority to Google&apos;s algorithms.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/images/seo-infrastructure-technical-search-optimization.png"
                                alt="SEO Infrastructure Technical Search Optimization"
                                width={500}
                                height={300}
                                className={`${styles.introImage} ${styles.seoImage}`}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>TECHNICAL FOUNDATION</h3>
                            <p className={styles.featureDesc}>
                                Clean code, proper semantic HTML5, and optimized asset delivery.
                                We fix the errors that hold other sites back.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>LOCAL DOMINANCE</h3>
                            <p className={styles.featureDesc}>
                                Hyper-local schema markup that tells Google exactly where you serve.
                                own your backyard.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>SPEED OPTIMIZATION</h3>
                            <p className={styles.featureDesc}>
                                Sub-second load times. We optimize specifically for Google&apos;s Core Web Vitals to ensure you pass every test.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Matters */}
            <section className={styles.benefitSection}>
                <div className="container">
                    <h2 className={`${styles.introHeading} ${styles.centeredHeading}`}>WHY INFRASTRUCTURE MATTERS</h2>
                    <ul className={styles.benefitList}>
                        <li className={styles.benefitItem}>Increases crawling budget from search engines</li>
                        <li className={styles.benefitItem}>Reduces bounce rates with instant loading</li>
                        <li className={styles.benefitItem}>Future-proofs your site for algorithm updates</li>
                        <li className={styles.benefitItem}>Provides the base for Content & AI scaling</li>
                    </ul>
                </div>
            </section>

            {/* Deep Dive: Technical Specifications */}
            <section className={styles.deepDiveSection}>
                <div className="container">
                    <h2 className={styles.deepDiveHeading}>THE MECHANICS OF DIGITAL DOMINANCE</h2>
                    <div className={styles.deepDiveContent}>
                        <h3 className={styles.deepDiveSubHeading}>CORE WEB VITALS & SPEED ARCHITECTURE</h3>
                        <p className={styles.deepDiveText}>
                            Google has explicitly stated that page experience is a ranking factor. Our infrastructure is built on Next.js, a React framework that allows for server-side rendering (SSR) and static site generation (SSG). This means your site loads instantly, passing Core Web Vitals with green scores across the board. We eliminate &quot;render-blocking resources&quot; and optimize First Contentful Paint (FCP) to under 1.2 seconds.
                        </p>

                        <h3 className={styles.deepDiveSubHeading}>SCHEMA MARKUP & SEMANTIC HTML5</h3>
                        <p className={styles.deepDiveText}>
                            We don&apos;t just write text; we write code that machines understand. We implement extensive JSON-LD Schema markup (LocalBusiness, Service, Review, FAQPage, Organization) to feed Google&apos;s Knowledge Graph directly. This &quot;spoon-feeding&quot; strategy ensures rich snippets in search results—star ratings, pricing tables, and FAQ drop-downs that steal click-through rate (CTR) from competitors.
                        </p>

                        <h3 className={styles.deepDiveSubHeading}>AUTHORITY & LINK VELOCITY</h3>
                        <p className={styles.deepDiveText}>
                            Ranking requiring Authority. We audit your backlink profile and disavow toxic assets while building a clean, topical internal linking structure. By clustering content around core &quot;pillar&quot; pages (like this one), we signal to search algorithms that you are the topical authority for your specific industry vertical in your specific territory.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.introHeading}>IS YOUR FOUNDATION CRACKED?</h2>
                    <p className={styles.subtitle}>
                        We only accept one partner per industry, per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
