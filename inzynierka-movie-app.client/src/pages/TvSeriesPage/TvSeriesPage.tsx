import styles from "./TvSeriesPage.module.css";
import MovieHero from "../../features/Movie/MovieHero/MovieHero";
import MovieRow from "../../features/Movie/MovieRow/MovieRow";
import { useParams } from "react-router-dom";
import { useTVSeriesID } from "../../features/Movie/useTVSeriesID";
import WatchOnNow from "../../features/Movie/MovieHero/WatchOnNow/WatchOnNow";

function TvSeriesPage() {
  const { id } = useParams();
  const { data, error, isPending, isError } = useTVSeriesID(id);

  if (isPending) {
    return "Loading";
  }
  console.log(data);

  const teasers = data.videos.results.filter(
    (video) => video.type === "Teaser" && video.official === true
  );
  const cast = data.credits.cast;
  const networks = data.tvseries.networks;
  const tv = data.tvseries;

  return (
    <>
      <MovieHero data={tv} />

      <div className={styles.rows}>
        <MovieRow title="Watch now on">
          <WatchOnNow networks={networks} />
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
