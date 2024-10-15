export async function getCredits(
  type: string | undefined,
  id: string | undefined
) {
  try {
    if (type !== "movie" && type !== "tv") {
      throw new Error("Invalid type. Accept only movie or tv values");
    }

    const res = await fetch(`/Credits/GetCredits/?type=${type}&id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Something goes wrong with fethcing Credits");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
