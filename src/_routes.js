import React from 'react';
import {Route, IndexRoute, hashHistory} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import App                         from './containers/App';
import HomePage                    from './containers/Home';
// import SearchPage                  from './containers/SearchPage';
// import NotFoundPage                from './containers/NotFoundPage';

export default class Routes extends React.Component{
	render() {
		return (
	    <Route path="/" component={App}>
	      <IndexRoute component={HomePage} />
	      {/*<Route path="/search" component={SearchPage} />
	      <Route path="*" component={NotFoundPage} />*/}
	    </Route>
		)
	}
}