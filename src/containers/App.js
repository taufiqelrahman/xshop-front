import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { observer, inject  } from 'mobx-react';
import sweetAlert from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import DevTools from 'mobx-react-devtools';
import { Grid, Row, Col } from 'react-bootstrap';
import { AppBar, FlatButton, Toolbar, IconButton, Drawer, MenuItem, Dialog } from 'material-ui';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import Header from './../components/Header';
import UserLoginModal from './../components/UserLoginModal';
import Navbar from './../components/Navbar';

import { renderRoutes } from './../Routes';
import { initLogin, fetchMe, logout } from './../actions/auth';
import { getProducts } from './../actions/products';
import { getCartItems } from './../actions/cart';
import Config from './../libraries/Config';

@inject('userStore', 'uiStore') @observer
class App extends React.Component{
	componentDidMount() {
		const { token } = this.props.uiStore;
		this.setPageTitle(this.props.location.pathname);
		if (this.props.uiStore.loggedIn) {
			fetchMe();
		}
		getProducts();
		getCartItems();
	}
	componentDidUpdate(prevProps, prevState) {
		const { location } = this.props;
		// if (!prevProps.uiStore.loggedIn && this.props.uiStore.loggedIn) {
		// 	fetchMe();			
		// }
		if (prevProps.location.pathname != location.pathname) {
			this.setPageTitle(location.pathname);
		}
	}
	setPageTitle(path) {
		switch(path) {
			case '/':
				document.title = Config.APP_TITLE;
				break;
			case '/cart':
				document.title = Config.APP_TITLE + ' | Cart';
				break;
			case '/shop':
				document.title = Config.APP_TITLE + ' | Shop';
				break;
			default:
				document.title = Config.APP_TITLE + ' | Whoops!';
				break;
		}
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
				<AppBar
					title="Dingo Shop"
					titleStyle={{ cursor: 'pointer' }}
					onTitleTouchTap={()=>this.props.history.push('/')}
					iconElementLeft={ <IconButton onClick={toggleDrawer}>
                              <MenuIcon/>
                            </IconButton> }>
          <Link to="/cart"><FlatButton label="Cart" style={buttonStyle}/></Link>
          <Link to="/shop"><FlatButton label="Shop" style={buttonStyle}/></Link>
					{ loggedIn && <Link to="/checkout"><FlatButton label="Checkout" style={buttonStyle}/></Link> }
          { loggedIn ?
          	<FlatButton label="Logout" style={buttonStyle} onClick={logout}/>
          	: <FlatButton label="Login" style={buttonStyle} onClick={toggleModal.bind(this,true)}/>
          }
				</AppBar>
				<Drawer
          docked={false}
          width={300}
          open={drawerActive}
          onRequestChange={toggleDrawer}
        >
          <MenuItem>
          <Link to="/cart">Cart</Link></MenuItem>
        </Drawer>
        <UserLoginModal uiStore={this.props.uiStore}/>
				<Grid fluid>
	        { renderRoutes() }
        </Grid>
			</div>
		)
	}
}

export default withRouter(App);