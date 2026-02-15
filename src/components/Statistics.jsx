import styles from './statistics.module.css'
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
                        <div className={styles.stats}>
                            <div className={styles.styleContainer}>
                                <h5>{item.count}</h5>
                                <p>{item.description}</p>
                            </div>
                            <div className={styles.vline}></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
