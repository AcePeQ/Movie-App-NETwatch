import { Outlet } from "react-router-dom";
import styles from "./LayoutWatchlist.module.css";
import TypeList from "../../features/Watchlist/TypeList/TypeList";
import CategoryList from "../../features/Watchlist/CategoryList/CategoryList";

function LayoutWatchlist() {
  return (
    <div className={styles.layoutWatchlist}>
      <TypeList />

      <CategoryList />

      <div className={styles.listBox}>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutWatchlist;
