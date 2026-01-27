
export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Kilvington Digital Marketing',
        alternateName: 'Kilvington Digital',
        url: 'https://kilvington.digital',
        logo: 'https://kilvington.digital/images/logo-white.png',
        image: 'https://kilvington.digital/images/hero-bg-neon.png',
        description: 'Exclusive ROI-focused digital marketing agency for blue-collar businesses. Specializing in SEO infrastructure, Geo-Generative Optimization, and AI Revenue Agents. One client per industry, per territory.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Sanford',
            addressRegion: 'NC',
            addressCountry: 'US'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 35.4799,
            longitude: -79.1803
        },
        priceRange: '$$$',
        telephone: '+1-555-555-5555', // Placeholder, update if real number is known
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday'
                ],
                opens: '09:00',
                closes: '17:00'
            }
        ],
        sameAs: [
            // Add social media links here eventually
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
