import { useEffect, useState } from "react";
import SidebarWatchlist from "../../Lists/Sidebar/SidebarWatchlist";
import styles from "./WatchlistList.module.css";
import { useAppSelector } from "../../../hooks/useRedux";
import { getUserWatchList } from "../../Authentication/userSlice";
import { useUserWathclist } from "../useUserWatchlist";
import ErrorFull from "../../../ui/Error/ErrorFullPage/ErrorFullPage";
import Loading from "../../../ui/Loading/Loading";
import MovieItem from "../../Homepage/RowList/MovieItem/MovieItem";
import { ItemType } from "../../../utils/types";
import { useParams } from "react-router-dom";
import { sortWatchlist } from "../../../helpers/sortWatchlist";

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

function WatchlistList() {
  const { username } = useParams();

  const { watchlist, isLoadingWatchlist, isErrorWatchlist, watchlistError } =
    useUserWathclist(username);

  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [typeBy, setTypeBy] = useState(typeOptions[0]);
  const [sortedWatchlist, setSortedWatchlist] = useState<ItemType[]>([]);

  useEffect(() => {
    if (watchlist) {
      const sorted = sortWatchlist(watchlist, sortBy, typeBy);
      setSortedWatchlist(sorted);
    }
  }, [watchlist, sortBy, typeBy]);

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
      />

      <div className={styles.list_wrapper}>
        {isLoadingWatchlist ? (
          <Loading />
        ) : (
          sortedWatchlist?.map((movie: ItemType) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default WatchlistList;
