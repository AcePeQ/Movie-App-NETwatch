import { WatchlistItem } from "../../../utils/types";
import StatisticItem from "./StatisticItem/StatisticItem";
import styles from "./Stats.module.css";

function Stats({ watchlist }: { watchlist: WatchlistItem[] }) {
  const movies = watchlist.filter((movie) => movie.media_type === "movie");
  const tvSeries = watchlist.filter((movie) => movie.media_type === "tv");

  return (
    <div className={styles.statistics}>
      <StatisticItem data={movies} type="Movies" />
      <StatisticItem data={tvSeries} type="TV Series" />
    </div>
  );
}

export default Stats;
