import React from 'react';
import { observer, inject  } from 'mobx-react'
import { Dialog, FlatButton, TextField } from 'material-ui';
import { Grid, Row, Col } from 'react-bootstrap';

import { initLogin, login } from './../actions/auth';

@observer
export default class UserLoginModal extends React.Component{
	// constructor(props) {
		// super(props);
		// this.state = {
		// 	validated: false
		// }
	// }
	// componentDidUpdate(prevProps, prevState) {
	// 	if (!prevProps.modalActive && this.props.modalActive) {
	// 		initLogin(this);			
	// 	}
	// }
	// handler() {
	// 	this.setState({ validated: true })
	// }
	render() {
		const { toggleModal, modalActive, loginForm, loginFormError, handleLoginForm } = this.props.uiStore;
		let disabledSubmit = false;
		if (loginForm.email == '' || loginForm.password == '') {
			disabledSubmit = true;
		}
		else {
			disabledSubmit = false;
		}
		const actions = [
	      <FlatButton
	        label="Cancel"
	        secondary={true}
	        onTouchTap={toggleModal}
	      />,
	      <FlatButton
	        label="Submit"
	        primary={true}
	        type="submit"
	        disabled={disabledSubmit}
	        onTouchTap={login}
	      />
	    ];
	  const customContentStyle = {
		  maxWidth: '400px',
		};
		return (
			<Dialog
        title="Login"
        actions={actions}
        modal={true}
        open={modalActive}
        className="userloginModal"
        autoScrollBodyContent={true}
        contentStyle={customContentStyle}
      >
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
	        </form>
	        </Col>
        </Row>
      </Dialog>
		)
	}
}

// <div className="modal fade user-login-modal" id="userloginModal" tabIndex="-1" role="dialog" aria-hidden="true">
// 	<div className="modal-dialog">
// 		<div className="modal-content">
// 			<form id="userloginModalForm">
// 				<div className="modal-header">
// 					<button type="button" className="close" data-dismiss="modal" onClick={onLoginClose}>
// 						<span aria-hidden="true">&times;</span><span className="sr-only">Close</span>
// 					</button>
// 					<h4 className="modal-title">Login</h4>
// 				</div>
// 				<div className="modal-body">
// 					<div className="user-login-facebook">
// 						<button className="btn-login-facebook" type="button">
// 							<i className="fa fa-facebook"></i>Sign in with Facebook
// 						</button>
// 					</div>
// 					<div className="user-login-or"><span>or</span></div>
// 					<div className="alert alert-danger display-hide">
// 						<button className="close" data-close="alert"></button>
// 						<span> Invalid username and/or password. </span>
// 					</div>	
// 					<div className="input-field col s6">
// 			          <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
// 			          <label htmlFor="first_name">First Name</label>
// 			        </div>
// 					<div className="form-group form-md-line-input form-md-floating-label">
// 						<input type="password" id="password" name="pwd" className="form-control"/>									
// 						<label htmlFor="password">Password</label>									
// 						<span className="help-block">Enter your password...</span>
// 					</div>
// 					<div className="checkbox clearfix">
// 						<div className="form-flat-checkbox pull-left">
// 							<input type="checkbox" name="rememberme" id="rememberme" value="forever"/><i></i>&nbsp;Remember Me
// 						</div>
// 						<span className="lostpassword-modal-link pull-right">
// 							<a href="#lostpasswordModal" data-rel="lostpasswordModal">Lost your password?</a>
// 						</span>
// 					</div>
// 				</div>
// 				<div className="modal-footer">
// 					<span className="user-login-modal-register pull-left">
// 						<a data-rel="registerModal" href="#">Not a Member yet?</a>
// 					</span>
// 					<button type="submit" className="btn btn-default btn-outline">Sign in</button>
// 				</div>
// 			</form>
// 		</div>
// 	</div>
// </div>