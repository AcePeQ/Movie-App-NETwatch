import Hero from "../../features/Homepage/Home/Hero/Hero";
import MovieItem from "../../features/Homepage/RowList/MovieItem/MovieItem";
import MovieItemTop from "../../features/Homepage/RowList/MovieItemTop/MovieItemTop";
import RowList from "../../features/Homepage/RowList/RowList";
import Loading from "../../ui/Loading/Loading";
import { useAllTypes } from "../../features/Homepage/useAllTypes";
import { useMovies } from "../../features/Homepage/useMovies";
import { useTVSeries } from "../../features/Homepage/useTVSeries";
import ErrorFull from "../../ui/Error/ErrorFullPage/ErrorFullPage";

function Home() {
  const {
    data: movies,
    isError: isErrorMovie,
    isPending: isPendingMovie,
    error: errorMovie,
  } = useMovies();

  const {
    data: tvSeries,
    isError: isErrorTVSeries,
    isPending: isPendingTVSeries,
    error: errorTVSeries,
  } = useTVSeries();

  const {
    isError: isAllTypesError,
    error: allTypesError,
    isPending: isAllTypesPending,
    data: allTypes,
  } = useAllTypes();

  if (isPendingMovie || isPendingTVSeries || isAllTypesPending) {
    return <Loading />;
  }

  if (isErrorMovie || isErrorTVSeries || isAllTypesError) {
    const error: Error | null = errorMovie && errorTVSeries && allTypesError;
    return <ErrorFull error={error} />;
  }

  return (
    <>
      <Hero items={allTypes?.allTypesTrending} />

      <RowList
        title="Top Movies Now"
        items={movies?.trendingMovies}
        render={(movie, index) => (
          <MovieItemTop key={movie.id} movie={movie} number={index + 1} />
        )}
      />

      <RowList
        title="Top TV Series Now"
        items={tvSeries?.trendingTVSeries}
        render={(movie, index) => (
          <MovieItemTop key={movie.id} movie={movie} number={index + 1} />
        )}
      />

      <RowList
        title="New Movies"
        items={movies?.nowPlayingMovies}
        render={(movie) => (
          <MovieItem key={movie.id} type="slider" movie={movie} />
        )}
      />

      <RowList
        title="Trending Movies"
        items={movies?.popularMovies}
        render={(movie) => (
          <MovieItem key={movie.id} type="slider" movie={movie} />
        )}
      />

      <RowList
        title="Trending TV Series"
        items={tvSeries?.popularTVSeries}
        render={(movie) => (
          <MovieItem key={movie.id} type="slider" movie={movie} />
        )}
      />

      <RowList
        title="Top Rated Movies Ever"
        items={movies?.topRatedMovies}
        render={(movie) => (
          <MovieItem key={movie.id} type="slider" movie={movie} />
        )}
      />

      <RowList
        title="Top Rated TV Series Ever"
        items={tvSeries?.topRatedTVSeries}
        render={(movie) => (
          <MovieItem key={movie.id} type="slider" movie={movie} />
        )}
      />
    </>
  );
}

export default Home;
