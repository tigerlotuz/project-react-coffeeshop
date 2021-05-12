const initCheckOut = {
  totalSum: 0,
  totalItems: 0,
  orderNumber: "",
  date: "",
};

const cartCheckOutReducer = (state = initCheckOut, action) => {
  switch (action.type) {
    case "CHECKOUT":
      if (action.data.totalItems > 0) {
        let date = new Date();
        state.totalSum = action.data.totalPrice;
        state.totalItems = action.data.totalItems;
        state.orderNumber = "#AB" + Math.floor(Math.random() * 10000000);
        state.date = `${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()}`;
      }

      return {
        ...state,
      };
    case "CLEAR_CHECKOUT":
      state = initCheckOut;

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default cartCheckOutReducer;
