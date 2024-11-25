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
  movie: WatchListUser;
  token: string;
}) {
  try {
    const res = await fetch(`/Watchlist/AddMovie`, {
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

export async function deleteMovieApi(dataPassed: {
  id: string;
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

interface MovieType {
  id: number;
  user_status: string;
  user_rating: number;
  watched_episodes: number;
}

export async function updateMovieApi(dataPassed: {
  movie: MovieType;
  token: string;
}) {
  try {
    const res = await fetch(`/Watchlist/DeleteMovie`, {
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

export async function getUserWatchlistApi(username: string) {
  try {
    const res = await fetch(`/Watchlist/DeleteMovie/${username}`, {
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
