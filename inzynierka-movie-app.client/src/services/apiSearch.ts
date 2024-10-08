export async function getSearch(query) {
  try {
    const res = await fetch(`/Search/GetSearch/${query}`);
    const data = await res.json();

    const searchData = data.results.filter(
      (item) => item.media_type !== "person"
    );

    return searchData;
  } catch (err) {
    console.log(err);
  }
}
