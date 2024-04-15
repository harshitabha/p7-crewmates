import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="pg-content">
            <Navbar />
            <div className="home-pg">
                <h1>D&D Party Creator</h1>
                <p>Come explore the world of Aleria. Build a party of adventures and travel with them. Will you seek glory and fame, choose to rescue the less fortunate</p>
                <Link 
                    to='/create'
                    className='btn text'>Add a party member →</Link>
            </div>
        </div>
    );
}

export default Home;