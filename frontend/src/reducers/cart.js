const initCart = {
  itemsInCart: 0,
  products: [],
};

const cartReducer = (state = initCart, action) => {
  // Reducer Switch statement Checks the action type and excecute accordingly
  switch (action.type) {
    case "ADD_PRODUCT":
      // Checks if that product allready exist in the cart ?
      if (!state.products.find((item) => item.product.id === action.data.id)) {
        // if not they add that product to the array
        let cart = {
          product: action.data,
          amount: 1,
        };
        state.products.push(cart);
      } else {
        //  else it increses the amount on that product
        state.products.forEach((item, index) => {
          if (item.product.id === action.data.id) {
            state.products[index].amount++;
          }
        });
      }
      //  Return the new modified state and increses the total items in cart by 1
      return {
        ...state,
        itemsInCart: state.itemsInCart + 1,
      };
     // -----------------------------------------------------------------------------------------
    case "REMOVE_PRODUCT":
      let amount = state.products[action.data].amount;
      // checks if the product.amount is bigger than 1
      if (amount > 1) {
        // if so remove 1 from thats products amount
        state.itemsInCart--;
        state.products[action.data].amount--;
      } else {
        // else remove the whloe product from the array
        state.products.splice(action.data, 1);
        state.itemsInCart--;
      }
      //  Return the new modified state
      return {
        ...state,
      };
    // -----------------------------------------------------------------------------------------
    case "CLEAR_CART":
      // clear the cart to its original state
      state.itemsInCart = 0;
      state.products = [];
      return state;
    //  Return the new modified state
    // -----------------------------------------------------------------------------------------
    default:
      return state;
  }
};

export default cartReducer;
