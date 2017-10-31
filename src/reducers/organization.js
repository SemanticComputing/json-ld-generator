const INITIAL_STATE = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: '',
  url: '',
  logo: ''
};

const organization = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_ORGANIZATION':
      return Object.assign({}, state, action.organization);
    default:
      return state;
  }
};

export default organization;
