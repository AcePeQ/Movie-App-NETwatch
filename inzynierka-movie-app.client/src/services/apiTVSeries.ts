import { ItemType } from "../utils/types";

export async function getTVSeries() {
  try {
    const res = await fetch("/Home/GetTVSeries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Something goes wrong with fethcing TV series");
    }

    const data = await res.json();

    const popularTVSeries = data.popular.results
      .filter((item: ItemType) => item.vote_count > 10)
      .slice(0, 10);
    const topRatedTVSeries = data.topRated.results
      .filter((item: ItemType) => item.vote_count > 75)
      .slice(0, 10);
    const trendingTVSeries = data.trending.results
      .filter((item: ItemType) => item.vote_count > 75)
      .slice(0, 10);

    return { popularTVSeries, topRatedTVSeries, trendingTVSeries };
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}

export async function getTVSeriesID(id: string | null | undefined) {
  try {
    const res = await fetch(`/Movie/GetTVSeries/${id}`, {
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
