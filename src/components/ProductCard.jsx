import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, rate, available, category, imgUrl, description, createdAt, updatedAt }) => {
    return (
        <div className='ProductCard'>
            <div className='card mb-3'>
                <div className='row align-items-center card-body'>
                    <div className='col'>
                        <img className='rounded' src={imgUrl} height={80} alt={name} />
                    </div>
                    <div className='col-4'>
                        <h4 className='card-title'>{name} <span className='badge bg-primary'>₹ {rate}.0</span></h4>
                        <h6><span className='badge rounded-pill text-bg-secondary'>{category}</span></h6>
                    </div>
                    <div className='col-3'>
                        <div className='card-text'><small className='text-muted'>Created: {new Date(createdAt).toLocaleString()}</small></div>
                        <div className='card-text'><small className='text-muted'>Updated: {new Date(updatedAt).toLocaleString()}</small></div>
                    </div>
                    <div className='col'>
                        <h5 className='mb-0'>{available ? <span className='badge bg-success'>Available</span> : <span className='badge bg-danger'>Closed</span>}</h5>
                    </div>
                    <div className='col-2 text-end'>
                        <Link to='/product/update' state={{ id, name, rate, category, imgUrl, description }}>
                            <button className='btn btn-outline-primary me-2'>Update</button>
                        </Link>
                        <button className='btn btn-outline-danger'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
