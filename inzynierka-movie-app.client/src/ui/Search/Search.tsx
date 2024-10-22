import { HiSearch } from "react-icons/hi";
import { HiX } from "react-icons/hi";

import styles from "./Search.module.css";
import { FormEvent, useState } from "react";
import SearchResults from "./SearchResults/SearchResults";
import { useNavigate } from "react-router-dom";

function Search({ onCloseModal }: { onCloseModal?: () => void }) {
  const [query, setQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    navigate(`/search/${query}`);
  }

  function handleBlur() {
    setTimeout(() => {
      if (onCloseModal) {
        onCloseModal();
      }
      setQuery("");
      setIsFocused(false);
    }, 100);
  }

  return (
    <form
      className={styles.search}
      onBlur={handleBlur}
      onFocus={() => setIsFocused(true)}
      onSubmit={handleSubmit}
    >
      <div className={styles.searchBox}>
        <button
          aria-label="search_button"
          type="submit"
          className={styles.submitButton}
        >
          <HiSearch className={styles.searchIcon} />
        </button>
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
    </form>
  );
}

export default Search;
