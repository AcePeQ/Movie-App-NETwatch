import styles from "./AccountCharts.module.css";
import ChartItem from "./ChartItem/ChartItem";

function AccountCharts() {
  return (
    <div className={styles.charts}>
      <ChartItem type="Movies" />
      <ChartItem type="Series" />
    </div>
  );
}

export default AccountCharts;
