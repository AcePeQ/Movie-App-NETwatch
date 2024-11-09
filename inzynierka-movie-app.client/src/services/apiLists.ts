export async function getListFilms(
  type: string,
  url: string,
  pageParam: number,
  signal: AbortSignal
) {
  if (!url) return null;

  try {
    let typeFilm;
    if (type === "movie") typeFilm = "Movies";
    if (type === "tvSeries") typeFilm = "TVSeries";

    const res = await fetch(
      `/Lists/GetList${typeFilm}/${url}/?page=${pageParam}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal,
      }
    );

    if (!res.ok) {
      throw new Error(
        "Something goes wrong with fethcing list movies or tv series"
      );
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}

export async function getRegions() {
  try {
    const res = await fetch(`/Lists/GetRegions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Something goes wrong with fethcing filter regions");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}

export async function getMovieGenres() {
  try {
    const res = await fetch(`/Lists/GetMovieGenres`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Something goes wrong with fethcing movie genres");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}

export async function getTVSeriesGenres() {
  try {
    const res = await fetch(`/Lists/GetTVSeriesGenres`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Something goes wrong with fethcing tv series genres");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}
