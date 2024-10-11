import { HiSearch } from "react-icons/hi";
import { HiX } from "react-icons/hi";

import styles from "./Search.module.css";
import { useState } from "react";
import SearchResults from "./SearchResults/SearchResults";

function Search({ onCloseModal }) {
  const [query, setQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  function handleBlur() {
    setTimeout(() => {
      if (onCloseModal) {
        onCloseModal();
      }
      setQuery("");
      setIsFocused(false);
    }, 75);
  }

  return (
    <div
      className={styles.search}
      onBlur={handleBlur}
      onFocus={() => setIsFocused(true)}
    >
      <div className={styles.searchBox}>
        <HiSearch className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Type to search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <HiX className={styles.clearIcon} onClick={() => setQuery("")} />
        )}
      </div>

      {query.length > 0 && isFocused && <SearchResults query={query} />}
    </div>
  );
}

export default Search;
