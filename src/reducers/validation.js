const INITIAL_STATE = {
  organization: {},
  article: {}
};

const validation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'VALIDATE_ORGANIZATION':
      return Object.assign({}, state, { organization: action.organization });
    case 'VALIDATE_ARTICLE':
      return Object.assign({}, state, { article: action.article });
    default:
      return state;
  }
};

export default validation;
