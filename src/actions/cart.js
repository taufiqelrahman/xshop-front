import sweetAlert from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import Config from './../libraries/Config';
import { getHeaderWithToken, hasLocalStorage } from './../libraries/Globals';

import shopStore from '../store/shopStore';
import cartStore from '../store/cartStore';

import axios from 'axios';

export function addToCart(data) {
  data.amount = 1;
  if (hasLocalStorage('Token')) {
    axios.post(Config.CART, data, getHeaderWithToken())
      .then(res => {
        sweetAlert("Success", res.data.message, "success");
        getCartItems();
        // console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  else {
    data.product = shopStore.products.filter(x=>x.id==data.product_id)[0];
    cartStore.addItem(data);
    sweetAlert("Success", 'This item has been successfully added to cart', "success");
    localStorage.setItem('Cart', JSON.stringify(cartStore.items));
    return;
  }
}

export function getCartItems() {
  if (hasLocalStorage('Token')) {
    axios.get(Config.CART, getHeaderWithToken())
      .then(res => {
        cartStore.setItems(res.data.items);
        // console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  else {
    if (hasLocalStorage('Cart')) {
      let items = JSON.parse(localStorage.getItem('Cart'));
      cartStore.setItems(items);
      return;
    }
    cartStore.setItems([]);
    return;
  }
}

export function removeCartItem(id) {  
  if (hasLocalStorage('Token')) {
    axios.delete(Config.CART + '/' + id, getHeaderWithToken())
      .then(res => {
        sweetAlert("Success", 'This item has been successfully removed from cart', "success");
        getCartItems();
        // console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  else {
    cartStore.removeItem(id);
    sweetAlert("Success", 'This item has been successfully removed from cart', "success");
    localStorage.setItem('Cart', JSON.stringify(cartStore.items));
    return;
  }
}

export function moveItemsToCart() {
  let data = new Object();
  data.items = JSON.stringify(cartStore.items);
  axios.post(Config.CART_POSTLOGIN, data, getHeaderWithToken())
    .then(res => {
      // sweetAlert("Success", 'This item has been successfully removed from cart', "success");
      // getCartItems();
      // console.log(res.data.message);      		
      localStorage.removeItem('Cart');
    })
    .catch(function (error) {
      console.log(error);
    })
}