const initialState = {
  open: false,
};
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        open: !state.open
      };
    default:
      return state;
  }
};
export default modalReducer;
