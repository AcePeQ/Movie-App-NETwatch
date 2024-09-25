import Hero from "../../features/Homepage/Home/Hero/Hero";
import MovieItem from "../../features/Homepage/RowList/MovieItem/MovieItem";
import MovieItemTop from "../../features/Homepage/RowList/MovieItemTop/MovieItemTop";
import RowList from "../../features/Homepage/RowList/RowList";
import { useMovies } from "../../features/Homepage/useMovies";

function Home() {
  const {
    data: movies,
    isError: isErrorMovie,
    isPending: isPendingMovie,
    error: errorMovie,
  } = useMovies();

  if (isPendingMovie) {
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
    </>
  );
}

export default Home;
