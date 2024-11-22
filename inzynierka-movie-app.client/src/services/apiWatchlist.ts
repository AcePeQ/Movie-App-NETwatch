export async function getModalMovieApi(id: number, isMovie: boolean) {
  try {
    const res = await fetch(`/Movie/GetModalMovie/?type=${isMovie}&id=${id}}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(
        "Something goes wrong with fethcing modal movie informations"
      );
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}
