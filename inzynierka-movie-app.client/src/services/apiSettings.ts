import { UserSettings } from "../utils/types";

export async function updateSettingsApi(settings: UserSettings, token: string) {
  try {
    const res = await fetch(`/Users/UpdateSettings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(settings),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error);
    }
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}

export async function deleteAccountApi(token: string) {
  try {
    const res = await fetch(`/Users/DeleteAccount`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
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
