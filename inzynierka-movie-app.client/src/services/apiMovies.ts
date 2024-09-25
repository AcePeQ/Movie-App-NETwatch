export async function getMovies() {
  try {
    const resPopular = await fetch("/Home/GetPopularMovies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataPopular = await resPopular.json();

    const resNowPlaying = await fetch("/Home/GetNowPlayingMovies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataNowPlaying = await resNowPlaying.json();

    const resTopRated = await fetch("/Home/GetTopRatedMovies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataTopRated = await resTopRated.json();

    const resTrending = await fetch("/Home/GetTrendingMovies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataTrending = await resTrending.json();

    const popularMovies = dataPopular.results.slice(0, 10);
    const nowPlayingMovies = dataNowPlaying.results.slice(0, 10);
    const topRatedMovies = dataTopRated.results.slice(0, 10);
    const trendingMovies = dataTrending.results.slice(0, 10);

    return { popularMovies, nowPlayingMovies, topRatedMovies, trendingMovies };
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch movies");
  }
}
