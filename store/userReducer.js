const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...action.payload.user };
    case 'REMOVE_USER':
      break;
    default:
      return state;
  }
};

export default userReducer;
