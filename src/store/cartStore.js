import { observable, action } from 'mobx';

class CartStore {
  @observable items;

  constructor() {
    this.items = [];
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