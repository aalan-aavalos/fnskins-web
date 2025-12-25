// /lib/api.ts
export const API_BASE_URL = process.env.API_BASE_URL!;

export async function apiLogin(email: string, password: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    // const payload = json.data ?? json;
    // const accessToken = payload.accessToken ?? payload.token;
    // const expiresIn = payload.expiresIn ?? 1800;
    // const user = payload.user ?? payload;

    // return { accessToken, expiresIn, user };

    return res.json();
  } catch (error) {
    throw error;
  }
}
