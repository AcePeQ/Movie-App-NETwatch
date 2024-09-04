import styles from "./ChartItem.module.css";

interface AccountChartsProps {
  type: string;
}

function ChartItem({ type }: AccountChartsProps) {
  return (
    <div className={styles.chartBox}>
      <p className={styles.chartTitle}>{type}</p>
      <div className={styles.chart}>Chart</div>
    </div>
  );
}

export default ChartItem;
