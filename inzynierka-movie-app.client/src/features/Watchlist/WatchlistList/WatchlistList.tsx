import { useEffect, useState } from "react";
import SidebarWatchlist from "../../Lists/Sidebar/SidebarWatchlist";
import styles from "./WatchlistList.module.css";
import { useUserWathclist } from "../useUserWatchlist";
import ErrorFull from "../../../ui/Error/ErrorFullPage/ErrorFullPage";
import Loading from "../../../ui/Loading/Loading";
import MovieItem from "../../Homepage/RowList/MovieItem/MovieItem";

import { useParams } from "react-router-dom";
import { sortWatchlist } from "../../../helpers/sortWatchlist";
import { FullWatchlistItem } from "../../../utils/types";

const sortOptions = [
  { value: "rating.asc", label: "Rating ascending" },
  { value: "rating.dsc", label: "Rating descending" },
  { value: "user_score.asc", label: "User rating ascending" },
  { value: "user_score.dsc", label: "User rating descending" },
  { value: "year.asc", label: "Year ascending" },
  { value: "year.dsc", label: "Year descending" },
  { value: "title", label: "Title (A-Z)" },
];

const typeOptions = [
  { value: "all", label: "All" },
  { value: "movie", label: "Movie" },
  { value: "tv", label: "TV Series" },
];

const statusOptions = [
  { value: "all", label: "All" },
  { value: "watching", label: "Current Watching" },
  { value: "completed", label: "Completed" },
  { value: "planToWatch", label: "Plan to Watch" },
  { value: "onHold", label: "On Hold" },
  { value: "dropped", label: "Dropped" },
];

function WatchlistList() {
  const { username } = useParams();

  const { watchlist, isLoadingWatchlist, isErrorWatchlist, watchlistError } =
    useUserWathclist(username);

  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [typeBy, setTypeBy] = useState(typeOptions[0]);
  const [statusBy, setStatusBy] = useState(statusOptions[0]);
  const [sortedWatchlist, setSortedWatchlist] = useState<
    FullWatchlistItem[] | undefined
  >([]);

  useEffect(() => {
    if (watchlist) {
      const sorted = sortWatchlist(
        watchlist,
        sortBy.value,
        typeBy.value,
        statusBy.value
      );
      setSortedWatchlist(sorted);
    }
  }, [watchlist, sortBy, typeBy, statusBy]);

  if (isErrorWatchlist) {
    return <ErrorFull error={watchlistError} />;
  }

  return (
    <div className={styles.list_container}>
      <SidebarWatchlist
        sortBy={sortBy}
        setSortBy={setSortBy}
        typeBy={typeBy}
        setTypeBy={setTypeBy}
        sortOptions={sortOptions}
        typeOptions={typeOptions}
        statusBy={statusBy}
        setStatusBy={setStatusBy}
        statusOptions={statusOptions}
      />

      <div className={styles.list_wrapper}>
        {isLoadingWatchlist ? (
          <Loading />
        ) : (
          sortedWatchlist?.map((movie: FullWatchlistItem) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default WatchlistList;
