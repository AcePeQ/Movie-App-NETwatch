import styles from "./TvSeriesPage.module.css";
import MovieHero from "../../features/Movie/MovieHero/MovieHero";
import MovieRow from "../../features/Movie/MovieRow/MovieRow";
import { useParams } from "react-router-dom";
import { useTVSeriesID } from "../../features/Movie/useTVSeriesID";
import WatchOnNow from "../../features/Movie/MovieHero/WatchOnNow/WatchOnNow";
import Videos from "../../features/Movie/Video/Videos";

function TvSeriesPage() {
  const { id } = useParams();
  const { data, error, isPending, isError } = useTVSeriesID(id);

  if (isPending) {
    return "Loading";
  }

  const vidoes = data.videos.results
    .filter(
      (video) =>
        (video.type === "Teaser" || video.type === "Trailer") &&
        video.official === true &&
        video.site === "YouTube"
    )
    .slice(0, 6);

  const cast = data.credits.cast
    .filter((person) => person.known_for_department === "Acting")
    .slice(0, 9);
  console.log(cast);

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

        {vidoes.length > 0 && (
          <MovieRow title="Videos">
            <Videos videos={vidoes} />
          </MovieRow>
        )}
      </div>
    </>
  );
}

export default TvSeriesPage;
