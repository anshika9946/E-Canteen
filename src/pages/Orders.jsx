import { useState } from 'react';

import useFetch from '../hooks/useFetch';
import Navbar from '../components/Navbar';
import OrderCard from '../components/OrderCard';

const Orders = () => {

    const [delivered, setDelivered] = useState('');

    const { response } = useFetch('/admin/v1/order');

    return (
        <div className='Orders'>
            <Navbar />
            <div className='container my-3'>
                <h2>Orders</h2>
                <div className='d-flex justify-content-between py-3'>
                    <ul className='nav'>
                        <li className='nav-item'><button className={`btn btn${delivered === '' ? '' : '-outline'}-primary me-2`} onClick={() => setDelivered('')}>All</button></li>
                        <li className='nav-item'><button className={`btn btn${delivered === 'false' ? '' : '-outline'}-primary me-2`} onClick={() => setDelivered('false')}>Pending</button></li>
                        <li className='nav-item'><button className={`btn btn${delivered === 'true' ? '' : '-outline'}-primary me-2`} onClick={() => setDelivered('true')}>Delivered</button></li>
                    </ul>
                    <ul className='nav'>
                        <li className='nav-item'><input className='form-control' type='search' placeholder='Search' /></li>
                    </ul>
                </div>
                {response?.ok && response.data?.filter(order => delivered === '' ? true : order.delivered.toString() === delivered).map(order => {

                    const { _id, user_id, products, amount, delivered, token, createdAt, updatedAt } = order;

                    return <OrderCard
                        key={_id}
                        user={user_id}
                        products={products}
                        amount={amount}
                        delivered={delivered}
                        token={token}
                        createdAt={createdAt}
                        updatedAt={updatedAt}
                    />
                })}
            </div>
        </div>
    );
}

export default Orders;
