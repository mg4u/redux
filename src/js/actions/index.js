// src/js/actions/index.js
import { baseUrl,headers,ADD_ARTICLE,ERROR,GET_ARTICLES,LOGIN,DO_LOGIN } from "../constants/action-types";

export function login(payload) {
  return { type:LOGIN, payload }
};
export function doLogin(payload) {
	// console.log('headers',headers)
  return function(dispatch) {
    return fetch(baseUrl+"login",{
    	headers:headers,
    	method:'POST'
    })
      .then(response => response.json())
      .then(json => {
      	console.log('do login',json)
        dispatch({ type: DO_LOGIN, payload: json });
      });
  };
}
export function getArticles() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
      	console.log('onloine',json)
        dispatch({ type: "GET_ARTICLES", payload: json });
      });
  };
}

export function addArticle(payload) {
  return { type:ADD_ARTICLE, payload }
};

export function forbiddenWord(payload) {
  return { type:ERROR, payload }
};