const OrderCard = ({ user, products, amount, delivered, token, createdAt, updatedAt }) => {
    return (
        <div className="OrderCard">
            <div className='card mb-3'>
                <div className='row align-items-center card-body'>
                    <div className='col-2'>
                        <h5 className="mb-0">{user.full_name}</h5>
                        <p><small className="text-muted">{user.email}</small></p>
                        <h6>{user.contact}</h6>
                    </div>
                    <div className='col'>
                        <h4 className='card-title'> <span className='badge bg-primary'>₹ {amount}.0</span></h4>
                        <h6 className="mb-0"><span className='badge rounded-pill text-bg-secondary'>paid</span></h6>
                    </div>
                    <div className="col-3">
                        <h6>Order Summary</h6>
                        <div style={{ maxHeight: '60px', overflowX: 'hidden', overflowY: 'scroll' }}>
                            {products.map((product, idx) => {
                                return <div className="row">
                                    <div className="col"><small className="text-muted">{idx + 1}. {product.product_id.product_name}</small></div>
                                    <div className="col"><small className="text-muted">{product.product_id.rate} x {product.qty} = {product.product_id.rate * product.qty}</small></div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='card-text'><small className='text-muted'>Created: {new Date(createdAt).toLocaleString()}</small></div>
                        <div className='card-text'><small className='text-muted'>Updated: {new Date(updatedAt).toLocaleString()}</small></div>
                    </div>
                    <div className='col'>
                        <h4 className='mb-0'><span className='badge text-bg-warning'>{token}</span></h4>
                    </div>
                    <div className='col text-end'>
                        <button className='btn btn-outline-primary'>Delivered</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderCard;
