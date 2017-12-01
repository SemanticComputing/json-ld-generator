const INITIAL_STATE = {
  '@context': 'http://schema.org',
  '@type': 'Article',
  headline: '',
  description: '',
  url: '',
  image: '',
  author: '',
  publisher: '',
};

const article = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_ARTICLE':
      return Object.assign({}, state, action.article);
    default:
      return state;
  }
};

export default article;
