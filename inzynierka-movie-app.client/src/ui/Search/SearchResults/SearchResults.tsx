import styles from "./SearchResults.module.css";
import SearchItem from "../SearchItem/SearchItem";

function SearchResults() {
  return (
    <div className={styles.searchResults}>
      <SearchItem />
      <SearchItem />
    </div>
  );
}

export default SearchResults;
