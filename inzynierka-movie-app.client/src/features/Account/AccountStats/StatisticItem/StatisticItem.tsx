import { WatchlistItem } from "../../../../utils/types";

import styles from "./StatisticItem.module.css";

interface StatisticItemProps {
  type: string;
  data: WatchlistItem[];
}

function StatisticItem({ type, data }: StatisticItemProps) {
  const countMovies = data.length;
  let countEpisodes = 0;

  if (type === "TV Series") {
    countEpisodes = data.reduce(
      (acc: number, item: WatchlistItem) => acc + item.watched_episodes,
      0
    );
  }

  return (
    <div className={styles.statisticBox}>
      <p className={styles.typeName}>{type}</p>
      <p className={styles.duration}>All time</p>
      {type === "Movies" && (
        <p className={styles.summary}>{countMovies} movies</p>
      )}
      {type === "TV Series" && (
        <p className={styles.summary}>
          {countEpisodes} episodes, {countMovies} shows
        </p>
      )}
    </div>
  );
}

export default StatisticItem;
