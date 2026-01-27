import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './industries.module.css';

export const metadata: Metadata = {
    title: "Marketing for High-Ticket Trade Industries | Kilvington Digital",
    description: "Specialized revenue infrastructure for Tree Services, Roofing, HVAC, and Custom Builders. Select your sector to see our dominance strategy.",
};

const industries = [
    {
        title: "TREE SERVICES",
        href: "/industries/tree-service-marketing",
        image: "/images/tree-service-marketing-arborist-lead-generation.png",
        desc: "For arborists who want high-ticket removals and storm work, not just hedge trimming."
    },
    {
        title: "FENCE INSTALLATION",
        href: "/industries/fence-installation-marketing",
        image: "/images/fence-installation-marketing-lead-generation.png",
        desc: "Dominate the HOA privacy fence market and secure high-margin commercial perimeter jobs."
    },
    {
        title: "CUSTOM HOME BUILDERS",
        href: "/industries/custom-home-builder-marketing",
        image: "/images/custom-home-builder-marketing-luxury-construction-leads.png",
        desc: "Build trust and prestige for multi-million dollar projects. Long-game nurture for luxury buyers."
    },
    {
        title: "ROOFING & STORM",
        href: "/industries/roofing-marketing",
        image: "/images/roofing-marketing-storm-damage-leads-system.png",
        desc: "Capture high-value insurance claims and retail replacements with \"Storm Response\" site infrastructure."
    },
    {
        title: "HVAC SERVICES",
        href: "/industries/hvac-marketing",
        image: "/images/hvac-contractor-marketing-ac-repair-leads.png",
        desc: "Win the race for \"AC Repair\" with high-speed mobile pages and automated booking agents."
    },
    {
        title: "EPOXY FLOORING",
        href: "/industries/epoxy-flooring-marketing",
        image: "/images/epoxy-flooring-contractor-marketing-system.png",
        desc: "Use portfolio-driven design to sell high-margin garage and commercial floor coatings."
    },
    {
        title: "SPRAY FOAM",
        href: "/industries/spray-foam-insulation-marketing",
        image: "/images/spray-foam-insulation-marketing-leads.png",
        desc: "Educate homeowners on energy ROI and dominate the crawl space encapsulation market."
    },
    {
        title: "LAND CLEARING",
        href: "/industries/land-clearing-marketing",
        image: "/images/land-clearing-forestry-mulching-marketing.png",
        desc: "Connect with developers and builders. Win forestry mulching and grading contracts."
    },
    {
        title: "MOLD REMEDIATION",
        href: "/industries/mold-remediation-marketing",
        image: "/images/mold-remediation-marketing-water-damage-leads.png",
        desc: "Capture urgent \"Black Mold\" searches. Position your brand as the health authority homeowners trust."
    }
];

export default function IndustriesHubPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.label}>SECTOR EXPERTISE</span>
                    <h1 className={styles.title}>CHOOSE YOUR INDUSTRY</h1>
                    <p className={styles.subtitle}>
                        We don&apos;t specialize in &quot;marketing&quot;. We specialize in revenue models for specific high-ticket trades.
                        Select your sector to see how we engineer dominance.
                    </p>
                </div>
            </section>

            {/* Poster Grid */}
            <section className={styles.industrySection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {industries.map((industry) => (
                            <Link key={industry.title} href={industry.href} className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={industry.image}
                                        alt={`${industry.title} Marketing Strategy`}
                                        fill
                                        className={styles.cardImage}
                                        priority={industry.title === "TREE SERVICES"} // Prioritize first image
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{industry.title}</h3>
                                    <p className={styles.cardDesc}>{industry.desc}</p>
                                    <span className={styles.cardAction}>
                                        Explore Strategy <span className={styles.arrow}>→</span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
