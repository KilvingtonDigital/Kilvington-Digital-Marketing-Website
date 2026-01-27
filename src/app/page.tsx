import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import RoiChart from '../components/RoiChart';
import FooterCTA from '../components/FooterCTA';
import Marquee from '../components/Marquee';

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/kilvington-digital-marketing-neon-cyberpunk-background.png"
            alt="Kilvington Digital Marketing Neon Cyberpunk Background"
            fill
            className={styles.heroImage}
            priority
          />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroLogoWrapper}>
            <div className={styles.heroLogo}>
              <Image
                src="/images/kilvington-digital-marketing-logo-white.png"
                alt="Kilvington Digital Marketing Logo"
                width={400}
                height={160}
                className={styles.heroLogoImage}
              />
            </div>
          </div>
          <h1 className={styles.heroTitle}>
            <span className={styles.whiteText}>EXCLUSIVE FOCUS.</span> <br />
            <span className={styles.accentText}>MAXIMUM RESULTS.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We engineer high-performance <strong>SEO, GEO, and AI Revenue systems</strong> for exclusively selected partners. Just real, measurable results.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className="btn btn-primary">Calculate Your ROI</Link>
            <Link href="/about" className="btn btn-secondary">Our Philosophy</Link>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          'Establish Digital Dominance',
          'Secure Your Territory',
          'ROI Driven Systems',
          'AI Revenue Agents Online',
          'Exclusive Partnership Model'
        ]}
        speed={40}
      />

      {/* Owner Trust Section */}
      <section className={`section ${styles.ownerSection}`}>
        <div className={`container ${styles.ownerGrid}`}>
          <div className={styles.ownerImageWrapper}>
            <Image
              src="/images/ricky-kilvington-digital-marketing-founder.png"
              alt="Ricky Whittaker Digital Marketing Founder"
              fill
              className={styles.ownerImage}
            />
          </div>
          <div>
            <h2 className={`${styles.whiteText} ${styles.headingLg}`}>STRATEGIST FIRST. <br />DESIGNER SECOND.</h2>
            <blockquote className={styles.ownerQuote}>
              &quot;ROI is the only metric that matters. It isn&apos;t just about brand awareness; it&apos;s about converting business leads into strong revenue.&quot;
            </blockquote>
            <p className={`${styles.textLg} ${styles.ownerInfo}`}>
              <strong>Ricky Whittaker</strong><br />
              <span className={styles.accentText}>Founder & Lead Strategist</span>
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className={`section ${styles.sectionLight}`}>
        <div className={`container ${styles.valuePropGrid}`}>
          <div>
            <h2 className={`${styles.blackText} ${styles.headingLg}`}>ROI IS THE ONLY METRIC.</h2>
            <p className={`${styles.textLg} ${styles.blackText}`}>
              We don&apos;t believe in empty promises, just real, measurable results.
              As disciplined market strategists, we understand that every dollar spent must yield a return.
            </p>
            <p className={`${styles.textLg} ${styles.blackText}`}>
              Our proprietary <strong className={styles.exclusiveFocus}>Exclusive Focus</strong> model ensures we never work with your competitors.
              You handle your business; let us handle getting the right people to your website.
            </p>
          </div>
          <div>
            <RoiChart />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`section ${styles.sectionDark}`}>
        <div className="container">
          <div className={styles.servicesIntro}>
            <h2 className={`${styles.whiteText} ${styles.headingLg}`}>PRACTICAL INFRASTRUCTURE</h2>
            <p className={`${styles.textLg} ${styles.whiteText} ${styles.servicesText}`}>Mobile-first designs built for speed, SEO, and real-world effectiveness.</p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Card 1 */}
            <Link href="/services/web-development" className={styles.card} style={{ textDecoration: 'none' }}>
              <h3 className={styles.cardTitle}>PREMIUM WEB DESIGN</h3>
              <p style={{ color: '#ccc' }}>Fluid, brand-aware architectures that look stunning on mobile and desktop alike. Built to represent your premium status.</p>
            </Link>
            {/* Card 2 */}
            <Link href="/services/seo-infrastructure" className={styles.card} style={{ textDecoration: 'none' }}>
              <h3 className={styles.cardTitle}>TECHNICAL SEO</h3>
              <p style={{ color: '#ccc' }}>Deep foundational SEO strategies applied to every page. We verify that AI and Search Engines understand your business perfectly.</p>
            </Link>
            {/* Card 3 */}
            <Link href="/services/ai-revenue-agents" className={styles.card} style={{ textDecoration: 'none' }}>
              <h3 className={styles.cardTitle}>LEAD CONVERSION</h3>
              <p style={{ color: '#ccc' }}>We turn traffic into paying customers. Our disciplined approach focuses on high-intent leads that drive revenue.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA />
    </div>
  );
}
