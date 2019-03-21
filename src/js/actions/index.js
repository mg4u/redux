// src/js/actions/index.js
import { baseUrl,headers,ADD_ARTICLE,FOUND_BAD_WORD } from "../constants/action-types";


export function addArticle(payload) {
  return { type:ADD_ARTICLE, payload }
};

export function forbiddenWord(payload) {
  return { type:FOUND_BAD_WORD, payload }
};