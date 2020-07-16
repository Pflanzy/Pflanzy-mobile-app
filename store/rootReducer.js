const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, user: action.payload.user };
    case 'REMOVE_USER':
      break;
    default:
      return state;
  }
};

export default rootReducer;
