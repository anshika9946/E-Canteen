import { useState } from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

const Products = () => {

    const [category, setCategory] = useState('');

    const { response } = useFetch('/api/v1/product');

    return (
        <div className='Products'>
            <Navbar />
            <div className='container my-3'>
                <h2>Products</h2>
                <div className='d-flex justify-content-between py-3'>
                    <ul className='nav'>
                        <li className='nav-item'><button className={`btn btn${category === '' ? '' : '-outline'}-primary me-2`} onClick={() => setCategory('')}>All</button></li>
                        <li className='nav-item'><button className={`btn btn${category === 'snack' ? '' : '-outline'}-primary me-2`} onClick={() => setCategory('snack')}>Snacks</button></li>
                        <li className='nav-item'><button className={`btn btn${category === 'meal' ? '' : '-outline'}-primary me-2`} onClick={() => setCategory('meal')}>Meals</button></li>
                        <li className='nav-item'><button className={`btn btn${category === 'beverage' ? '' : '-outline'}-primary me-2`} onClick={() => setCategory('beverage')}>Beverages</button></li>
                    </ul>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <Link to='/product/available'><button className='btn btn-primary me-2'>Available</button></Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/product/add' ><button className='btn btn-primary me-2'>Add Product</button></Link>
                        </li>
                        <li className='nav-item'><input className='form-control' type='search' placeholder='Search' /></li>
                    </ul>
                </div>

                {response?.ok && response.data?.filter((product => category === '' ? true : product.category === category)).map(product => {

                    const { _id, product_name, rate, available, category, imageUrl, description, createdAt, updatedAt } = product;

                    return <ProductCard
                        key={_id}
                        id={_id}
                        name={product_name}
                        rate={rate}
                        available={available}
                        category={category}
                        imageUrl={imageUrl}
                        description={description}
                        createdAt={createdAt}
                        updatedAt={updatedAt}
                    />
                })}
            </div>
        </div>
    );
}

export default Products;
