'use client';

import { useState } from 'react';
import styles from '../app/page.module.css'; // Adjust path if needed
import TerritoryModal from './TerritoryModal';

export default function FooterCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="contact" className={`section ${styles.footerCta}`}>
                <div className="container">
                    <h2 className={styles.footerHeading}>READY FOR REAL RESULTS?</h2>
                    <p className={styles.footerText}>
                        Check availability for your industry and location. We only accept one partner per territory.
                    </p>
                    <button
                        className={`btn ${styles.ctaButton}`}
                        onClick={() => setIsModalOpen(true)}
                    >
                        SECURE YOUR TERRITORY
                    </button>
                </div>
            </section>

            <TerritoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
