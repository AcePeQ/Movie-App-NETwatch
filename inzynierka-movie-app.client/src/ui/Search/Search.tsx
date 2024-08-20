import { HiSearch } from "react-icons/hi";
import { HiX } from "react-icons/hi";

import styles from "./Search.module.css";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  return (
    <form className={styles.search}>
      <HiSearch className={styles.searchIcon} />
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search for movies or TV shows"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && <HiX className={styles.clearIcon} />}
    </form>
  );
}

export default Search;
