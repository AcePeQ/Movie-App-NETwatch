import styles from "./TvSeriesPage.module.css";

import MovieHero from "../../features/Movie/MovieHero/MovieHero";
import MovieRow from "../../features/Movie/MovieRow/MovieRow";
import WatchOnNow from "../../features/Movie/MovieHero/WatchOnNow/WatchOnNow";
import Videos from "../../features/Movie/Video/Videos";
import Cast from "../../features/Movie/Cast/Cast";
import ShowMore from "../../ui/ShowMore/ShowMore";
import Season from "../../features/Movie/Season/Season";
import MovieItem from "../../features/Homepage/RowList/MovieItem/MovieItem";
import DetailRow from "../../features/Movie/MovieHero/DetailRow/DetailRow";
import Loading from "../../ui/Loading/Loading";
import ErrorFull from "../../ui/Error/ErrorFullPage/ErrorFullPage";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  movieMobileSettings,
  movieSettings,
  sliderCastSettings,
  sliderSeasonsSettings,
  sliderSimilarSettings,
} from "../../helpers/sliderSettings";
import { useMediaQuery } from "react-responsive";
import { BASE_URL_W500 } from "../../helpers/getBaseUrl";
import { convertLanguageISO } from "../../helpers/formatISO";
import { useParams } from "react-router-dom";
import { useTVSeriesID } from "../../features/Movie/useTVSeriesID";

type Video = {
  key: string;
  name: string;
  official: boolean;
  site: string;
  type: string;
};

type Cast = {
  profile_path: string;
  name: string;
  character: string;
  known_for_department: string;
  id: number;
  roles: [];
};

type Show = {
  backdrop_path: string;
  first_air_date: string | null;
  genre_ids: [];
  id: number;
  name: string | null;
  overview: string;
  poster_path: string;
  release_date: string | null;
  title: string | null;
  vote_average: number;
};

type Season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  poster_path: string;
};

function TvSeriesPage() {
  const { id } = useParams();
  const { data, error, isPending, isError } = useTVSeriesID(id);

  const isMediumDevice = useMediaQuery({
    query: "(max-width: 1085px)",
  });

  const settings = !isMediumDevice ? movieSettings() : movieMobileSettings();

  if (isPending) {
    return <Loading />;
  }

  if (!isPending && isError) {
    return <ErrorFull error={error} />;
  }

  const vidoes = data.videos.results
    .filter(
      (video: Video) =>
        (video.type === "Teaser" || video.type === "Trailer") &&
        video.official === true &&
        video.site === "YouTube"
    )
    .slice(0, 6);

  const cast = data.credits.cast
    .filter((person: Cast) => person.known_for_department === "Acting")
    .slice(0, 9);

  const seasons = data.tvseries.seasons;
  const similarShows = data.similar.results;

  const tv = data.tvseries;

  const {
    production_companies,
    homepage,
    created_by,
    networks,
    original_language,
  } = data.tvseries;

  const similarResponsive = sliderSimilarSettings();
  const castResponsive = sliderCastSettings();
  const seasonsResponsive = sliderSeasonsSettings();

  return (
    <>
      <MovieHero data={tv} />

      <div className={styles.rows}>
        <div className={styles.rowCol_2}>
          <MovieRow title="Details">
            <>
              {production_companies.length >= 1 && (
                <DetailRow title="Company">
                  {production_companies[0].name}
                </DetailRow>
              )}
              <DetailRow title="Language">
                <span className={styles.language}>
                  {convertLanguageISO(original_language)}
                </span>
              </DetailRow>
              {created_by.length !== 0 && (
                <DetailRow title="Created by">{created_by[0].name}</DetailRow>
              )}
              <DetailRow title="Network">
                <a href={homepage}>
                  <img
                    className={styles.networkImage}
                    src={`${BASE_URL_W500}${networks[0].logo_path}`}
                  />
                </a>
              </DetailRow>
            </>
          </MovieRow>
          <MovieRow title="Watch now on">
            <WatchOnNow networks={networks} />
          </MovieRow>
        </div>

        <MovieRow title="Seasons">
          <Carousel responsive={seasonsResponsive} {...settings}>
            {seasons.map((season: Season) => (
              <Season key={season.id} season={season} />
            ))}
          </Carousel>
        </MovieRow>

        <MovieRow title="Cast">
          <Carousel {...settings} responsive={castResponsive}>
            {cast.map((cast: Cast) => (
              <Cast key={cast.id} cast={cast} />
            ))}
            <ShowMore linkTo={`/tv/${id}/cast`} />
          </Carousel>
        </MovieRow>

        {vidoes.length > 0 && (
          <MovieRow title="Videos">
            <Videos videos={vidoes} />
          </MovieRow>
        )}

        <MovieRow title="Similar">
          <Carousel {...settings} responsive={similarResponsive}>
            {similarShows.map((show: Show) => (
              <MovieItem key={show.id} movie={show} type="slider" />
            ))}
          </Carousel>
        </MovieRow>
      </div>
    </>
  );
}

export default TvSeriesPage;
