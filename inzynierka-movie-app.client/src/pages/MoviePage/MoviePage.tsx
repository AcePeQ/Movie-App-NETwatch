import styles from "./MoviePage.module.css";
import MovieHero from "../../features/Movie/MovieHero/MovieHero";

function MoviePage() {
  return (
    <div className={styles.movieContainer}>
      <MovieHero />
    </div>
  );
}

export default MoviePage;
