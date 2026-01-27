'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';
import TerritoryModal from './TerritoryModal';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
        setIsMobileMenuOpen(false); // Close mobile menu if open
    };

    return (
        <>
            <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        KILVINGTON DIGITAL<span className={styles.dot}>.</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className={styles.links}>
                        <Link
                            href="/industries"
                            className={`${styles.link} ${pathname === '/industries' ? styles.activeLink : ''}`}
                        >
                            Industries
                        </Link>
                        <Link
                            href="/services"
                            className={`${styles.link} ${pathname === '/services' ? styles.activeLink : ''}`}
                        >
                            Capabilities
                        </Link>
                        <Link
                            href="/case-studies"
                            className={`${styles.link} ${pathname === '/case-studies' ? styles.activeLink : ''}`}
                        >
                            Case Studies
                        </Link>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className={styles.cta}
                        >
                            Territory Check
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <Link href="/" className={styles.mobileLink} onClick={toggleMobileMenu}>
                    HOME
                </Link>
                <Link href="/services" className={styles.mobileLink} onClick={toggleMobileMenu}>
                    CAPABILITIES
                </Link>
                <Link href="/industries" className={styles.mobileLink} onClick={toggleMobileMenu}>
                    INDUSTRIES
                </Link>
                <Link href="/case-studies" className={styles.mobileLink} onClick={toggleMobileMenu}>
                    CASE STUDIES
                </Link>
                <Link href="/about" className={styles.mobileLink} onClick={toggleMobileMenu}>
                    ABOUT
                </Link>
                <button
                    onClick={openModal}
                    className={styles.mobileLink}
                    style={{
                        color: 'var(--c-green-acid)',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        padding: 0
                    }}
                >
                    CHECK AVAILABILITY
                </button>
            </div>

            <TerritoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
