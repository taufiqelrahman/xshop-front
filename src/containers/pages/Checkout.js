import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { observer, inject  } from 'mobx-react';
import { RaisedButton, Checkbox, TextField, SelectField, MenuItem } from 'material-ui';

import Config from './../../libraries/Config';
import { addToCart } from './../../actions/cart';

@inject('orderStore','userStore') @observer
export default class Shop extends React.Component{
  handleSelect = (property, event, index, value) => {
    const { setCheckoutForm } = this.props.orderStore;
    setCheckoutForm(property,value);
  }
  handleCheck(property, event, value) {
    const { setCheckoutForm } = this.props.orderStore;
    setCheckoutForm(property, value);
  }
  handleInput(property, event, value) {
    const { setCheckoutForm } = this.props.orderStore;
    setCheckoutForm(property, value);
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
					<p>Product Id : {item.product_id}, Amount : {item.amount}, Price : IDR {item.amount*parseInt(item.product.price)}</p>
				</li>
			)
		})
		return renderedItems;
	}
  render() {
    const { items, checkoutForm, setCheckoutForm } = this.props.orderStore;
    const { me } = this.props.userStore;
    return (
      <div>
        <h4>Let's checkout</h4>
				<ol>
          { this.renderItems() }
        </ol>
        <div className="adress-div">
          <h4>Your address</h4>
          <Checkbox
            label="Same as you?"
            onCheck={this.handleCheck.bind(this,'sameAsUser')}
          />
          <TextField floatingLabelText="Name" value={checkoutForm.name} onChange={this.handleInput.bind(this,'name')}/>
          <TextField floatingLabelText="Phone" type="number" value={checkoutForm.phone} onChange={this.handleInput.bind(this,'phone')}/>
          <TextField floatingLabelText="Address" value={checkoutForm.address} onChange={this.handleInput.bind(this,'address')}/>
        </div>
        <div className="payment">
          <h4>Your payment</h4>   
          <p>We only support BNI at the moment</p>
        </div>
        <div className="expedition">
          <h4>Your expedition</h4>          
          <SelectField
            name="expedition"
            floatingLabelText="Expedition"
            value={checkoutForm.expedition}
            onChange={this.handleSelect.bind(this,'expedition')}
          >          
            <MenuItem value="JNE" primaryText="JNE" />
            <MenuItem value="J&T" primaryText="J&T" />
            <MenuItem value="Pos Indonesia" primaryText="Pos Indonesia" />
            <MenuItem value="SiCepat" primaryText="SiCepat" />
          </SelectField>
        </div>
				<RaisedButton label="Confirm" onClick={()=>console.log('confirmed')}/>
      </div>
    )
  }
}