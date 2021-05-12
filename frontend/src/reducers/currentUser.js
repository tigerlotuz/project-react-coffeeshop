const initCurrentUser = {
  isLoggedin: false,
  user: {},
};

const currentUserReducer = (state = initCurrentUser, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      state.isLoggedin = true;
      state.user = action.data;

      return state;
    case "REMOVE_CURRENT_USER":
      state.isLoggedin = false
      state.user = {}

      return state;

    default:
      return state;
  }
};

export default currentUserReducer;
