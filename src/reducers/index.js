import { combineReducers } from 'redux';
import organization from './organization';
import validation from './validation';

const reducer = combineReducers({
  organization,
  validation
});

export default reducer;
