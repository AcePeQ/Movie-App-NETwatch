import styles from "./TvSeriesPage.module.css";
import MovieHero from "../../features/Movie/MovieHero/MovieHero";
import MovieRow from "../../features/Movie/MovieRow/MovieRow";
import { useParams } from "react-router-dom";
import { useTVSeriesID } from "../../features/Movie/useTVSeriesID";

function TvSeriesPage() {
  const { id } = useParams();
  const { data, error, isPending, isError } = useTVSeriesID(id);

  if (isPending) {
    return "Loading";
  }

  const { cast } = data.credits;

  return (
    <>
      <MovieHero item={data} />

      <div className={styles.rows}>
        <MovieRow title="Watch now on">
          <span>Elo</span>
        </MovieRow>

        <MovieRow title="Seasons">
          <span>Elo</span>
        </MovieRow>

        <MovieRow title="Cast">
          <span>Elo</span>
        </MovieRow>

        <MovieRow title="Movies">
          <span>Elo</span>
        </MovieRow>
      </div>
    </>
  );
}

export default TvSeriesPage;
