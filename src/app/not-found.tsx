import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            color: '#fff',
            textAlign: 'center',
            padding: '20px'
        }}>
            <h1 style={{
                fontSize: '8rem',
                fontWeight: 'bold',
                color: 'var(--c-green-acid)',
                lineHeight: 1,
                marginBottom: '20px'
            }}>404</h1>

            <h2 style={{
                fontSize: '2rem',
                marginBottom: '20px',
                textTransform: 'uppercase'
            }}>Territory Not Found</h2>

            <p style={{
                color: '#888',
                maxWidth: '500px',
                marginBottom: '40px',
                fontSize: '1.2rem'
            }}>
                The page you are looking for has been moved, deleted, or does not exist.
                Return to base to recalibrate.
            </p>

            <Link
                href="/"
                style={{
                    backgroundColor: 'var(--c-green-acid)',
                    color: '#000',
                    padding: '16px 32px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    fontSize: '1rem'
                }}
            >
                Return Home
            </Link>
        </div>
    )
}
