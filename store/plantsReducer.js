const plantsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANTS':
      return action.payload.plants;
    default:
      return state;
  }
};

export default plantsReducer;
