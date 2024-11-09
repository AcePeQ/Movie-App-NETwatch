import { useEffect } from "react";
import ErrorFull from "../../../ui/Error/ErrorFullPage/ErrorFullPage";
import LoaderSmall from "../../../ui/LoaderSmall/LoaderSmall";
import { ItemType } from "../../../utils/types";
import MovieItem from "../../Homepage/RowList/MovieItem/MovieItem";
import { useListFilms } from "../useListFilms";
import styles from "./ListContainer.module.css";

function ListContainer({ type, url }: { type: string; url: string }) {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useListFilms(url, type);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 150 &&
        hasNextPage
      ) {
        fetchNextPage();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, fetchNextPage]);

  if (isLoading || !url) {
    return <LoaderSmall />;
  }

  if (isError) {
    return <ErrorFull error={error} />;
  }

  return (
    <div key={data?.pages.length} className={styles.list_wrapper}>
      {data?.pages.map((page) =>
        page?.results.map((item: ItemType) => (
          <MovieItem key={item.id} movie={item} />
        ))
      )}
      {isFetchingNextPage && <LoaderSmall />}
      {!hasNextPage && (
        <p className={styles.information}>No more films to load</p>
      )}
    </div>
  );
}

export default ListContainer;
