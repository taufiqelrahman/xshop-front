import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { observer, inject  } from 'mobx-react';
import { Dialog, FlatButton, TextField } from 'material-ui';
import { initLogin, login } from './../../actions/auth';

@inject('userStore','uiStore') @observer
export default class Login extends React.Component{
  render() {
		const { toggleModal, modalActive, loginForm, loginFormError, handleLoginForm } = this.props.uiStore;
		let disabledSubmit = false;
		if (loginForm.email == '' || loginForm.password == '') {
			disabledSubmit = true;
		}
		else {
			disabledSubmit = false;
		}
	  const customContentStyle = {
		  maxWidth: '400px',
		};
    return (
      <Row>      	
        <Col xs={12}>
        <form id="userloginModalForm">	
          <Col xs={12}>
            <TextField
              hintText="Email"
              floatingLabelText="Email"
              fullWidth={true}
              // name="email"
              // className="form-group"
              errorText={loginFormError.email}
              value={loginForm.email}
              onChange={handleLoginForm}
            />
          </Col>
          <Col xs={12}>
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              type="password"
              fullWidth={true}
              // name="pwd"
              // className="form-group"
              errorText={loginFormError.password}
              value={loginForm.password}
              onChange={handleLoginForm}
              // errorText="This field is required."
            />
          </Col>
          <Col xs={12}>
            <FlatButton
              label="Login"
              primary={true}
              disabled={disabledSubmit}
              onTouchTap={login}
            />
          </Col>
        </form>
        </Col>
      </Row>
    )
  }
}