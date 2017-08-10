import { observable, action } from 'mobx';

class UserStore {
  @observable me;

  constructor() {
    this.me = {
    	id: '',
    	name: '',
    	email: ''
    }
  }

	@action setMe = (me) => {
    this.me = me;
  }

  @action resetMe = () => {
    this.me = {
    	id: '',
    	name: '',
    	email: ''
    }
  }

}

const userStore = new UserStore();

export default userStore;
export { UserStore };