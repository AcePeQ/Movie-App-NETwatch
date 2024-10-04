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
  sliderCastSettings,
  sliderSeasonsSettings,
  sliderSimilarSettings,
} from "../../helpers/SliderSettings";
import ShowMore from "../../ui/ShowMore/ShowMore";
import Season from "../../features/Movie/Season/Season";
import MovieItem from "../../features/Homepage/RowList/MovieItem/MovieItem";

function TvSeriesPage() {
  const { id } = useParams();
  const { data, error, isPending, isError } = useTVSeriesID(id);

  if (isPending) {
    return "Loading";
  }
  const settings = sliderCastSettings();

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
  console.log(seasons);

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
        <MovieRow title="Watch now on">
          <WatchOnNow networks={networks} />
        </MovieRow>

        <MovieRow title="Seasons">
          <Carousel
            showDots={false}
            containerClass="carousel-cast"
            itemClass="carousel-item-cast"
            responsive={seasonsResponsive}
            arrows={true}
          >
            {seasons.map((season) => (
              <Season key={season.id} season={season} />
            ))}
          </Carousel>
        </MovieRow>

        <MovieRow title="Cast">
          <Carousel
            showDots={false}
            containerClass="carousel-cast"
            itemClass="carousel-item-cast"
            responsive={castResponsive}
            arrows={true}
          >
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
          <Carousel
            showDots={false}
            containerClass="carousel-cast"
            itemClass="carousel-item-cast"
            responsive={similarResponsive}
            arrows={true}
          >
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
