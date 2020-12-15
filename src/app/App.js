import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import Header from '../components/header/Header';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
