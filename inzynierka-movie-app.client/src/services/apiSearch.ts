export async function getSearch(query, signal) {
  try {
    const res = await fetch(`/Search/GetSearch/${query}`, { signal });

    if (!res.ok) {
      throw new Error("Something went wrong with fetching searched results");
    }

    const data = await res.json();

    const searchData = data.results.filter(
      (item) => item.media_type !== "person"
    );

    return searchData;
  } catch (err) {
    if (err.name === "AbortError") {
      return null;
    }
    throw new Error("Something went wrong");
  }
}
