import { Outlet } from "react-router-dom";
import Filters from "../Filters/Filters";
import TypeList from "../TypeList/TypeList";
import styles from "./LayoutList.module.css";

function LayoutList() {
  return (
    <div className={styles.listContainer}>
      <TypeList />
      <Filters />
      <Outlet />
    </div>
  );
}

export default LayoutList;
