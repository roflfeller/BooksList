import { combineReducers } from 'redux';
import { bookReducer } from './bookReducer/bookReducer';

export const rootReducer = combineReducers({
  book: bookReducer,
});