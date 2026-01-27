
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "Web Development | Kilvington Digital Marketing",
    description: "High-performance, conversion-engineered websites for service businesses. Not just pretty designs—digital sales machines.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function WebDevPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="Web Development"
                description="High-performance, conversion-engineered websites for service businesses. Not just pretty designs—digital sales machines."
                url="https://kilvington.digital/services/web-development"
                serviceType="Web Design and Development"
            />
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
        </div>
    );
}
