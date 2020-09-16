import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import ShopPage from '../pages/shop/ShopPage';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
