import styles from "./StatisticItem.module.css";

interface StatisticItemProps {
  type: string;
}

function StatisticItem({ type }: StatisticItemProps) {
  return (
    <div className={styles.statisticBox}>
      <p className={styles.typeName}>{type}</p>
      <p className={styles.time}>195d 23h 30min</p>
      <p className={styles.duration}>All time</p>
      {type === "Movies" && <p className={styles.summary}>305 movies</p>}
      {type === "Series" && (
        <p className={styles.summary}>5,324 episodes, 254 shows</p>
      )}
    </div>
  );
}

export default StatisticItem;
