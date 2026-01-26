
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandColumn}>
                    <Link href="/" className={styles.logo}>
                        KILVINGTON DIGITAL<span style={{ color: 'var(--c-green-acid)' }}>.</span>
                    </Link>
                    <p className={styles.brandDesc}>
                        Exclusive digital infrastructure for growth-focused businesses. One partner per territory.
                    </p>
                </div>

                <div className={styles.linksColumn}>
                    <div className={styles.linkGroup}>
                        <div className={styles.linkHeader}>Menu</div>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/services" className={styles.link}>Capabilities</Link>
                        <Link href="/industries" className={styles.link}>Industries</Link>
                        <Link href="/case-studies" className={styles.link}>Case Studies</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                    </div>

                    <div className={styles.linkGroup}>
                        <div className={styles.linkHeader}>Legal</div>
                        <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
                        <Link href="/terms" className={styles.link}>Terms of Service</Link>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div>
                    &copy; {new Date().getFullYear()} Kilvington Digital Marketing. All Rights Reserved.
                </div>
                <div>
                    Built for ROI.
                </div>
            </div>
        </footer>
    );
}
