
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "Content Production | Kilvington Digital Marketing",
    description: "Professional video and photo assets that separate you from the 'Chuck in a Truck' competitors.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function ContentProductionPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="Content Production"
                description="Professional video and photo assets that separate you from the &apos;Chuck in a Truck&apos; competitors."
                url="https://kilvington.digital/services/content-production"
                serviceType="Video Production Service"
            />
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
                            <h2 className={styles.introHeading}>SHOW, DON&apos;T TELL.</h2>
                            <p className={styles.introText}>
                                Homeowners are scared of hiring the wrong person.
                                High-quality video of your team, your trucks, and your finished work eliminates that fear instantly.
                            </p>
                            <ul className={styles.checklist}>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    Job Site Walkthroughs
                                </li>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    Drone / Aerial Videography
                                </li>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    Customer Testimonial Interviews
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/cinematic-video-production-job-site-content.png"
                                alt="Cinematic Video Production Job Site Content"
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
