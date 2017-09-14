import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { observer, inject  } from 'mobx-react';

@inject('userStore','uiStore','orderStore') @observer
export default class Payment extends React.Component{
	render() {
		// const { loggedIn } = this.props.uiStore;
		// const { me } = this.props.userStore;
		const { totalPayment } = this.props.orderStore;
		return (
			<div>
        <h4>Payment</h4>
        <p>Please transfer to 02300758</p>
        <p>Rp {totalPayment}</p>
			</div>
		)
	}

}