import React from 'react';
import axios from 'axios';
import { observer, inject  } from 'mobx-react'
import sweetAlert from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import DevTools from 'mobx-react-devtools';

import AppBar from 'material-ui/AppBar';

import Header from './../components/Header';
import UserLoginModal from './../components/UserLoginModal';
import { initLogin } from './../actions/auth';

import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle, 
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput
} from 'framework7-react';

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
		const routes = [{
		    path: '/about/',
		    component: About
		}];
		return (
			<Framework7App themeType="ios" routes={routes}>
				<Navbar>
				  <NavLeft backLink="Back" sliding></NavLeft>
				  <NavCenter sliding>My App</NavCenter>
				  <NavRight>
				    <Link icon="iconBars" openPanel="right"></Link>
				  </NavRight>
				</Navbar>
				<Panel right cover layout="dark">
					<View id="right-panel-view" navbarThrough dynamicNavbar={true}>
						<Navbar title="Right Panel" sliding />
						<Pages>
							<Page>
								<ContentBlock>
									<p>Right panel content goes here</p>
								</ContentBlock>
								<ContentBlockTitle>Load page in panel</ContentBlockTitle>
								<List>
									<ListItem link="/about/" title="About"></ListItem>
									<ListItem link="/form/" title="Form"></ListItem>
								</List>
								<ContentBlockTitle>Load page in main view</ContentBlockTitle>
								<List>
									<ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
									<ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
								</List>
							</Page>
						</Pages>
					</View>
				</Panel>
				<Views>
					<View id="main-view" main url="/">
						<ContentBlockTitle>Welcome to my App</ContentBlockTitle>
					</View>
				</Views>
			</Framework7App>  
		)
	}
}

export const About = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <ContentBlock inner>
                <p>Here is About page!</p>
                <p>You can go <f7-link back>back</f7-link>.</p>
                <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
                <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi.       Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
            </ContentBlock>
        </Page>
    );
};