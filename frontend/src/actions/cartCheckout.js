export const checkOutCart = (data) => {
  return {
    type: "CHECKOUT",
    data: data,
  };
};

export const clearCheckOut = () => {
  return {
    type: "CLEAR_CHECKOUT",
  };
};
