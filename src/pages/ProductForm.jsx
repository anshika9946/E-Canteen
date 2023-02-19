import { useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar';

const ProductForm = () => {

    const location = useLocation();
    const action = location.pathname.split('/')[2].charAt(0).toUpperCase() + location.pathname.split('/')[2].slice(1);

    const handleSubmit = () => {
        
    }

    console.log(location);
    return (
        <div className='ProductForm'>
            <Navbar />
            <div className='container'>
                <h2 className='my-3'>{action} Product</h2>
                <form className='p-3 border rounded'>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='product_name'>Name</label>
                        <input className='form-control' type='text' name='product_name' id='product_name' defaultValue={location.state?.name} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='rate'>Rate</label>
                        <input className='form-control' type='number' name='rate' id='rate' defaultValue={location.state?.rate} />
                    </div>
                    <label htmlFor="category" className="form-label">Category</label>
                    <div className='input-group mb-3'>
                        <select className='form-select' name='category' id='category' defaultValue={location.state?.category}>
                            <option hidden disabled></option>
                            <option value='snack'>Snack</option>
                            <option value='meal'>Meal</option>
                            <option value='beverage'>Beverage</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="imgUrl">Image URL</label>
                        <input className='form-control' type="text" name='imgUrl' id='imgUrl' defaultValue={location.state?.imgUrl} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='description' className='form-label'>Description</label>
                        <textarea className='form-control' name='description' id='description' defaultValue={location.state?.description}></textarea>
                    </div>
                    <button className='btn btn-primary' onClick={handleSubmit()}>{action}</button>
                </form>
            </div>
        </div>
    );
}

export default ProductForm;
