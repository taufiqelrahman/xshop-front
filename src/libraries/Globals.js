'use strict';
import uiStore from '../store/uiStore';

export function getHeader() {
  let header = {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }
  return header;
}

export function getHeaderWithToken() {
  let header = {
                  headers: {                      
                    'Authorization': hasLocalStorage('token') ? '' : 'Bearer ' + uiStore.token,
                    'Content-Type': 'application/json'
                  }
                }
  return header;
}



export function hasLocalStorage(tokenName) {
  if (localStorage.getItem(tokenName) != null) {
    return true;
  }
  return false;
}