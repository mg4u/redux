// src/js/middleware/index.js

import { ADD_ARTICLE,LOGIN } from "../constants/action-types";
const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next){
    return function(action){
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        
        if (action.payload.title.length==0) {
          return dispatch({ type: "ERROR",payload:{message:"Empty Text"} });
        }
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: "ERROR",payload:{message:"bad word"} });
        }
      }
      if (action.type === LOGIN) {
       console.log('middleware action.type',action.type,action.payload)
        if (action.payload.email.length==0||action.payload.password.length==0) {
          return dispatch({ type: "ERROR",payload:{message:"Please Insert Login info"} });
        }
        const foundWord = forbiddenWords.filter(word =>
          action.payload.email.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: "ERROR",payload:{message:"bad word"} });
        }
      }
      return next(action);
    }
  }
}

export default forbiddenWordsMiddleware;