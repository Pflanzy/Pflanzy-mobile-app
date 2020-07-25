const initialState = {
  plants: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...action.payload.user };
    case 'UPDATE_USER':
      return { ...state, plants: action.payload.plants };
    case 'REMOVE_USER':
      break;
    case 'ADD_PLANT':
      return {
        ...state,
        plants: [...state.plants, action.payload.plant],
      };
    default:
      return state;
  }
};

export default userReducer;
