
import React from 'react';

interface ServiceSchemaProps {
    name: string;
    description: string;
    url: string;
    serviceType?: string;
    areaServed?: string;
}

export default function ServiceSchema({ name, description, url, serviceType, areaServed = "Sanford, NC" }: ServiceSchemaProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: name,
        description: description,
        provider: {
            '@type': 'ProfessionalService',
            name: 'Kilvington Digital Marketing',
            url: 'https://kilvington.digital',
            image: 'https://kilvington.digital/images/logo-white.png',
            priceRange: '$$$'
        },
        url: url,
        serviceType: serviceType || name,
        areaServed: {
            '@type': 'Place',
            name: areaServed
        },
        termsOfService: 'https://kilvington.digital/terms'
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
