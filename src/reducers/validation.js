const INITIAL_STATE = {};

const validation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'VALIDATE_ORGANIZATION':
      return Object.assign({}, state, action.organization);
    default:
      return state;
  }
};

export default validation;
