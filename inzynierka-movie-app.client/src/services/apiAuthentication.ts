import { LoginUser, RegisterUser } from "../utils/types";

export async function createAccountApi(registerData: RegisterUser) {
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

export async function loginAccountApi(loginData: LoginUser) {
  try {
    console.log(loginData);
    const res = await fetch(`/Users/Login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(loginData),
    });

    console.log(res);

    if (!res.ok) {
      const error = await res.json();
      console.log(error);
      throw new Error(error.error);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}
