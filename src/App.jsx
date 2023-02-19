import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Orders from './pages/Orders';
import Products from './pages/Products';
import ProductForm from './pages/ProductForm';
import Login from './pages/Login';

import './App.css';



const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/orders' element={<Orders />} />
					<Route path='/products' element={<Products />} />
					<Route path='/productForm' element={<ProductForm />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App
