import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';

const ProductForm = () => {

    const formRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const action = location.pathname.split('/')[2].charAt(0).toUpperCase() + location.pathname.split('/')[2].slice(1);

    const handleSubmit = async () => {
        const url = `${import.meta.env.VITE_API_BASE_URL}/admin/v1/product/${location.state?.id ? location.state?.id : ''}`;
        const body = Array.from(formRef.current.elements).filter(input => input.name).reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer `
                },
                body: JSON.stringify(body)
            });

            const json = await response.json();
            if (json.ok) alert(json.message);
            
        } catch (err) {
            alert(err.message);
        }
        return navigate('/products');
    }

    return (
        <div className='ProductForm'>
            <Navbar />
            <div className='container'>
                <h2 className='my-3'>{action} Product</h2>
                <form className='p-3 border rounded' ref={formRef} onSubmit={() => { return false }}>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='product_name'>Name</label>
                        <input className='form-control' type='text' name='product_name' id='product_name' defaultValue={location.state?.name} required />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='rate'>Rate</label>
                        <input className='form-control' type='number' name='rate' id='rate' defaultValue={location.state?.rate} required />
                    </div>
                    <label htmlFor="category" className="form-label">Category</label>
                    <div className='input-group mb-3'>
                        <select className='form-select' name='category' id='category' defaultValue={location.state?.category || ''} required>
                            <option hidden disabled></option>
                            <option value='snack'>Snack</option>
                            <option value='meal'>Meal</option>
                            <option value='beverage'>Beverage</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="imageUrl">Image URL</label>
                        <input className='form-control' type="text" name='imageUrl' id='imageUrl' defaultValue={location.state?.imgUrl} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='description' className='form-label'>Description</label>
                        <textarea className='form-control' name='description' id='description' defaultValue={location.state?.description}></textarea>
                    </div>
                    <button type='button' className='btn btn-primary' onClick={handleSubmit}>{action}</button>
                </form>
            </div>
        </div>
    );
}

export default ProductForm;
