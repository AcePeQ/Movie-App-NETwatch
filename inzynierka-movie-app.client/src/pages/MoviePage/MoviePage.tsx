import styles from "./MoviePage.module.css";
import MovieHero from "../../features/Movie/MovieHero/MovieHero";
import MovieRow from "../../features/Movie/MovieRow/MovieRow";
import { useParams } from "react-router-dom";
import { useMovieID } from "../../features/Movie/useMovieID";

function MoviePage() {
  const { id } = useParams();
  const { data, error, isError, isPending } = useMovieID(id);

  if (isPending) {
    return <p>Loading....</p>;
  }

  console.log(data);

  const teasers = data.videos.results.filter(
    (video) => video.type === "Teaser" && video.official === true
  );
  const cast = data.credits.cast;
  const movie = data.movie;

  return (
    <>
      <MovieHero data={movie} />

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
