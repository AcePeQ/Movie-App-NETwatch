export async function getAllTypes() {
  try {
    const res = await fetch("/Home/GetAllTypesTrending", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Something goes wrong with fethcing TV series");
    }

    const data = await res.json();

    const allTypesTrending = data.results.slice(0, 5);

    return { allTypesTrending };
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}
