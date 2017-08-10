import React from 'react';
import axios from 'axios';
import { observer, inject  } from 'mobx-react'
import sweetAlert from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import DevTools from 'mobx-react-devtools'

import Header from './../components/Header';
import UserLoginModal from './../components/UserLoginModal';
import { initLogin } from './../actions/auth';

@inject('userStore', 'uiStore') @observer
export default class Main extends React.Component{
	// constructor(props) {
	// 	super(props);
	// }
	componentWillMount() {
		// this.props.store.UiState.checkLoggedIn();
	}
	render() {
		// const { loggedIn } = this.props.store.UiState;
		const loggedIn = true;
		const { loginModalActive, toggleLoginModal } = this.props.uiStore;
		return (
			<div>
				<div id="wrapper" className="wide-wrap">
					<div className="offcanvas-overlay"></div>
					<Header
						onLoginOpen={toggleLoginModal(true)}
					/>
					<div className="content-container no-padding">
						<div className="container-full">
							<div className="row">
								<div className="col-md-12 main-wrap">
									<div className="main-content">
									{ loggedIn ? 
									<span>Congrats! You're logged in</span>
									: <span>You're not logged in</span>}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<UserLoginModal					
					onLoginClose={toggleLoginModal(false)}
					init={initLogin}
				/>
				<DevTools/>
			</div>
		)
	}
}