export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    data: product,
  };
};

export const removeProduct = (index) => {
  return {
    type: "REMOVE_PRODUCT",
    data: index,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
