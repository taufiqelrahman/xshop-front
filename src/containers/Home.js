import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { observer, inject  } from 'mobx-react';

@inject('userStore','uiStore') @observer
export default class Home extends React.Component{
	render() {
		const { loggedIn } = this.props.uiStore;
		const { me } = this.props.userStore;
		return (
			<div>
			{ loggedIn ?
				<h4>hello there {me.name}</h4>
			: <h4>mind to login? :p</h4>
			}
			</div>
		)
	}

}