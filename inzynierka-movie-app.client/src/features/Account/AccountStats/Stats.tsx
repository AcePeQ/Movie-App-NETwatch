import StatisticItem from "./StatisticItem/StatisticItem";
import styles from "./Stats.module.css";

function Stats() {
  return (
    <div className={styles.statistics}>
      <StatisticItem type="Movies" />
      <StatisticItem type="Series" />
    </div>
  );
}

export default Stats;
