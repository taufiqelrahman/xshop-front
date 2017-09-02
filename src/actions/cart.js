import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import sweetAlert from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import Config from './../libraries/Config';
import { getHeaderWithToken, hasLocalStorage } from './../libraries/Globals';

import shopStore from '../store/shopStore';
import orderStore from '../store/orderStore';

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
    orderStore.addItem(data);
    sweetAlert("Success", 'This item has been successfully added to cart', "success");
    localStorage.setItem('Cart', JSON.stringify(orderStore.items));
    return;
  }
}

export function getCartItems() {
  if (hasLocalStorage('Token')) {
    axios.get(Config.CART, getHeaderWithToken())
      .then(res => {
        orderStore.setItems(res.data.items);
        // console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  else {
    if (hasLocalStorage('Cart')) {
      let items = JSON.parse(localStorage.getItem('Cart'));
      orderStore.setItems(items);
      return;
    }
    orderStore.setItems([]);
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
    orderStore.removeItem(id);
    sweetAlert("Success", 'This item has been successfully removed from cart', "success");
    localStorage.setItem('Cart', JSON.stringify(orderStore.items));
    return;
  }
}

export function moveItemsToCart() {
  let data = new Object();
  data.items = JSON.stringify(orderStore.items);
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

export function updateCartItems(context) {
  let data = new Object();
  data.items = JSON.stringify(orderStore.items);
  axios.post(Config.CART_UPDATE, data, getHeaderWithToken())
    .then(res => {
      // sweetAlert("Success", 'This item has been successfully removed from cart', "success");
      console.log(res.data.message); 
      context.props.history.push('/checkout');
      getCartItems();
    })
    .catch(function (error) {
      console.log(error);
    })
}