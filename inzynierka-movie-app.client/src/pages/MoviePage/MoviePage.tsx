import styles from "./MoviePage.module.css";
import MovieHero from "../../features/Movie/MovieHero/MovieHero";
import MovieRow from "../../features/Movie/MovieRow/MovieRow";

function MoviePage() {
  return (
    <>
      <MovieHero />

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

export default MoviePage;
