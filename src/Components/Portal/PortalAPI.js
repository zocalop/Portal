
export const login = async (username, password) => {
  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
      username,
      password
    })
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.text();

};
