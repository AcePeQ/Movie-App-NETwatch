import Hero from "../../features/Homepage/Home/Hero/Hero";
import MovieItem from "../../features/Homepage/RowList/MovieItem/MovieItem";
import MovieItemTop from "../../features/Homepage/RowList/MovieItemTop/MovieItemTop";
import RowList from "../../features/Homepage/RowList/RowList";
import { useMovies } from "../../features/Homepage/useMovies";
import { useTVSeries } from "../../features/Homepage/useTVSeries";

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

  if (isPendingMovie || isPendingTVSeries) {
    return "Loading...";
  }

  return (
    <>
      <Hero />
      <RowList
        title="Top Movies Now"
        items={movies.popularMovies}
        render={(movie, index) => (
          <MovieItemTop key={movie.id} movie={movie} number={index + 1} />
        )}
      />

      <RowList
        title="Top TV Series Now"
        items={tvSeries.popularTVSeries}
        render={(movie, index) => (
          <MovieItemTop key={movie.id} movie={movie} number={index + 1} />
        )}
      />

      <RowList
        title="New Movies"
        items={movies.nowPlayingMovies}
        render={(movie) => (
          <MovieItem
            key={movie.id}
            type="slider"
            movie={movie}
            isMovie={true}
          />
        )}
      />

      <RowList
        title="Trending Movies"
        items={movies.trendingMovies}
        render={(movie) => (
          <MovieItem
            key={movie.id}
            type="slider"
            movie={movie}
            isMovie={true}
          />
        )}
      />

      <RowList
        title="Trending TV Series"
        items={tvSeries.trendingTVSeries}
        render={(movie) => (
          <MovieItem
            key={movie.id}
            type="slider"
            movie={movie}
            isMovie={false}
          />
        )}
      />

      <RowList
        title="Top Rated Movies Ever"
        items={movies.topRatedMovies}
        render={(movie) => (
          <MovieItem
            key={movie.id}
            type="slider"
            movie={movie}
            isMovie={true}
          />
        )}
      />

      <RowList
        title="Top Rated TV Series Ever"
        items={tvSeries.topRatedTVSeries}
        render={(movie) => (
          <MovieItem
            key={movie.id}
            type="slider"
            movie={movie}
            isMovie={false}
          />
        )}
      />
    </>
  );
}

export default Home;
