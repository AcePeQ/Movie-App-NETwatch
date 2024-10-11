import styles from "./SearchResults.module.css";
import SearchItem from "../SearchItem/SearchItem";
import { useSearch } from "../useSearch";
import Loading from "../../Loading/Loading";

function SearchResults({ query }: { query: string }) {
  const { data, isPending, error, isError } = useSearch(query);

  const searchResultsLength = data?.length;

  return (
    <div className={styles.searchResults}>
      {isPending && <Loading type="search" />}

      {searchResultsLength === 0 && (
        <p>Results for search "{query}" not found</p>
      )}

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
