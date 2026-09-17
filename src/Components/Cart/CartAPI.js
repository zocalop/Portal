
export const saveCart = async (cart) => {
  const response = await fetch(
    'http://localhost:5000/user/cart',
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
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

export const getCart = async () => {
  const response = await fetch(
    'http://localhost:5000/user/cart',
    {
      credentials: "include"
    }
  );
  if (!response.ok) {
    throw new Error("Failed to load cart.");
  }
  const cart = await response.json();

  return cart;
};
