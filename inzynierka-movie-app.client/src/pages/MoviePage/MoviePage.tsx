import styles from "./MoviePage.module.css";
import MovieHero from "../../features/Movie/MovieHero/MovieHero";
import MovieRow from "../../features/Movie/MovieRow/MovieRow";
import { useParams } from "react-router-dom";
import { useMovieID } from "../../features/Movie/useMovieID";
import Carousel from "react-multi-carousel";
import {
  movieMobileSettings,
  movieSettings,
  sliderCastSettings,
  sliderSimilarSettings,
} from "../../helpers/sliderSettings";
import Cast from "../../features/Movie/Cast/Cast";
import ShowMore from "../../ui/ShowMore/ShowMore";
import { useMediaQuery } from "react-responsive";
import Videos from "../../features/Movie/Video/Videos";
import MovieItem from "../../features/Homepage/RowList/MovieItem/MovieItem";
import DetailRow from "../../features/Movie/MovieHero/DetailRow/DetailRow";
import { BASE_URL_W500 } from "../../helpers/getBaseUrl";
import { convertLanguageISO } from "../../helpers/formatISO";
import Loading from "../../ui/Loading/Loading";

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

  const vidoes = data?.videos?.results
    ?.filter(
      (video) =>
        (video.type === "Teaser" || video.type === "Trailer") &&
        video.official === true &&
        video.site === "YouTube"
    )
    .slice(0, 6);

  const cast = data?.credits?.cast
    ?.filter((person) => person.known_for_department === "Acting")
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

export default MoviePage;
