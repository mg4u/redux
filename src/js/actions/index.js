// src/js/actions/index.js
import axios from 'axios';

import { baseUrl,headers,ADD_ARTICLE,ERROR,GET_ARTICLES,LOGIN,DO_LOGIN } from "../constants/action-types";

export function login(payload) {
  return { type:LOGIN, payload }
};
export function doLogin(payload) {
	console.log('headers',headers)
  return function(dispatch) {
    return fetch(baseUrl+"cashier",{
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

let getRequest=async (options)=>{
  return async (dispatch) => {
    if(typeof axios==undefined){
      return false
    }
      console.log("baseUrl+'/cashier'",baseUrl+'cashier')
      try{
        let data=options.data?options.data:{},
        method=options.method?options.method:'post',
        config={
          method:method,
          baseURL:baseUrl,
          url:options.url?options.url:'cashier',
          headers: headers,
          onUploadProgress: function (progressEvent) {
            console.log('onUploadProgress progressEvent ',progressEvent)
            // Do whatever you want with the native progress event
          },
          onDownloadProgress: function (progressEvent) {
            console.log('onDownloadProgress progressEvent ',progressEvent)
            // Do whatever you want with the native progress event
          },
        }
        if(method=='get'){
          config.params=data
        }else{
          config.data=data
        }
        console.log(config)
        const request= await axios(config);
        console.log('request',request)
        /*then(function (response){
          console.log(response);
            RNProgressHud.dismiss()
           if(response.status==200){
            console.log(response.data.data);
            console.log(response.data.api_token);
             // dispatch({type:DO_LOGIN_SUCCESS,payload:{userdata:response.data.info}})
             dispatch({type:DO_LOGIN_SUCCESS,payload:{user_data:response.data.info}})
             // dispatch({type:API_TOKEN,payload:{api_token:response.api_token})
             
           }else if(response.error&&response.error[0]&&response.error[0].EmailOrPassword){
             ErrorAction(dispatch,response.error[0].EmailOrPassword);
           }else{
             ErrorAction(dispatch,L('pleaseInsertAllInfo'));
           }
        }).*/
      } catch (error) {
        console.log('error',error.response)
        // handle error
        alert('Request error')
      }
    };
}