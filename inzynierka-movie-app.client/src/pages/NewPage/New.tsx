import NewList from "../../features/Homepage/New/NewList";
import TypeList from "../../ui/TypeList/TypeList";

import styles from "./New.module.css";

function New() {
  return (
    <div className={styles.listContainer}>
      <TypeList />
      <NewList />
    </div>
  );
}

export default New;
