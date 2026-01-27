
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Kilvington Digital Marketing',
        short_name: 'Kilvington Digital',
        description: 'Exclusive ROI-Focused Agency for Blue Collar Businesses. One Client Per Industry, Per Territory.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#DC2626',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/images/logo-white.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
