
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../core-service.module.css';

export const metadata: Metadata = {
    title: "Social Media Management | Kilvington Digital Marketing",
    description: "Build local authority and community trust. We turn your social profiles into proof of competence.",
};

import ServiceSchema from '../../../components/ServiceSchema';

export default function SocialMediaPage() {
    return (
        <div className="page-wrapper">
            <ServiceSchema
                name="Social Media Management"
                description="Build local authority and community trust. We turn your social profiles into proof of competence."
                url="https://kilvington.digital/services/social-media"
                serviceType="Social Media Marketing"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>TACTICAL SERVICE</span>
                    <h1 className={styles.title}>COMMUNITY AUTHORITY</h1>
                    <p className={styles.subtitle}>
                        Posting for the sake of posting is useless. We build social proof strategies that validate your expertise to potential customers.
                    </p>
                    <Link href="/contact" className="btn btn-primary">BUILD YOUR BRAND</Link>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introHeading}>BE THE LOCAL CELEBRITY.</h2>
                            <p className={styles.introText}>
                                When a neighbor asks &quot;Who did your fence?&quot;, you want them to tag your page.
                                We manage your presence to ensure when they look you up, they see a thriving, active, and professional business.
                            </p>
                            <ul className={styles.checklist}>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    Project Showcases (Before/Afters)
                                </li>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    Community Engagement
                                </li>
                                <li className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    Review Sharing
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/social-media-branding-trust-authority-building.png"
                                alt="Social Media Branding Trust Authority Building"
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
