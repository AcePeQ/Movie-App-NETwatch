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
  console.log(dataPassed);
  try {
    const res = await fetch(`/Watchlist/AddMovie`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataPassed.token}`,
      },
      method: "POST",
      body: JSON.stringify(dataPassed.movie),
    });

    console.log(dataPassed);
    console.log(res);

    if (!res.ok) {
      const error = await res.json();
      console.log(error);
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
