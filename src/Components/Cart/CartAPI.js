
export const saveCart = async (cart) => {
  const response = await fetch(
    'http://localhost:5000/user/cart',
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

export const getCart = async () => {
  const response = await fetch(
    'http://localhost:5000/user/cart'
  );
  if (!response.ok) {
    throw new Error("Failed to load cart.");
  }
  const user = await response.json();
  return user.cart;
};
