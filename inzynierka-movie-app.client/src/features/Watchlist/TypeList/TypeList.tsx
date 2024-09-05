import styles from "./TypeList.module.css";

function TypeList() {
  return (
    <div className={styles.types}>
      <div className={styles.typeBox}>
        <select>
          <option>All</option>
          <option>Series</option>
          <option>Movies</option>
        </select>
      </div>
      <div className={styles.sortBox}>
        <label>Sorted by</label>
        <select>
          <option>Rating</option>
          <option>Year</option>
          <option>Name</option>
        </select>
      </div>
    </div>
  );
}

export default TypeList;
