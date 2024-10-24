import NewList from "../../features/Homepage/New/NewList";
import Filters from "../../ui/Filters/Filters";
import TypeList from "../../ui/TypeList/TypeList";

import styles from "./New.module.css";

function New() {
  return (
    <div className={styles.listContainer}>
      <TypeList />
      <Filters />
      <NewList />
    </div>
  );
}

export default New;
