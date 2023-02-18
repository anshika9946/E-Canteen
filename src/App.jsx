import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Orders from './pages/Orders';
import Products from './pages/Products';

import './App.css';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/orders' element={<Orders />} />
					<Route path='/products' element={<Products />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App
