import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, hashHistory, IndexRoute} from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {cyan500, red800} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './styles/index.scss';

import 'framework7-react/dist/umd/css/framework7.ios.min.css';
import 'framework7-react/dist/umd/css/framework7.ios.colors.min.css';

// import routes from './routes';

import App from './containers/App';
import Main from './containers/Main';
import MaterialUi from './containers/MainMaterialUi';
import Framework7 from './containers/MainFramework7';
import userStore from './store/userStore';
import uiStore from './store/uiStore';
import shopStore from './store/shopStore';
import cartStore from './store/cartStore';

useStrict(true);
const stores = { userStore, uiStore, shopStore, cartStore };

const palette = {
	primary1Color: red800,
	alternateTextColor: '#fff',
	textColor: '#fff'
}
const spacing = {
	// desktopKeylineIncrement: 35,
	// desktopGutter: 99
}
const typography = {
	fontWeightNormal: 'normal'
}

const muiTheme = getMuiTheme({
	// palette: {
 //    primary1Color: red800,
 //  },

	appBar: {
    color: palette.primary1Color,
    textColor: palette.alternateTextColor,
    // height: spacing.desktopKeylineIncrement,
    titleFontWeight: typography.fontWeightNormal,
    // padding: spacing.desktopGutter,
  },
  toolbar: {
    color: palette.primary1Color,
    // hoverColor: fade(palette.textColor, 0.87),
    backgroundColor: palette.primary1Color,
    height: 50,
    // titleFontSize: 20,
    // iconColor: fade(palette.textColor, 0.4),
    // separatorColor: fade(palette.textColor, 0.175),
    // menuHoverColor: fade(palette.textColor, 0.1),
  }
});

// const history = createBrowserHistory();

ReactDOM.render(
	<Provider {...stores}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<BrowserRouter>
				<App/>
      </BrowserRouter>
		</MuiThemeProvider>
	</Provider>
	, document.getElementById('app')
);