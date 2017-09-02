'use strict';

const ENV = 'DEV';
let API, IMAGE = '';

const DEV_URL = 'http://localhost:8007';
const PROD_URL = 'https://taufiqelrahman.com';

switch(ENV) {
  case 'DEV':
    API = DEV_URL + '/api';
    IMAGE = DEV_URL;
    break;
  case 'PROD':
    API = PROD_URL + '/api';
    IMAGE = PROD_URL;
    break;
}

const Config = {
  APP_TITLE: 'Dingo Shop',
  IMAGE: IMAGE,
  
  LOGIN: API + '/auth/login',
  SIGNUP: API + '/auth/signup',
  CURRENT_USER: API + '/currentuser',

  PRODUCTS: API + '/products',
  CART: API + '/cart',
  CART_POSTLOGIN: API + '/cart/postLogin',
  CART_UPDATE: API + '/cart/update'
}

export default Config;