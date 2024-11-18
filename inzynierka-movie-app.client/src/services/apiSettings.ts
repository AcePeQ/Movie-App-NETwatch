import { UserSettings } from "../utils/types";

export async function updateSettingsApi(settings: UserSettings, token: string) {
  try {
    const res = await fetch(`/Users/UpdateSettings`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
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
