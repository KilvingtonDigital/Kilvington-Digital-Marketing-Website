
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "GEO (Generative Engine Optimization) Services | Kilvington Digital",
    description: "Future-proof your business with Generative Engine Optimization (GEO). We structure your digital presence to be recommended by ChatGPT, Claude, Perplexity, and AI Search Engines.",
};

import ServiceSchema from '../../../components/ServiceSchema';
import FAQSchema from '../../../components/FAQSchema';

export default function GEOPage() {
    const faqs = [
        {
            question: "How do I rank on ChatGPT and Perplexity?",
            answer: "AI models rank businesses based on 'Entity Authority' and structured data. We optimize your digital footprint (citations, schema, reviews) so these models trust your business as a factual answer."
        },
        {
            question: "What is the difference between SEO and GEO?",
            answer: "SEO targets traditional search engines like Google (blue links). GEO (Generative Engine Optimization) targets AI models that provide direct answers. You need both to dominate the modern search landscape."
        },
        {
            question: "Is GEO necessary for local businesses?",
            answer: "Yes. Voice search (Siri, Alexa) and AI tools are rapidly replacing traditional search for queries like 'best plumber near me'. Being the recommended entity is critical for future revenue."
        }
    ];

    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="GEO - Generative Engine Optimization"
                description="Optimize your business for the future of search. We structure data for ChatGPT, Claude, and AI Agents."
                url="https://kilvington.digital/services/geo-generative-optimization"
                serviceType="Search Engine Optimization Service"
            />
            <FAQSchema faqs={faqs} />
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

            {/* Deep Dive: Technical Specifications */}
            <section className={styles.deepDiveSection}>
                <div className="container">
                    <h2 className={styles.deepDiveHeading}>ENGINEERING FOR THE AI ERA</h2>
                    <div className={styles.deepDiveContent}>
                        <h3 className={styles.deepDiveSubHeading}>OPTIMIZING FOR LARGE LANGUAGE MODELS (LLMs)</h3>
                        <p className={styles.deepDiveText}>
                            Generative Engine Optimization (GEO) requires a fundamental shift from keyword stuffing to &quot;Entity Optimization.&quot; LLMs like GPT-4 and Claude do not just match strings of text; they build a model of the world. We ensure your business exists as a distinct, verified entity in that world. We do this by cross-referencing your NAP (Name, Address, Phone) data across high-authority data aggregators that train these models.
                        </p>

                        <h3 className={styles.deepDiveSubHeading}>THE KNOWLEDGE GRAPH ADVANTAGE</h3>
                        <p className={styles.deepDiveText}>
                            AI search engines (Perplexity, Google SGE) prioritize direct answers. To be the answer, your content must be structured as facts. We convert your service pages into structured knowledge graphs. When a user asks, &quot;Who is the most reliable roofer in Raleigh?&quot;, the AI references the confidence score of your entity. Our detailed service schemas, client testimonials, and case study data build that confidence score.
                        </p>

                        <h3 className={styles.deepDiveSubHeading}>CITATION & SENTIMENT VELOCITY</h3>
                        <p className={styles.deepDiveText}>
                            LLMs are sensitive to sentiment. A high volume of positive, context-rich reviews across multiple platforms (Google, Facebook, BBQ, Industry Directories) signals to the AI that your entity is a &quot;safe&quot; recommendation. We automate the collection of these signals to ensure your brand sentiment remains overwhelmingly positive in the data lake.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className={`container ${styles.faqContainer}`}>
                    <h2 className={styles.faqHeading}>COMMON QUESTIONS</h2>
                    <div className={styles.faqList}>
                        {faqs.map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                                <p className={styles.faqAnswer}>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
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
