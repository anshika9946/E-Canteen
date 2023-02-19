import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav className='navbar navbar-expand-lg bg-secondary '>
                <div className='container-fluid'>
                    <NavLink to="/" className='navbar-brand'>
                        <img src='\src\images\logo.png' alt='Logo' width='80' height='60' className='d-inline-block align-text-top' />
                       
                    </NavLink>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2  mb-lg-0 '>
                            <li className='nav-item '>
                                <h5><NavLink className="nav-link active text-white " to="/" aria-current='page'>Home</NavLink></h5>
                            </li>
                            <li className='nav-item'>
                                <h5><NavLink className="nav-link active text-white" to="/products" aria-current='page'>Products</NavLink></h5>
                            </li>
                            <li className='nav-item'>
                                <h5><NavLink className="nav-link active text-white" to="/orders" aria-current='page'>Orders</NavLink></h5>
                            </li>
                        </ul>
                        <form className='d-flex' role='search'>
                        <h5><NavLink className="nav-link active text-white" to="/" aria-current='page'>Admin</NavLink></h5>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
