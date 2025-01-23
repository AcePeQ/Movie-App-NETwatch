import styles from "./SearchResults.module.css";
import SearchItem from "../SearchItem/SearchItem";
import { useSearch } from "../useSearch";
import Loading from "../../Loading/Loading";
import Error from "../../Error/Error";
import { GeneralProductionItem } from "../../../utils/types";

function SearchResults({ query }: { query: string }) {
  const { data, isPending, error, isError } = useSearch(query);

  const searchResultsLength = data?.length;

  return (
    <div className={styles.searchResults}>
      {isPending && <Loading type="search" />}

      {isError && <Error error={error} />}

      {searchResultsLength === 0 && !isError && !isPending && (
        <p>Results for search "{query}" not found</p>
      )}

      {!isPending && !isError && (
        <>
          {data.map((item: GeneralProductionItem) => (
            <SearchItem key={item.id} item={item} />
          ))}
        </>
      )}
    </div>
  );
}

export default SearchResults;
