import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <div className='container my-3'>
                <div className=' py-3'>
                        <h1 class="display-4">Hello, Admin!</h1>
                        <p class="lead">What is your agenda for today!</p>
                        <hr class="my-4"/>
                    </div>
                    <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Explore Products Page</h5>
                        <p class="card-text">Update your products list for today!</p>
                        <Link to='/products'><button className='btn btn-primary me-2'>Go to Products</button></Link>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Explore Orders</h5>
                        <p class="card-text">Get a list of all your Orders!</p>
                        <Link to='/orders'><button className='btn btn-primary me-2'>Go to Orders</button></Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
