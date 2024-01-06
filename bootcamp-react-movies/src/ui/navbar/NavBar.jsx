import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="nav-container">
            <NavLink to={"/"} className="nav-link">
                Home
            </NavLink>
        </div>
    );
};

export default NavBar;
