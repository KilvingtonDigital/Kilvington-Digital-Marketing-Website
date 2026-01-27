
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "AIO Services & AI Revenue Agents | Kilvington Digital",
    description: "Maximize conversion with AIO (Artificial Intelligence Optimization). Deploy 24/7 AI Revenue Agents for instant lead qualification, booking automation, and sales pipeline management.",
};

import ServiceSchema from '../../../components/ServiceSchema';
import FAQSchema from '../../../components/FAQSchema';

export default function AIOPage() {
    const faqs = [
        {
            question: "Are AI Agents the same as Chatbots?",
            answer: "No. Chatbots follow simple scripts. AI Revenue Agents use Natural Language Understanding (NLU) to hold complex conversations, overcome objections, and integrate directly with your CRM/Calendar to close deals."
        },
        {
            question: "How does AIO increase revenue?",
            answer: "AIO eliminates 'Speed to Lead' latency. By engaging leads instantly (within seconds) 24/7, you capture high-intent customers before they contact your competitors, drastically increasing conversion rates."
        },
        {
            question: "Does the AI sound robotic?",
            answer: "No. Our agents are trained on your specific brand voice and use natural phrasing. Most customers do not realize they are speaking with an AI until the booking is confirmed."
        }
    ];

    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="AI Revenue Agents (AIO)"
                description="Automate your sales pipeline with AI Revenue Agents. 24/7 lead qualification and instant response."
                url="https://kilvington.digital/services/ai-revenue-agents"
                serviceType="AI Automation"
            />
            <FAQSchema faqs={faqs} />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>CORE ENGINE: MODULE 03</span>
                    <h1 className={styles.title}>AI REVENUE AGENTS (AIO)</h1>
                    <p className={styles.subtitle}>
                        Traffic is useless if you don&apos;t convert it.
                        We deploy intelligent agents to handle every lead, instantly, 24/7.
                    </p>
                    <Link href="/contact" className="btn btn-primary">DEPLOY AGENTS</Link>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>THE &quot;SPEED TO LEAD&quot; REVOLUTION</h2>
                            <p className={styles.introText}>
                                If you don&apos;t answer a lead in 5 minutes, your chances of closing drop by 80%.
                                You are busy running a business; you can&apos;t stare at your phone all day.
                            </p>
                            <p className={styles.introText}>
                                Our AI Revenue Agents bridge the gap. They engage visitors, qualify them,
                                and book appointments directly into your calendar without you lifting a finger.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/images/ai-revenue-agent-booking-automation-interface.png"
                                alt="AI Revenue Agent Booking Automation Interface"
                                width={500}
                                height={300}
                                className={styles.serviceIntroImage}
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>INSTANT RESPONSE</h3>
                            <p className={styles.featureDesc}>
                                SMS, Email, and Web Chat response in under 10 seconds.
                                Capture the lead while they are still thinking about you.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>INTELLIGENT QUALIFICATION</h3>
                            <p className={styles.featureDesc}>
                                Agents ask the questions that matter: &quot;What is your budget?&quot;, &quot;When do you need this done?&quot;.
                                Stop wasting time on tire-kickers.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>CRM INTEGRATION</h3>
                            <p className={styles.featureDesc}>
                                All data flows directly into your CRM. You get a clean list of qualified appointments, not raw leads.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Matters */}
            <section className={styles.benefitSection}>
                <div className="container">
                    <h2 className={`${styles.introHeading} ${styles.centeredHeading}`}>WHY AIO MATTERS</h2>
                    <ul className={styles.benefitList}>
                        <li className={styles.benefitItem}>Eliminate &quot;Speed to Lead&quot; anxiety</li>
                        <li className={styles.benefitItem}>Reduce overhead (no need for a full-time receptionist)</li>
                        <li className={styles.benefitItem}>Increase conversion rates on existing traffic</li>
                        <li className={styles.benefitItem}>Operate 24/7/365 without breaks</li>
                    </ul>
                </div>
            </section>

            {/* Deep Dive: Technical Specifications */}
            <section className={styles.deepDiveSection}>
                <div className="container">
                    <h2 className={styles.deepDiveHeading}>ARCHITECTING AUTOMATED REVENUE</h2>
                    <div className={styles.deepDiveContent}>
                        <h3 className={styles.deepDiveSubHeading}>BEYOND CHATBOTS: AUTONOMOUS AGENTS</h3>
                        <p className={styles.deepDiveText}>
                            Traditional chatbots are decision trees (If X, then Y). They frustrate users. Our AI Revenue Agents use Natural Language Understanding (NLU) to hold actual conversations. They understand context, nuance, and intent. Whether a lead asks about pricing, availability, or specific technical details, the agent responds intelligently, referencing your specific knowledge base.
                        </p>

                        <h3 className={styles.deepDiveSubHeading}>FULL-CYCLE CRM INTEGRATION</h3>
                        <p className={styles.deepDiveText}>
                            AIO isn&apos;t just about chatting; it&apos;s about data hygiene. Every interaction is transcribed, summarized, and injected into your CRM (Salesforce, HubSpot, GoHighLevel). The agent tags the lead based on intent (e.g., &quot;High Ticket - Ready to Buy&quot; vs &quot;Information Seeking&quot;), prioritizing your sales team&apos;s time for the leads that actually convert.
                        </p>

                        <h3 className={styles.deepDiveSubHeading}>THE 24/7 CONVERSION LOOP</h3>
                        <p className={styles.deepDiveText}>
                            The modern consumer expects instant gratification. By removing human latency from the initial touchpoint, we drastically increase conversion rates. Your business generates revenue while you sleep, literally. The agent handles the booking, sends the calendar invite, and even collects the deposit if required, creating a frictionless path to purchase.
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
                    <h2 className={styles.introHeading}>AUTOMATE YOUR GROWTH</h2>
                    <p className={styles.subtitle}>
                        We only accept one partner per industry, per territory.
                    </p>
                    <Link href="/contact" className="btn btn-primary">SECURE YOUR TERRITORY</Link>
                </div>
            </section>
        </div>
    );
}
