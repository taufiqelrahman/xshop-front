import Config from './../libraries/Config';
import { getHeaderWithToken, getHeader } from './../libraries/Globals';
import { moveItemsToCart } from './../actions/cart';

import uiStore from '../store/uiStore';
import userStore from '../store/userStore';

import axios from 'axios';

export function login() {
  let postData = uiStore.loginFormData;
  axios.post(Config.LOGIN, postData, getHeader())
    .then(res => {
      uiStore.setToken(res.data.token);
      // localStorage.setItem('Token', JSON.stringify(res.data.token));
      fetchMe();
      moveItemsToCart();
      // uiStore.setLoggedIn(true);
      // uiStore.toggleModal();
      // userStore.setMe(postData.email);
      // console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    })
  // SC.connect().then((session) => {
  //   fetchMe(session);
  //   fetchStream(session);
  // });
};

export function logout() {
  uiStore.setToken('');
  userStore.resetMe();
  // localStorage.removeItem('Token');
}

export function fetchMe() {
  axios.post(Config.CURRENT_USER, [], getHeaderWithToken())
    .then(res => {
      userStore.setMe(res.data);
      // console.log(res);
    })
    .catch(function (error) {
      if (error.response.data.error.status_code == 500) {
        logout();
      }
      console.log(error.response);
    })
}

function fetchStream(session) {
  // fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     trackStore.tracks = data.collection;
  //   });
}

export function initLogin(element){
  const _this = this;

  $('#userloginModalForm').validate({
      errorElement: 'span', //default input error message container
      errorClass: 'help-block', // default input error message class
      focusInvalid: false, // do not focus the last invalid input
      rules: {
          user: 'required',
          pwd: 'required',
      },
      messages: {
          user: {
              required: "User name is required."
          },
          pwd: {
              required: "Password is required."
          }
      },
      invalidHandler: function(event, validator) { //display error alert on form submit   
          $('.alert-danger', $('#userloginModalForm')).show();
      },
      highlight: function(element) { // hightlight error inputs
          $(element)
              .closest('.form-group').addClass('has-error').removeClass('has-info'); // set error class to the control group
      },
      unhighlight: function(element, errorClass, validClass) {
          $(element)
              .closest('.form-group').removeClass('has-error').addClass('has-info'); // set error class to the control group
      },
      success: function(label) {
          label.closest('.form-group').removeClass('has-error').addClass('has-info');
          label.remove();
      },
      errorPlacement: function(error, element) {
          error.insertAfter(element.closest('.form-group'));
      },
      submitHandler: function(form, event) {  
        Login(element);
      }
  });
}

function Login(element) {
  console.log(element);
}