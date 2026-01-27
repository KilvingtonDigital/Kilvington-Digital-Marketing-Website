
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "GEO - Generative Engine Optimization | Kilvington Digital Marketing",
    description: "Optimize your business for the future of search. We structure data for ChatGPT, Claude, and AI Agents.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function GEOPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="GEO - Generative Engine Optimization"
                description="Optimize your business for the future of search. We structure data for ChatGPT, Claude, and AI Agents."
                url="https://kilvington.digital/services/geo-generative-optimization"
                serviceType="Search Engine Optimization Service"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>CORE ENGINE: MODULE 02</span>
                    <h1 className={styles.title}>GENERATIVE ENGINE OPTIMIZATION (GEO)</h1>
                    <p className={styles.subtitle}>
                        The search bar is changing. Users are asking AI, not just Google.
                        We ensure you are the recommended answer.
                    </p>
                    <Link href="/contact" className="btn btn-primary">FUTURE-PROOF MY BRAND</Link>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>THE NEW SEO IS &quot;AI RECOMMENDATION&quot;</h2>
                            <p className={styles.introText}>
                                When a user asks ChatGPT, &quot;Who is the best tree service in Sanford?&quot;,
                                the AI doesn&apos;t just look at keywords. It looks for authority, sentiment,
                                and structured facts.
                            </p>
                            <p className={styles.introText}>
                                GEO is the process of optimizing your digital footprint so that Large Language Models (LLMs) trust your brand enough to cite it.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/images/geo-generative-ai-search-optimization-model.png"
                                alt="Geo Generative AI Search Optimization Model"
                                width={500}
                                height={300}
                                className={styles.serviceIntroImage}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>ENTITY AUTHORITY</h3>
                            <p className={styles.featureDesc}>
                                Establishing your brand as a known &quot;Entity&quot; in the knowledge graph.
                                Ensuring AI knows exactly who you are and what you do.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>STRUCTURED DATA LAYERS</h3>
                            <p className={styles.featureDesc}>
                                Feeding search engines JSON-LD data that clearly defines your services,
                                service area, and customer reviews in a language machines understand.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>CITATION CONSISTENCY</h3>
                            <p className={styles.featureDesc}>
                                Aligning your business facts across the entire web so there is zero ambiguity for the AI models.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Matters */}
            <section className={styles.benefitSection}>
                <div className="container">
                    <h2 className={`${styles.introHeading} ${styles.centeredHeading}`}>WHY GEO MATTERS</h2>
                    <ul className={styles.benefitList}>
                        <li className={styles.benefitItem}>Capture traffic from ChatGPT, Perplexity, and Gemini</li>
                        <li className={styles.benefitItem}>Prepare for Google&apos;s &quot;Search Generative Experience&quot; (SGE)</li>
                        <li className={styles.benefitItem}>Build trust that supersedes traditional keyword stuffing</li>
                        <li className={styles.benefitItem}>Dominate voice search (Siri, Alexa, Google Assistant)</li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.introHeading}>DON&apos;T GET LEFT BEHIND</h2>
                    <p className={styles.subtitle}>
                        We only accept one partner per industry, per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
