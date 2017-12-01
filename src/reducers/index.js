import { combineReducers } from 'redux';

import annotationType from './annotationType';
import article from './article';
import organization from './organization';
import validation from './validation';

const reducer = combineReducers({
  organization,
  article,
  validation,
  annotationType,
});

export default reducer;
