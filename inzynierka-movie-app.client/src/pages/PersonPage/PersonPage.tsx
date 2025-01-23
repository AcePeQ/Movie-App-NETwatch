import { useParams } from "react-router-dom";
import { usePerson } from "../../features/Person/usePerson";
import Loading from "../../ui/Loading/Loading";
import ErrorFull from "../../ui/Error/ErrorFullPage/ErrorFullPage";
import PersonHero from "../../features/Person/PersonHero/PersonHero";
import MovieRow from "../../features/Movie/MovieRow/MovieRow";
import Carousel from "react-multi-carousel";
import MovieItem from "../../features/Homepage/RowList/MovieItem/MovieItem";

import {
  movieMobileSettings,
  movieSettings,
  sliderSimilarSettings,
} from "../../helpers/sliderSettings";
import { useMediaQuery } from "react-responsive";

import styles from "./PersonPage.module.css";
import "react-multi-carousel/lib/styles.css";
import { CardItem, FullCastType } from "../../utils/types";

function PersonPage() {
  const { id } = useParams();
  const { data, isPending, isError, error } = usePerson(id);

  const isMediumDevice = useMediaQuery({
    query: "(max-width: 1085px)",
  });

  const settings = !isMediumDevice ? movieSettings() : movieMobileSettings();
  const responsive = sliderSimilarSettings();

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorFull error={error} />;
  }

  const combinedTypes = data.combined_credits.cast
    .concat(data.combined_credits.crew)
    .filter(
      (item: FullCastType, index: number, array: FullCastType[]) =>
        index === array.findIndex((m) => m.id === item.id)
    )
    .sort((a: FullCastType, b: FullCastType) => b.popularity - a.popularity);

  const movies = combinedTypes.filter(
    (movie: FullCastType) => movie.media_type === "movie"
  );
  const tvSeries = combinedTypes.filter(
    (tvSerie: FullCastType) => tvSerie.media_type === "tv"
  );

  return (
    <>
      <PersonHero data={data} />

      <div className={styles.rows}>
        {movies.length > 0 && (
          <MovieRow title="Known for movies">
            <Carousel {...settings} responsive={responsive}>
              {movies.map((show: CardItem) => (
                <MovieItem key={show.id} movie={show} />
              ))}
            </Carousel>
          </MovieRow>
        )}

        {tvSeries.length > 0 && (
          <MovieRow title="Known for TV Series">
            <Carousel {...settings} responsive={responsive}>
              {tvSeries.map((show: CardItem) => (
                <MovieItem key={show.id} movie={show} />
              ))}
            </Carousel>
          </MovieRow>
        )}
      </div>
    </>
  );
}

export default PersonPage;
