import { observable, action, observe } from 'mobx';
import userStore from '../store/userStore';

class CartStore {
  @observable items;
  @observable checkoutForm;

  constructor() {
    this.items = [];
    this.checkoutForm = {
      sameAsUser: false,
      name: '',
      phone: '',
      address: '',
      payment: 'BNI',
      expedition: ''
    }
    observe(this.checkoutForm, 'sameAsUser', change => {
      if (!change.oldValue && change.newValue) {
        this.checkoutForm.name = userStore.me.name;
        this.checkoutForm.address = userStore.me.address;
        this.checkoutForm.phone = userStore.me.phone;
      }
    })
  }

  @action setCheckoutForm = (property, value) => {
    this.checkoutForm[property] = value;
  }

  @action setItems = (items) => {
    this.items = items;
  }

  @action addItem = (item) => { // for guests
    this.items.push(item);
  }

  @action removeItem = (id) => { // for guests
    let index = this.items.indexOf(this.items.filter(x=>x.id == id)[0])
    this.items.splice(index, 1);
  }

  @action setAmount = (id,value) => {
    this.items.filter(item=>item.product_id==id)[0].amount = value;
  }
}

const cartStore = new CartStore();

export default cartStore;
export { CartStore };