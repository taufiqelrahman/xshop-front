import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { observer, inject  } from 'mobx-react';
import { RaisedButton } from 'material-ui';
import { removeCartItem, updateCartItems } from './../../actions/cart';

@inject('orderStore','shopStore','uiStore') @observer
export default class Cart extends React.Component{
	handleChangeAmount = (id,event) => {
		const { setAmount } = this.props.orderStore;
		let value = event.target.value == '' ? '' : parseInt(event.target.value);
		setAmount(id,value);
	}
	handleDeleteItem = (id) => {
		removeCartItem(id);
	}
	handleCheckout = () => {
		const { toggleModal, loggedIn } = this.props.uiStore;
		if (!loggedIn) { 
			toggleModal();
			return;
		}
		updateCartItems(this);
	}
	renderItems() {
		const { items } = this.props.orderStore;
		// const { products } = this.props.shopStore;
		let _this = this;
		let renderedItems = new Array();
		items.map(function(item,i) {
			// let product = products.filter(x=>x.id==item.product_id)[0];
			renderedItems.push(
				<li key={i}>
					<p>Product Id : {item.product_id}</p>
					<input type="number" onChange={_this.handleChangeAmount.bind(_this,item.product_id)} value={item.amount} />
					<p>Price : IDR {item.amount*parseInt(item.product.price)}</p>
					<RaisedButton label="Delete" onClick={_this.handleDeleteItem.bind(_this,item.id)} />
				</li>
			)
		})
		return renderedItems;
	}
	render() {
		return (
			<div>
				<h4>this is your cart</h4>
				<ol>
					{ this.renderItems() }
				</ol>
				<RaisedButton label="Checkout" onClick={this.handleCheckout}/>
			</div>
		)
	}

}