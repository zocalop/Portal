
export const saveSI = async (si) => {
  const response = await fetch(
    'http://localhost:5000/user/si',
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        si
      })
    }
  );

  if (!response.ok) {
    throw new Error("Failed to save Stranger Inventory");
  }

  return response.json();
};

export const getSI = async () => {
  const response = await fetch(
    'http://localhost:5000/user/si',
    {
      credentials: "include"
    }
  );
  if (!response.ok) {
    throw new Error("Failed to load Stranger Inventory");
  }
  const si = await response.json();

  return si;
};
