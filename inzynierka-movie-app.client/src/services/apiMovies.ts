interface Item {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: [];
  id: number;
  media_type: string;
  name: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

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

    const popularMovies = data.popular.results
      .filter((item: Item) => item.vote_count > 75)
      .slice(0, 10);
    const nowPlayingMovies = data.nowPlaying.results
      .filter((item: Item) => item.vote_count > 75)
      .slice(0, 10);
    const topRatedMovies = data.topRated.results
      .filter((item: Item) => item.vote_count > 75)
      .slice(0, 10);
    const trendingMovies = data.trending.results
      .filter((item: Item) => item.vote_count > 75)
      .slice(0, 10);

    return { popularMovies, nowPlayingMovies, topRatedMovies, trendingMovies };
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}

export async function getMovieID(id: string) {
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
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}
