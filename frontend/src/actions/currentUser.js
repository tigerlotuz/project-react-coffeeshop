export const setCurrentUser = (data) => {
  return {
    type: "SET_CURRENT_USER",
    data: data,
  };
};
export const removeCurrentUser = () => {
  return {
    type: "REMOVE_CURRENT_USER",
  };
};
