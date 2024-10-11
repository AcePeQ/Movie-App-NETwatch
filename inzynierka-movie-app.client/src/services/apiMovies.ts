export async function getMovies() {
  try {
    const res = await fetch("/Home/GetMovies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Something goes wrong with fethcing TV series");
    }
    const data = await res.json();

    const popularMovies = data.popular.results.slice(0, 10);
    const nowPlayingMovies = data.nowPlaying.results.slice(0, 10);
    const topRatedMovies = data.topRated.results.slice(0, 10);
    const trendingMovies = data.trending.results.slice(0, 10);

    return { popularMovies, nowPlayingMovies, topRatedMovies, trendingMovies };
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
}

export async function getMovieID(id) {
  try {
    const res = await fetch(`/Movie/GetMovie/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Something goes wrong with fethcing TV series");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
}
