import styles from "./SearchResults.module.css";
import SearchItem from "../SearchItem/SearchItem";
import { useSearch } from "../useSearch";

function SearchResults({ query }: { query: string }) {
  const { data, isPending, error, isError } = useSearch(query);

  const searchResultsLength = data?.length;

  return (
    <div className={styles.searchResults}>
      {isPending && <p>Loading...</p>}

      {searchResultsLength === 0 && <p>No matching founds</p>}

      {!isPending && (
        <>
          {data.map((item) => (
            <SearchItem key={item.id} item={item} />
          ))}
        </>
      )}
    </div>
  );
}

export default SearchResults;
