// src/js/actions/index.js
import { ADD_ARTICLE } from "../constants/action-types";

let baseUrl='https://ri7la-tech.com/rehlatech_sep/cruise/index.php/ar/mobile/',
headers= {
	'Content-Type': 'application/json',
	'Accept': 'application/json',
	'api':'9660c173205efca195c9c7d2d579b054'
}
export function addArticle(payload) {
  return { type:ADD_ARTICLE, payload }
};