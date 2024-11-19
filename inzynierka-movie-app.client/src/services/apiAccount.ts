export async function getAccount(
  username: string | undefined,
  userID: string | null | undefined = ""
) {
  try {
    const res = await fetch(`/Users/GetUser/${username}?userID=${userID}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error);
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}
