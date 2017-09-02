import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { observer, inject  } from 'mobx-react';
import { RaisedButton } from 'material-ui';

import Config from './../../libraries/Config';
import { addToCart } from './../../actions/cart';

@inject('shopStore') @observer
export default class Shop extends React.Component{	
	handleClickBuy = (bundle) => {
		addToCart(bundle);
	}
	renderProducts = () => {
		const { products } = this.props.shopStore;
		let _this = this;
		let renderedProducts = new Array();
		products.map(function(product,i) {
			let bundle = { product_id: product.id, price: product.price }
			renderedProducts.push(
				<li key={i}>
					<p>{product.name}</p>
					<p>{product.description}</p>
					<p>{product.price}</p>
					<img src={Config.IMAGE + product.path} style={{ width: 100 }} />
					<RaisedButton label="Buy" onClick={_this.handleClickBuy.bind(_this, bundle)}/>
				</li>
			)
		})
		return renderedProducts;
	}
	render() {
		const { products } = this.props.shopStore;
		// const { me } = this.props.userStore;
		return (
			<div>
				<h4>this is shop</h4>
				<ul>
					{this.renderProducts()}
				</ul>
			</div>
		)
	}

}