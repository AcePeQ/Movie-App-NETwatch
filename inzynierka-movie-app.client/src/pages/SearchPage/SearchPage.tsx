import { HiMiniArrowLeftCircle } from "react-icons/hi2";
import styles from "./SearchPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSearch } from "../../ui/Search/useSearch";
import Loading from "../../ui/Loading/Loading";
import ErrorFull from "../../ui/Error/ErrorFullPage/ErrorFullPage";
import SearchResult from "./SearchResult/SearchResult";

type Item = {
  poster_path: string;
  genre_ids: [];
  id: number;
  overview: string;
  media_type: string;
  name: string;
  first_air_date: string;
  release_date: string;
  title: string;
  vote_average: number;
};

function SearchPage() {
  const { query } = useParams();
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useSearch(query);

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorFull error={error} />;
  }

  console.log(data);

  return (
    <div className={styles.search_page_container}>
      <div className={styles.header_wrapper}>
        <div className={styles.header}>
          <h2 className={styles.header_title}>Search results for: {query}</h2>
          <button onClick={() => navigate(-1)} className={`${styles.button}`}>
            <HiMiniArrowLeftCircle className={styles.icon} />
            <p>Go back</p>
          </button>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.main_wrapper}>
          <ul className={styles.search_list}>
            {data.map((item: Item) => (
              <SearchResult key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
