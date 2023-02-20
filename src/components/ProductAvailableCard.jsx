import { useState } from "react";

const ProductAvailableCard = ({ id, name, rate, available, category, imageUrl, setAvailableProducts }) => {

    const handleChange = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/admin/v1/available/toggle/${id}`);
            const json = await response.json();
            if (json.ok) setAvailableProducts(currentAvailableProducts => currentAvailableProducts.map(product => product._id === id ? json.data : product));

        } catch (err) {
            alert('failed');
        }
    }

    return (
        <div className="ProductAvailableCard col">
            <div className='card mb-3'>
                <div className='row align-items-center card-body'>
                    <div className='col-3'>
                        <img className='rounded' src={imageUrl} height={80} alt={name} />
                    </div>
                    <div className='col-5'>
                        <h5 className='card-title'>{name} <span className='badge bg-secondary'>₹ {rate}.0</span></h5>
                        <h6><span className='badge rounded-pill text-bg-secondary'>{category}</span></h6>
                    </div>
                    <div className='col-4 d-flex align-items-center'>
                        <span className='badge bg-danger'>Closed</span>
                        <div className="form-check form-switch ps-5 m-0">
                            <input className="form-check-input" type="checkbox" role="switch" onChange={handleChange} checked={available} />
                        </div>
                        <span className='badge bg-success'>Available</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductAvailableCard;
