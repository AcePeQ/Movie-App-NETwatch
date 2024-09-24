import Hero from "../../features/Homepage/Home/Hero/Hero";
import MovieItem from "../../features/Homepage/RowList/MovieItem/MovieItem";
import MovieItemTop from "../../features/Homepage/RowList/MovieItemTop/MovieItemTop";
import RowList from "../../features/Homepage/RowList/RowList";
import { useMovies } from "../../features/Homepage/useMovies";

function Home() {
  const { data, isError, isPending, error } = useMovies();

  console.log(data, isError, isPending, error);
  if (isPending) {
    return "Loading...";
  }

  return (
    <>
      <Hero />
      <RowList
        title="New Movies"
        items={data.nowPlayingMovies}
        render={(movie) => (
          <MovieItem key={movie.id} type="slider" movie={movie} />
        )}
      />

      <RowList
        title="Top Rated Movies Ever"
        items={data?.topRatedMovies}
        render={(movie) => (
          <MovieItem key={movie.id} type="slider" movie={movie} />
        )}
      />

      <RowList
        title="Top Movies Now"
        items={data.popularMovies}
        render={(movie, index) => (
          <MovieItemTop key={movie.id} movie={movie} number={index + 1} />
        )}
      />
    </>
  );
}

export default Home;
