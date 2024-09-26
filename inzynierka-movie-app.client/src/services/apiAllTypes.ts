export async function getAllTypes() {
  try {
    const res = await fetch("/Home/GetAllTypesTrending", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    const allTypesTrending = data.results.slice(0, 5);

    return { allTypesTrending };
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch movies");
  }
}
