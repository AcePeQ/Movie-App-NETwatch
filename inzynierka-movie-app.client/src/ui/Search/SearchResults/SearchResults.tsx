import styles from "./SearchResults.module.css";
import SearchItem from "../SearchItem/SearchItem";
import { useSearch } from "../useSearch";

function SearchResults({ query }: { query: string }) {
  const { data, isPending, error, isError } = useSearch(query);

  return (
    <div className={styles.searchResults}>
      {isPending && <p>Loading...</p>}

      {!isPending && (
        <>
          <SearchItem />
          <SearchItem />
        </>
      )}
    </div>
  );
}

export default SearchResults;
