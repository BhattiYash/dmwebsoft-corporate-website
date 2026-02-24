import { useState, useEffect, useRef } from 'react';
import styles from '../assets/styles/statistics.module.css'

const CountUp = ({ targetString }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const numberMatch = targetString.match(/\d+/);
    const endVal = numberMatch ? parseInt(numberMatch[0], 10) : 0;
    const hasLeadingZero = targetString.startsWith('0');
    const suffix = targetString.replace(/\d+/g, '');

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        const duration = 2000; // 2 seconds animation

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // easeOutQuart function for smoother deceleration
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easeProgress * endVal));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, endVal]);

    const displayCount = hasLeadingZero && count < 10 ? `0${count}` : count;

    return <span ref={ref}>{displayCount}{suffix}</span>;
};

export default function Statistics() {
    const statisticsData = [{
        id: 1,
        count: "08+",
        description: "Years In Business"
    },
    {
        id: 2,
        count: "120+",
        description: "Experts Team"
    },
    {
        id: 3,
        count: "250+",
        description: "Successful Projects"
    },
    {
        id: 4,
        count: "25+",
        description: "Consistent Clients"
    },
    ]
    return (
        <>
            <div className={styles.container}>
                <div className={styles.statistics}>
                    {statisticsData.map((item) => (
                        <div key={item.id} className={styles.stats}>
                            <div className={styles.styleContainer}>
                                <h5><CountUp targetString={item.count} /></h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
