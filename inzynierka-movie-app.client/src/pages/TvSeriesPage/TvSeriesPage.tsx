import styles from "./TvSeriesPage.module.css";
import MovieHero from "../../features/Movie/MovieHero/MovieHero";
import MovieRow from "../../features/Movie/MovieRow/MovieRow";
import { useParams } from "react-router-dom";
import { useTVSeriesID } from "../../features/Movie/useTVSeriesID";
import WatchOnNow from "../../features/Movie/MovieHero/WatchOnNow/WatchOnNow";
import Videos from "../../features/Movie/Video/Videos";
import Cast from "../../features/Movie/Cast/Cast";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  movieMobileSettings,
  movieSettings,
  sliderCastSettings,
  sliderSeasonsSettings,
  sliderSimilarSettings,
} from "../../helpers/SliderSettings";
import ShowMore from "../../ui/ShowMore/ShowMore";
import Season from "../../features/Movie/Season/Season";
import MovieItem from "../../features/Homepage/RowList/MovieItem/MovieItem";
import { useMediaQuery } from "react-responsive";
import DetailRow from "../../features/Movie/MovieHero/DetailRow/DetailRow";

function TvSeriesPage() {
  const { id } = useParams();
  const { data, error, isPending, isError } = useTVSeriesID(id);

  const isMediumDevice = useMediaQuery({
    query: "(max-width: 1085px)",
  });

  const settings = !isMediumDevice ? movieSettings() : movieMobileSettings();

  if (isPending) {
    return "Loading";
  }

  console.log(data);

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

  const seasons = data.tvseries.seasons;

  const similarShows = data.similar.results;

  const networks = data.tvseries.networks;
  const tv = data.tvseries;

  const similarResponsive = sliderSimilarSettings();
  const castResponsive = sliderCastSettings();
  const seasonsResponsive = sliderSeasonsSettings();

  return (
    <>
      <MovieHero data={tv} />

      <div className={styles.rows}>
        <div className={styles.rowCol_2}>
          <MovieRow title="Details">
            <DetailRow title="Company">Elo</DetailRow>
            <DetailRow title="Original Name">Elo</DetailRow>
            <DetailRow title="Budget">Elo</DetailRow>
            <DetailRow title="Created by">Elo</DetailRow>
            <DetailRow title="Company">Elo</DetailRow>
            <DetailRow title="Company">Elo</DetailRow>
          </MovieRow>
          <MovieRow title="Watch now on">
            <WatchOnNow networks={networks} />
          </MovieRow>
        </div>

        <MovieRow title="Seasons">
          <Carousel responsive={seasonsResponsive} {...settings}>
            {seasons.map((season) => (
              <Season key={season.id} season={season} />
            ))}
          </Carousel>
        </MovieRow>

        <MovieRow title="Cast">
          <Carousel {...settings} responsive={castResponsive}>
            {cast.map((cast) => (
              <Cast key={cast.id} cast={cast} />
            ))}
            <ShowMore linkTo="/" />
          </Carousel>
        </MovieRow>

        {vidoes.length > 0 && (
          <MovieRow title="Videos">
            <Videos videos={vidoes} />
          </MovieRow>
        )}

        <MovieRow title="Similar">
          <Carousel {...settings} responsive={similarResponsive}>
            {similarShows.map((show) => (
              <MovieItem key={show.id} movie={show} type="slider" />
            ))}
            <ShowMore linkTo="/" />
          </Carousel>
        </MovieRow>
      </div>
    </>
  );
}

export default TvSeriesPage;
