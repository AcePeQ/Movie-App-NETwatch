import { ItemType } from "../utils/types";

export async function getSearch(query: string, signal: AbortSignal) {
  try {
    const res = await fetch(`/Search/GetSearch/${query}`, { signal });

    if (!res.ok) {
      throw new Error("Something went wrong with fetching searched results");
    }

    const data = await res.json();

    const searchData = data.results.filter(
      (item: ItemType) => item.media_type !== "person"
    );

    return searchData;
  } catch (error) {
    if ((error as Error).name === "AbortError") {
      return null;
    }
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}
