
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "AI Revenue Agents (AIO) | Kilvington Digital Marketing",
    description: "Automate your sales pipeline with AI Revenue Agents. 24/7 lead qualification and instant response.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function AIOPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="AI Revenue Agents (AIO)"
                description="Automate your sales pipeline with AI Revenue Agents. 24/7 lead qualification and instant response."
                url="https://kilvington.digital/services/ai-revenue-agents"
                serviceType="AI Automation"
            />
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
