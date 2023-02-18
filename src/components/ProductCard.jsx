const ProductCard = ({ name, rate, available, category, createdAt, updatedAt }) => {
    return (
        <div className='ProductCard'>
            <div className='card mb-3'>
                <div className="card-body d-flex align-items-center justify-content-between">
                    <div className="border h-100">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Samosachutney.jpg" height={80} alt={name} />
                    </div>
                    <div>
                        <h4 className="card-title">{name} <span className="badge bg-secondary">₹ {rate}.0</span></h4>
                        <div className='card-text'><small className='text-muted'>Created: {new Date(createdAt).toLocaleString()}</small></div>
                        <div className='card-text'><small className='text-muted'>Updated: {new Date(updatedAt).toLocaleString()}</small></div>
                    </div>
                    <div>
                        <button className="btn btn-outline-primary">Update</button>
                        <button className="btn btn-outline-danger">Delete</button>
                    </div>
                </div>
                {/* <div className='row g-0'>
                    <div className='col-md-4'>
                        <img src='' className='img-fluid rounded-start' alt='...' />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{name}</h5>

                            <p className='card-text'>{rate}</p>
                            <p className='card-text'><small className='text-muted'>Created: {createdAt}</small></p>
                            <p className='card-text'><small className='text-muted'>Updated: {updatedAt}</small></p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default ProductCard;
