export default (store = {}, { type, payload }) => {
  switch (type) {
    case 'LOGIN': {
      return payload;
    }
    case 'LOGOUT': {
      return null;
    }
    default: {
      return store;
    }
  }
};
