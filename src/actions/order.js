import Config from './../libraries/Config';
import { getHeaderWithToken, getHeader } from './../libraries/Globals';
// import uiStore from '../store/uiStore';
import orderStore from '../store/orderStore';

import axios from 'axios';
import sweetAlert from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export function addOrder(context) {
  let data = new Object();
  data.orderstatus_id = 1;
  data.name = orderStore.checkoutForm.name;
  data.phone = orderStore.checkoutForm.phone;
  data.address = orderStore.checkoutForm.address;
  data.payment = 'BNI';
  data.expedition = orderStore.checkoutForm.expedition;
  data.total = orderStore.totalPrice;
  data.items = orderStore.items;
  axios.post(Config.ORDER_ADD, data, getHeaderWithToken())
    .then(res => {
      sweetAlert("Success", res.data.message, "success");
      // console.log(res.data.message); 
      // debugger
      context.props.history.push('/payment');
    })
    .catch(function (error) {
      console.log(error);
    })
}