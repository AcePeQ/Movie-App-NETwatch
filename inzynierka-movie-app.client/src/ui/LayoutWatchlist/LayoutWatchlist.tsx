import { Outlet } from "react-router-dom";
import styles from "./LayoutWatchlist.module.css";
import TypeList from "../TypeList/TypeList";
import CategoryList from "../../features/Watchlist/CategoryList/CategoryList";
import { useMediaQuery } from "react-responsive";

function LayoutWatchlist() {
  const isMediumDisplay = useMediaQuery({
    query: "(max-width: 1125px)",
  });

  return (
    <div className={styles.layoutWatchlist}>
      <TypeList />

      {!isMediumDisplay && <CategoryList />}

      <Outlet />
    </div>
  );
}

export default LayoutWatchlist;
