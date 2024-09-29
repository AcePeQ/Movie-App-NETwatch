export async function getTVSeries() {
  try {
    const res = await fetch("/Home/GetTVSeries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    const popularTVSeries = data.popular.results.slice(0, 10);
    const topRatedTVSeries = data.topRated.results.slice(0, 10);
    const trendingTVSeries = data.trending.results.slice(0, 10);

    return { popularTVSeries, topRatedTVSeries, trendingTVSeries };
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch movies");
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
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch movies");
  }
}
