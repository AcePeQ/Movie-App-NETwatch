import ErrorFull from "../../../ui/Error/ErrorFullPage/ErrorFullPage";
import LoaderSmall from "../../../ui/LoaderSmall/LoaderSmall";
import { ItemType } from "../../../utils/types";
import MovieItem from "../../Homepage/RowList/MovieItem/MovieItem";
import { useListFilms } from "../useListFilms";
import styles from "./ListContainer.module.css";

function ListContainer({ type, url }: { type: string; url: string }) {
  const { data, isPending, isError, error } = useListFilms(url, type);

  if (isPending || !url) {
    return <LoaderSmall />;
  }

  if (isError) {
    return <ErrorFull error={error} />;
  }

  const { page, results: film_results, total_pages, total_results } = data;

  console.log(data);

  return (
    <div className={styles.list_wrapper}>
      {film_results.map((item: ItemType) => (
        <MovieItem key={item.id} movie={item} />
      ))}
    </div>
  );
}

export default ListContainer;
