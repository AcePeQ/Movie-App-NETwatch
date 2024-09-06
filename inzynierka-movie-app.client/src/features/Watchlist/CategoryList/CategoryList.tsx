import { NavLink } from "react-router-dom";
import styles from "./CategoryList.module.css";

function CategoryList() {
  return (
    <nav className={styles.categories}>
      <ul className={styles.list}>
        <NavLink className={styles.listLink} to="all">
          <li className={styles.listItem}>All movies & series</li>
        </NavLink>
        <NavLink className={styles.listLink} to="currentWatching">
          <li className={styles.listItem}>Current Watching</li>
        </NavLink>
        <NavLink className={styles.listLink} to="/">
          <li className={styles.listItem}>Completed</li>
        </NavLink>
        <NavLink className={styles.listLink} to="/">
          <li className={styles.listItem}>Plan to Watch</li>
        </NavLink>
        <NavLink className={styles.listLink} to="/">
          <li className={styles.listItem}>On Hold</li>
        </NavLink>
        <NavLink className={styles.listLink} to="/">
          <li className={styles.listItem}>Dropped</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default CategoryList;
