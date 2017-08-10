import Config from './../libraries/Config';
import { getHeader } from './../libraries/Globals';

import shopStore from '../store/shopStore';

import axios from 'axios';

export function getProducts() {
  axios.get(Config.PRODUCTS, [], getHeader())
    .then(res => {
      shopStore.setProducts(res.data.data);
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    })
}