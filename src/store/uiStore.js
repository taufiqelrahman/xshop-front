import { observable, computed, reaction, autorun, intercept, observe, action } from 'mobx';
import { fetchMe } from './../actions/auth';
import { getCartItems } from './../actions/cart';
import userStore from '../store/userStore';

// class Todo {
// 	@observable value
// 	@observable id
// 	@observable completed

// 	constructor(value) {
// 		this.value = value
// 		this.id = Date.now()
// 		this.completed = false
// 	}
// }

class UiStore {
	// @observable todos = []
	@observable modalActive;
	@observable drawerActive;
	@observable loginForm;
	@observable loginFormError;

	@observable token;
	@observable loggedIn;

	constructor() {
		this.modalActive = false;
		this.drawerActive = false;
		this.loginForm = {
			email: '',
			password: ''
		}
		this.loginFormError = {
			email: '',
			password: ''
		}
		this.loggedIn = false;
		this.token = localStorage.getItem('Token') != null ? JSON.parse(localStorage.getItem('Token')) : '';

		if (this.token != '') {
			this.loggedIn = true;
			// fetchMe();
		}

		observe(this, 'token', change => {
			if (change.oldValue != '' && change.newValue == '') {				
				localStorage.removeItem('Token');
				this.loggedIn = false;
				userStore.resetMe();	
				getCartItems();
			}
			else if (change.oldValue == '' && change.newValue != '') {
				localStorage.setItem('Token', JSON.stringify(change.newValue));
				this.loggedIn = true;
				this.toggleModal();
				fetchMe();				
				getCartItems();
			}
		})
		// observe(this, 'loginModalActive', change => {
  //       	console.log(change)
  //       	if (!change.oldValue && change.newValue) {
		// 		$('#userloginModal').modal('show');	
		// 	}
		// 	else if (change.oldValue && !change.newValue) {
		// 		$('#userloginModal').modal('hide');			
		// 	}
  //       })
	}

	@action setToken = (token) => {
		this.token = token;		
	}

	@action setLoggedIn = (bool) => {
		this.loggedIn = bool;
	}

	@action toggleModal = () => {
		this.modalActive = !this.modalActive; 
	}

	@action toggleDrawer = () => {
		this.drawerActive = !this.drawerActive; 
	}

	@action handleLoginForm = (event, input) => {
		if (event.target.id.includes('Email')) {
			if (input == '') {
				this.loginFormError.email = 'email is required';
			}
			else {
				this.loginFormError.email = '';
			}
			this.loginForm.email = input;
		}
		else {
			if (input == '') {
				this.loginFormError.password = 'password is required';
			}
			else {
				this.loginFormError.password = '';
			}
			this.loginForm.password = input;
		}
		// console.log(input);
	}

	@computed get loginFormData() {
		return this.loginForm;
	}
	// @observable token = ''
	// @observable loggedIn = false
	// checkLoggedIn() {
	// 	if (this.token != '') {
	// 		this.loggedIn = true;
	// 	}
	// }
	// @computed get filteredTodos() {
	// 	let matchesFilter = new RegExp(this.filter, 'i')
	// 	return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
	// }
	// createTodo(value) {
	// 	this.todos.push(new Todo(value))
	// }
	// constructor() {
 //        // autorun(() => console.log(this.loginModalActive));

 //   //      intercept(this, 'loginModalActive', change => {
 //   //      	console.log(change)
 //   //      	if (change.object.value === change.newValue) {
 //   //      		return null;
 //   //      	}
 //   //      	if (!change.object.value && change.newValue) {
	// 		// 	$('#userloginModal').modal('show');	
	// 		// }
	// 		// else if (change.object.value && !change.newValue) {
	// 		// 	$('#userloginModal').modal('hide');			
	// 		// }
	// 		// return change;
 //   //      })

 //        observe(this, 'loginModalActive', change => {
 //        	console.log(change)
 //        	if (!change.oldValue && change.newValue) {
	// 			$('#userloginModal').modal('show');	
	// 		}
	// 		else if (change.oldValue && !change.newValue) {
	// 			$('#userloginModal').modal('hide');			
	// 		}
 //        })
 //    }

	// reaction(()=>this.loginModalActive, (loginModalActive)=>{
	// })

	// toggleLoginModal(active) {
	// 	this.loginModalActive = active; 
	// }
}

const uiStore = new UiStore();

export default uiStore;
export { UiStore };

