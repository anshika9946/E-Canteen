import Navbar from "../components/Navbar";

const ProductForm = () => {
    return (
        <div className='ProductForm'>
            <Navbar/>
             <div className="container align-items-center">
                <h2 className="my-4">Add Product</h2>
                <form>
                    
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Name</label>
                        <input type="text" name="fullname" className="form-control" />
                    </div>
                    <div className="input-group my-4">
                        <select className="form-select" name="category">
                            <option hidden>Category</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Meals">Meals</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Others">Others</option>
                          </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contact" className="form-label">Price</label>
                        <input type="text" name="Price" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="wesite" className="form-label">Description</label>
                        <textarea className="form-control" name="subject" placeholder="Write something.." ></textarea>
                    </div>
                    <div className="mb-3">
                    
                        <input type="file" className="form-control-file" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-4">
                        Submit
                    </button>
                </form>
            </div>
        </div>
            )
        }

    export default ProductForm;