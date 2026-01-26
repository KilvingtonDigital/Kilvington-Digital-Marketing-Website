'use client';

import { motion } from 'framer-motion';

export default function RoiChart() {
    const bars = [
        { height: '30%', delay: 0.1 },
        { height: '45%', delay: 0.2 },
        { height: '60%', delay: 0.3 },
        { height: '75%', delay: 0.4 },
        { height: '100%', delay: 0.5 },
    ];

    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            height: '400px',
            width: '100%',
            maxWidth: '500px',
            position: 'relative',
            padding: '20px',
            gap: '20px' // Space between bars
        }}>
            {/* Background Grid Lines (Optional Tactile Feel) */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1px',
                backgroundColor: '#333'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '25%',
                left: 0,
                right: 0,
                height: '1px',
                backgroundColor: '#222',
                borderTop: '1px dashed #333'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '50%',
                left: 0,
                right: 0,
                height: '1px',
                backgroundColor: '#222',
                borderTop: '1px dashed #333'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '75%',
                left: 0,
                right: 0,
                height: '1px',
                backgroundColor: '#222',
                borderTop: '1px dashed #333'
            }} />

            {bars.map((bar, index) => (
                <motion.div
                    key={index}
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: bar.height, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                        duration: 0.8,
                        delay: bar.delay,
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                    }}
                    style={{
                        width: '18%',
                        background: 'linear-gradient(90deg, #1a1a1a 0%, #444444 50%, #1a1a1a 100%)', // Metallic Charcoal
                        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                        position: 'relative',
                        borderRadius: '2px 2px 0 0',
                    }}
                >
                    {/* Neon Top Cap */}
                    <motion.div
                        animate={{
                            boxShadow: ['0 0 5px #4CFC0F', '0 0 15px #4CFC0F', '0 0 5px #4CFC0F']
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            height: '4px',
                            width: '100%',
                            backgroundColor: '#4CFC0F', // Acid Green
                            boxShadow: '0 0 15px #4CFC0F',
                        }}
                    />

                    {/* Glass/Sheen Effect Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '10%',
                        width: '30%',
                        height: '100%',
                        background: 'rgba(255,255,255,0.05)',
                        pointerEvents: 'none'
                    }} />
                </motion.div>
            ))}
        </div>
    );
}
