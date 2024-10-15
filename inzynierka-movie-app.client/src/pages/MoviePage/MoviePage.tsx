import styles from "./MoviePage.module.css";

import MovieHero from "../../features/Movie/MovieHero/MovieHero";
import MovieRow from "../../features/Movie/MovieRow/MovieRow";
import Carousel from "react-multi-carousel";
import Cast from "../../features/Movie/Cast/Cast";
import ShowMore from "../../ui/ShowMore/ShowMore";
import Videos from "../../features/Movie/Video/Videos";
import MovieItem from "../../features/Homepage/RowList/MovieItem/MovieItem";
import DetailRow from "../../features/Movie/MovieHero/DetailRow/DetailRow";
import Loading from "../../ui/Loading/Loading";
import ErrorFull from "../../ui/Error/ErrorFullPage/ErrorFullPage";

import { useParams } from "react-router-dom";
import { useMovieID } from "../../features/Movie/useMovieID";
import {
  movieMobileSettings,
  movieSettings,
  sliderCastSettings,
  sliderSimilarSettings,
} from "../../helpers/sliderSettings";
import { useMediaQuery } from "react-responsive";
import { BASE_URL_W500 } from "../../helpers/getBaseUrl";
import { convertLanguageISO } from "../../helpers/formatISO";

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

function MoviePage() {
  const { id } = useParams();
  const { data, error, isError, isPending } = useMovieID(id);

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

  const vidoes = data?.videos?.results
    ?.filter(
      (video: Video) =>
        (video.type === "Teaser" || video.type === "Trailer") &&
        video.official === true &&
        video.site === "YouTube"
    )
    .slice(0, 6);

  const cast = data?.credits?.cast
    ?.filter((person: Cast) => person.known_for_department === "Acting")
    .slice(0, 9);

  const similarShows = data?.similar?.results;

  const movie = data?.movie;

  const { production_companies, homepage, original_language } = data.movie;

  const similarResponsive = sliderSimilarSettings();
  const castResponsive = sliderCastSettings();

  return (
    <>
      <MovieHero data={movie} />

      <div className={styles.rows}>
        <div className={styles.rowCol_2}>
          <MovieRow title="Details">
            <>
              {production_companies.length >= 1 && (
                <DetailRow title="Company">
                  {production_companies[0].name}
                </DetailRow>
              )}
              <DetailRow title="Original Language">
                <span className={styles.language}>
                  {convertLanguageISO(original_language)}
                </span>
              </DetailRow>
              <DetailRow title="Network">
                <a href={homepage}>
                  <img
                    className={styles.networkImage}
                    src={`${BASE_URL_W500}${production_companies[0].logo_path}`}
                  />
                </a>
              </DetailRow>
            </>
          </MovieRow>
          <MovieRow title="Watch now on">
            <span>Elo</span>
          </MovieRow>
        </div>

        <MovieRow title="Cast">
          <Carousel {...settings} responsive={castResponsive}>
            {cast.map((cast: Cast) => (
              <Cast key={cast.id} cast={cast} />
            ))}
            <ShowMore linkTo={`/movie/${id}/cast`} />
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

export default MoviePage;
