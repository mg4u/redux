// src/js/reducers/index.js

import { ADD_ARTICLE,ERROR,GET_ARTICLES,LOGIN,DO_LOGIN } from "../constants/action-types";
const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  	state.message=''
  if (action.type === LOGIN) {
    return {...state,...action.payload}
  }
  if (action.type === DO_LOGIN) {
  	console.log(' reducer do login',action.type,action)
    return {...state,...action.payload}
  }
  if (action.type === GET_ARTICLES) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      message:""
    });
  }
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      message:""
    });
  }
  if (action.type === ERROR) {
  	// console.log('ERROR',action.payload)
  	return {...state,...action.payload};
  }
  return state
  // return {...state,...action.payload};
}


export default rootReducer;