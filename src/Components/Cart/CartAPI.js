
export const saveCart = async (user_id, cart) => {
  const response = await fetch(
    `http://localhost:5000/user/${user_id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cart
      })
    }
  );

  if (!response.ok) {
    throw new Error("Failed to save cart.");
  }

  return response.json();
};

export const getCart = async (user_id, cart) => {
  const response = await fetch(
    `http://localhost:5000/user/${user_id}`
  );
  if (!response.ok) {
    throw new Error("Failed to load cart.");
  }
  const user = await response.json();
  return user.cart;
};
