import { WatchListUser } from "../utils/types";

export async function getModalMovieApi(id: number, isMovie: boolean) {
  try {
    const res = await fetch(
      `/Movie/GetModalMovie/?isMovie=${isMovie}&id=${id}}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      throw new Error(
        "Something goes wrong with fethcing modal movie informations"
      );
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}

export async function addMovieApi(dataPassed: {
  selectedMovie: WatchListUser;
  token: string;
}) {
  try {
    console.log(dataPassed);

    const res = await fetch(`/Watchlist/AddMovie`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataPassed.token}`,
      },
      method: "POST",
      body: JSON.stringify(dataPassed.selectedMovie),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}

export async function deleteMovieApi(dataPassed: {
  id: number;
  token: string;
}) {
  try {
    const res = await fetch(`/Watchlist/DeleteMovie`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataPassed.token}`,
      },
      method: "POST",
      body: JSON.stringify({ id: dataPassed.id }),
    });

    console.log(res);

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}

interface MovieType {
  id: number;
  user_status: string | undefined;
  user_rating: number | undefined | null;
  watched_episodes: number | undefined;
}

export async function updateMovieApi(dataPassed: {
  movie: MovieType;
  token: string;
}) {
  try {
    const res = await fetch(`/Watchlist/UpdateMovie`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataPassed.token}`,
      },
      method: "POST",
      body: JSON.stringify(dataPassed.movie),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}

export async function getUserWatchlistApi(username: string | undefined) {
  try {
    const res = await fetch(`/Watchlist/GetUserWatchlist/${username}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}
