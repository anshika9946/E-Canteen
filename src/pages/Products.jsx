import { useState } from 'react';

import useFetch from '../hooks/useFetch';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

const Products = () => {

    const [category, setCategory] = useState('');

    const { response } = useFetch(`/api/v1/product/${category}`);

    return (
        <div className='Products'>
            <Navbar />
            <div className='container my-3'>
                <h2>Products</h2>
                <div className="d-flex justify-content-between py-3">
                    <ul className='nav nav-pills'>
                        <li className='nav-item'><button className={`btn btn${category === '' ? '' : '-outline'}-primary me-2`} onClick={() => setCategory('')}>All</button></li>
                        <li className='nav-item'><button className={`btn btn${category === 'snack' ? '' : '-outline'}-primary me-2`} onClick={() => setCategory('snack')}>Snacks</button></li>
                        <li className='nav-item'><button className={`btn btn${category === 'meal' ? '' : '-outline'}-primary me-2`} onClick={() => setCategory('meal')}>Meals</button></li>
                        <li className='nav-item'><button className={`btn btn${category === 'beverage' ? '' : '-outline'}-primary me-2`} onClick={() => setCategory('beverage')}>Beverages</button></li>
                    </ul>
                    <div><input className='form-control' type='search' placeholder='Search' /></div>
                </div>

                {response?.ok && response.data?.map((product => {

                    const { _id, product_name, rate, available, category, createdAt, updatedAt } = product;

                    return <ProductCard
                        key={_id}
                        name={product_name}
                        rate={rate}
                        available={available}
                        category={category}
                        createdAt={createdAt}
                        updatedAt={updatedAt}
                    />
                }))}
            </div>
        </div>
    );
}

export default Products;
