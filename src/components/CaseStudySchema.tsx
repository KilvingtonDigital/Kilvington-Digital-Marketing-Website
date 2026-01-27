
import React from 'react';

interface CaseStudySchemaProps {
    clientName: string;
    reviewBody: string;
    reviewRating: number;
    serviceName: string;
    outcome: string;
}

export default function CaseStudySchema({ clientName, reviewBody, reviewRating, serviceName, outcome }: CaseStudySchemaProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Review',
        'itemReviewed': {
            '@type': 'Service',
            'name': serviceName,
            'description': outcome,
            'provider': {
                '@type': 'Organization',
                'name': 'Kilvington Digital Marketing',
                'url': 'https://kilvington.digital'
            }
        },
        'author': {
            '@type': 'Organization',
            'name': clientName
        },
        'reviewRating': {
            '@type': 'Rating',
            'ratingValue': reviewRating,
            'bestRating': 5
        },
        'reviewBody': reviewBody
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
