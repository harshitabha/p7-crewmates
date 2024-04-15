import {Link} from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="text">Home</Link>
            <Link to="/create" className="text">Create Party Member</Link>
            <Link to="/gallery" className="text">Gallery</Link>
        </div>
    );
}

export default Navbar;