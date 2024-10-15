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

    const popularTVSeries = data.popular.results.slice(0, 10);
    const topRatedTVSeries = data.topRated.results.slice(0, 10);
    const trendingTVSeries = data.trending.results.slice(0, 10);

    return { popularTVSeries, topRatedTVSeries, trendingTVSeries };
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
}

export async function getTVSeriesID(id) {
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
    console.error(error);
    throw new Error("Something went wrong");
  }
}
