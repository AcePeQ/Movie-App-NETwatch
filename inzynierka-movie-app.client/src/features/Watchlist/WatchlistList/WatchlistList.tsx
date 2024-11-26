import { useState } from "react";
import SidebarWatchlist from "../../Lists/Sidebar/SidebarWatchlist";
import styles from "./WatchlistList.module.css";
import { useAppSelector } from "../../../hooks/useRedux";
import { getUserWatchList } from "../../Authentication/userSlice";

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
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [typeBy, setTypeBy] = useState(typeOptions[0]);

  const watchlist = useAppSelector(getUserWatchList);

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

      <div className={styles.list_wrapper}></div>
    </div>
  );
}

export default WatchlistList;
