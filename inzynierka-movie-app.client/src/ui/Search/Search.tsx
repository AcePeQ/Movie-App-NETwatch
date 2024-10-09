import { HiSearch } from "react-icons/hi";
import { HiX } from "react-icons/hi";

import styles from "./Search.module.css";
import { useState } from "react";
import SearchResults from "./SearchResults/SearchResults";

function Search() {
  const [query, setQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <form className={styles.search}>
      <HiSearch className={styles.searchIcon} />
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search for movies or TV shows"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {query && <HiX className={styles.clearIcon} />}

      {query.length > 0 && !isFocused && <SearchResults query={query} />}
    </form>
  );
}

export default Search;
