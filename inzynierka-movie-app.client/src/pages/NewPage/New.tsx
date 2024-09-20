import { useMediaQuery } from "react-responsive";
import NewList from "../../features/Homepage/New/NewList";
import Filters from "../../ui/Filters/Filters";
import TypeList from "../../ui/TypeList/TypeList";

import styles from "./New.module.css";

function New() {
  const isSmallDisplay = useMediaQuery({
    query: "(max-width: 750px)",
  });

  return (
    <div className={styles.listContainer}>
      <TypeList />
      {!isSmallDisplay && <Filters />}
      <NewList />
    </div>
  );
}

export default New;
