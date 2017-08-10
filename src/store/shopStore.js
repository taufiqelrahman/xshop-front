import { observable, action } from 'mobx';

class ShopStore {
  @observable products;

  constructor() {
    this.products = [];
  }

  @action setProducts = (products) => {
    this.products = products;
  }
}

const shopStore = new ShopStore();

export default shopStore;
export { ShopStore };