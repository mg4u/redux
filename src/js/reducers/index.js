// src/js/reducers/index.js

import { ADD_ARTICLE,FOUND_BAD_WORD } from "../constants/action-types";
const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      message:""
    });
  }
  if (action.type === FOUND_BAD_WORD) {
  	// console.log('FOUND_BAD_WORD',action.payload)
  	return {...state,...action.payload};
  }
  return state
  // return {...state,...action.payload};
}


export default rootReducer;