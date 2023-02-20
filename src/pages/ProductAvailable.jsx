import { useEffect, useState } from "react";

import useFetch from "../hooks/useFetch";
import Navbar from "../components/Navbar";
import ProductAvailableCard from "../components/ProductAvailableCard";

const ProductAvailable = () => {

    const { response } = useFetch('/api/v1/product');
    const [availableProducts, setAvailableProducts] = useState([]);
    useEffect(() => { setAvailableProducts(response?.data) }, [response])

    const [available, setAvailable] = useState(null);

    return (
        <div className="ProductAvailable">
            <Navbar />
            <div className="container my-3">
                <h2>Update Availability</h2>
                <div className='d-flex justify-content-between py-3'>
                    <ul className='nav'>
                        <li className='nav-item'><button className={`btn btn${available === null ? '' : '-outline'}-primary me-2`} onClick={() => setAvailable(null)}>All</button></li>
                        <li className='nav-item'><button className={`btn btn${available === true ? '' : '-outline'}-primary me-2`} onClick={() => setAvailable(true)}>Active</button></li>
                        <li className='nav-item'><button className={`btn btn${available === false ? '' : '-outline'}-primary me-2`} onClick={() => setAvailable(false)}>Closed</button></li>
                    </ul>
                    <ul className='nav'>
                        <li className='nav-item'><input className='form-control' type='search' placeholder='Search' /></li>
                    </ul>
                </div>

                <div className="row row-cols-2">
                    {response?.ok && availableProducts?.filter(product => available === null ? true : product.available === available).map(product => {

                        const { _id, product_name, rate, available, category, imageUrl, description, createdAt, updatedAt } = product;

                        return <ProductAvailableCard
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
                            setAvailableProducts={setAvailableProducts}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProductAvailable;
