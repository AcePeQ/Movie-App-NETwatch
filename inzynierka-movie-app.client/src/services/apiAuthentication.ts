import { RegisterAccountTypes } from "../utils/types";

export async function createAccountApi(registerData: RegisterAccountTypes) {
  try {
    const res = await fetch(`/Users/Register`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(registerData),
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
