export async function getTVSeries() {
  try {
    const resPopular = await fetch("/Home/GetPopularTVSeries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataPopular = await resPopular.json();

    const resTopRated = await fetch("/Home/GetTopRatedTVSeries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataTopRated = await resTopRated.json();

    const resTrending = await fetch("/Home/GetTrendingTVSeries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataTrending = await resTrending.json();

    const popularTVSeries = dataPopular.results.slice(0, 10);
    const topRatedTVSeries = dataTopRated.results.slice(0, 10);
    const trendingTVSeries = dataTrending.results.slice(0, 10);

    return { popularTVSeries, topRatedTVSeries, trendingTVSeries };
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch movies");
  }
}
