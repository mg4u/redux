// src/js/constants/action-types.js
export const baseUrl='http://t8.someotherhost.com/inventory/public/api/v1/'
export const headers= {
	'Content-Type': 'application/json',
	'Accept': 'application/json'
}
export const LoginAccount={
	"email":"cashier-gerhold.rhianna@example.org",
	"password":"cashier-gerhold.rhianna@example.org"
}
export const LOGIN = "LOGIN";
export const DO_LOGIN = "DO_LOGIN";
export const DO_LOGIN_SUCCESS = "DO_LOGIN_SUCCESS";
export const GET_ARTICLES = "GET_ARTICLES";
export const ADD_ARTICLE = "ADD_ARTICLE";
export const ERROR = "ERROR";