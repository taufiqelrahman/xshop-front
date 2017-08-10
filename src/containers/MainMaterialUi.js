import React from 'react';
import axios from 'axios';
import { observer, inject  } from 'mobx-react';
import sweetAlert from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import DevTools from 'mobx-react-devtools';

import { AppBar, FlatButton, Toolbar, IconButton, Drawer, MenuItem, Dialog } from 'material-ui';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import { Grid, Row, Col } from 'react-bootstrap';

import Header from './../components/Header';
import UserLoginModal from './../components/UserLoginModal';
import Navbar from './../components/Navbar';
import { initLogin, fetchMe, logout } from './../actions/auth';

@inject('userStore', 'uiStore') @observer
export default class Main extends React.Component{
	// constructor(props) {
	// 	super(props);
	// }
	componentWillMount() {
		// this.props.store.UiState.checkLoggedIn();
	}
	componentDidMount() {
		if (this.props.uiStore.loggedIn) {
			fetchMe();
		}
	}
	componentDidUpdate(prevProps, prevState) {
		// if (!prevProps.uiStore.loggedIn && this.props.uiStore.loggedIn) {
		// 	fetchMe();			
		// }
	}
	handleLogin() {
		console.log('login clicked');
	}
	render() {
		const { modalActive, toggleModal, toggleDrawer, drawerActive, loggedIn } = this.props.uiStore;
		const { me } = this.props.userStore;
		const buttonStyle = {
			backgroundColor: 'transparent',
			color: 'white',
			marginTop: '15px',
			marginBottom: '15px'
		};
		const actions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onTouchTap={toggleModal}
	      />,
	      <FlatButton
	        label="Submit"
	        primary={true}
	        disabled={true}
	        onTouchTap={toggleModal}
	      />,
	    ];
		return (
			<div>
				{/* <Navbar /> */}
				<AppBar title="Title" 
					iconElementLeft={ <IconButton onClick={toggleDrawer}>
                              <MenuIcon/>
                            </IconButton> }>
	        <FlatButton label="Cart" style={buttonStyle}/>
	        { loggedIn ?
	        	<FlatButton label="Logout" style={buttonStyle} onClick={logout}/>
	        	: <FlatButton label="Login" style={buttonStyle} onClick={toggleModal}/>
	        }
				</AppBar>
				<Drawer
          docked={false}
          width={300}
          open={drawerActive}
          onRequestChange={toggleDrawer}
        >
          <MenuItem>Cart</MenuItem>
        </Drawer>
        <UserLoginModal uiStore={this.props.uiStore}/>
				<Grid fluid>
				{ loggedIn ?
					<h4>hello there {me.name}</h4>
				: <h4>mind to login? :p</h4>
				}
				</Grid>
			</div>
		)
	}
}