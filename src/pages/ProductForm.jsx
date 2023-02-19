import Navbar from "../components/Navbar";

const ProductForm = () => {
    return (
        <div className='ProductForm'>
            <Navbar/>
             <div class="container align-items-center">
                <h2 class="my-4">Add Product</h2>
                <form>
                    
                    <div class="mb-3">
                        <label for="fullname" class="form-label">Name</label>
                        <input type="text" name="fullname" class="form-control" />
                    </div>
                    <div class="input-group my-4">
                        <select class="form-select" name="category">
                            <option hidden>Category</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Meals">Meals</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Others">Others</option>
                          </select>
                    </div>
                    <div class="mb-3">
                        <label for="contact" class="form-label">Price</label>
                        <input type="text" name="Price" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="wesite" class="form-label">Description</label>
                        <textarea class="form-control" name="subject" placeholder="Write something.." ></textarea>
                    </div>
                    <div class="mb-3">
                    
                        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                    <button type="submit" class="btn btn-primary mb-4">
                        Submit
                    </button>
                </form>
            </div>
        </div>
            )
        }

    export default ProductForm;