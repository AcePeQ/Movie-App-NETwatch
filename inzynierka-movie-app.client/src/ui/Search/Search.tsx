import { HiSearch } from "react-icons/hi";
import { HiX } from "react-icons/hi";

import styles from "./Search.module.css";
import { useState } from "react";
import SearchResults from "./SearchResults/SearchResults";

function Search() {
  const [search, setSearch] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <form className={styles.search}>
      <HiSearch className={styles.searchIcon} />
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search for movies or TV shows"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {search && <HiX className={styles.clearIcon} />}

      {search.length > 0 && isFocused && <SearchResults />}
    </form>
  );
}

export default Search;
