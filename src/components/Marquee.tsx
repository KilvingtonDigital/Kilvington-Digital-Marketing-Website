import styles from './Marquee.module.css';

interface MarqueeProps {
    items: string[];
    speed?: number; // Duration in seconds
}

export default function Marquee({ items, speed = 30 }: MarqueeProps) {
    // Duplicate items to ensure seamless loop
    const displayItems = [...items, ...items, ...items, ...items];

    return (
        <div className={styles.marqueeContainer}>
            <div
                className={styles.marqueeContent}
                style={{ animationDuration: `${speed}s` }}
            >
                {displayItems.map((item, index) => (
                    <span key={index} className={styles.item}>
                        {item}
                        <span className={styles.separator}>{'//'}</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
