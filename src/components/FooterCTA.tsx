'use client';

import Link from 'next/link';
import styles from '../app/page.module.css'; // Adjust path if needed

export default function FooterCTA() {
    return (
        <>
            <section id="contact" className={`section ${styles.footerCta}`}>
                <div className="container">
                    <h2 className={styles.footerHeading}>READY FOR REAL RESULTS?</h2>
                    <p className={styles.footerText}>
                        Check availability for your industry and location. We only accept one partner per territory.
                    </p>
                    <a
                        href="/territory-check"
                        className={`btn ${styles.ctaButton}`}
                    >
                        SECURE YOUR TERRITORY
                    </a>
                </div>
            </section>
        </>
    );
}
