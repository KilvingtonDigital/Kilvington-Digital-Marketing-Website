
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "Custom Web Development & Next.js Architecture | Kilvington",
    description: "Mobile-first, high-performance websites built on Next.js. We engineer conversion-focused digital infrastructure that dominates Google Core Web Vitals.",
};

import ServiceSchema from '../../../components/ServiceSchema';
import FAQSchema from '../../../components/FAQSchema';

export default function WebDevPage() {
    const faqs = [
        {
            question: "Why do you use Next.js instead of WordPress?",
            answer: "Speed and Security. WordPress is bloated, prone to hacks, and slow on mobile. Next.js is the same technology used by Netflix, Uber, and TikTok. It loads instantly and is virtually unhackable."
        },
        {
            question: "Do I own the website code?",
            answer: "Yes. Unlike agencies that 'lease' you a site, you own your code, your domain, and your content 100%. We believe in building assets for you, not trapping you."
        },
        {
            question: "Will I look good on mobile?",
            answer: "We design 'Mobile First'. Since 80% of trade service traffic is mobile, we optimize the phone experience before we even touch the desktop version."
        }
    ];

    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="Web Development"
                description="High-performance, conversion-engineered websites for service businesses. Not just pretty designs—digital sales machines."
                url="https://kilvington.digital/services/web-development"
                serviceType="Web Design and Development"
            />
            <FAQSchema faqs={faqs} />

            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>TACTICAL SERVICE</span>
                    <h1 className={styles.title}>CONVERSION ARCHITECTURE</h1>
                    <p className={styles.subtitle}>
                        We don&apos;t build &quot;brochure&quot; websites. We build digital sales machines engineered to turn traffic into booked appointments.
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
                            <ul className={styles.checklist}>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    Mobile-First Interfaces
                                </li>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    Instant Load Times
                                </li>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    SEO-Baked-In (Not an afterthought)
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/high-performance-web-development-conversion-design.png"
                                alt="High Performance Web Development Conversion Design"
                                width={600}
                                height={400}
                                className={styles.serviceIntroImage}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive: Technical Specs */}
            <section className={styles.deepDiveSection}>
                <div className={`container ${styles.deepDiveContent}`}>
                    <h2 className={styles.deepDiveHeading}>TECHNICAL SPECIFICATIONS</h2>

                    <h3 className={styles.deepDiveSubHeading}>01 // REACT SERVER COMPONENTS (RSC)</h3>
                    <p className={styles.deepDiveText}>
                        We pre-render your content on the server before it ever reaches the user&apos;s phone.
                        This eliminates the &quot;loading spin&quot; and ensures Google indexes your keywords instantly.
                    </p>

                    <h3 className={styles.deepDiveSubHeading}>02 // VERCEL EDGE NETWORK</h3>
                    <p className={styles.deepDiveText}>
                        Your site is deployed to a Global Content Delivery Network (CDN). Whether your customer is in Raleigh or Charlotte,
                        the site loads from a server physically close to them, reducing latency to near zero.
                    </p>

                    <h3 className={styles.deepDiveSubHeading}>03 // SEMANTIC HTML5 STRUCTURE</h3>
                    <p className={styles.deepDiveText}>
                        We code with strict semantic standards (`&lt;article&gt;`, `&lt;nav&gt;`, `&lt;aside&gt;`).
                        This helps AI agents (like ChatGPT) parse your site structure and understand exactly what services you offer without guessing.
                    </p>
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
        </div>
    );
}
