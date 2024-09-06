import { NavLink } from "react-router-dom";
import styles from "./CategoryList.module.css";

function CategoryList() {
  return (
    <nav className={styles.categories}>
      <ul className={styles.list}>
        <NavLink className={styles.listLink} to="/">
          <li className={styles.listItem}>All</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default CategoryList;
