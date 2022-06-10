import { combineReducers } from 'redux';
import { questReducer } from './questReducer';
import {answerReducer} from './answerReducer';

export const rootReducer = combineReducers({
  themes: questReducer,
  score: answerReducer,
});
