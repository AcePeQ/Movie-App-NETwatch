export async function getMovieProviders(region: string) {
  try {
    const res = await fetch(`/Lists/GetMovieWatchProviders/${region}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(
        "Something goes wrong with fethcing region movie providers"
      );
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}

export async function getTVSeriesProviders(region: string) {
  try {
    const res = await fetch(`/Lists/GetTVSeriesWatchProviders/${region}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(
        "Something goes wrong with fethcing region tv series providers"
      );
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}
