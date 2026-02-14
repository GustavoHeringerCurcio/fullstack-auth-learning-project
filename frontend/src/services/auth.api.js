const API_URL = import.meta.env.VITE_API_URL;


//Login Fetch API
export async function loginUser(email, password) {
  const res = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json().catch(() => ({}));

  if (!data.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data; // { ok, message }
}


//Register Fetch API 
export async function registerUser({ name, email, password, confirmPassword, acceptedTerms }) {
    const res = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            name,
            email,
            password,
            confirmPassword,
            acceptedTerms,
        })
    })

    const data = await res.json().catch(() => ({}))

    if (!data.ok) {
        throw new Error(data.message || "Register failed")
    }

    return data; // { ok, message }
}