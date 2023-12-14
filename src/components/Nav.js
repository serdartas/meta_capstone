import { click } from "@testing-library/user-event/dist/click";
import "../styles/Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const handleClick = () => setHamburgerOpen(!hamburgerOpen);

    return (
        <nav>
            <div id="menuList">
                <ul id="navBar" className={hamburgerOpen?"open":""}>
                    <li><Link to='/' className="menuItem">Home</Link></li>
                    <li><Link to='/' className="menuItem">About</Link></li>
                    <li><Link to='/' className="menuItem">Menu</Link></li>
                    <li><Link to='/' className="menuItem">Reservations</Link></li>
                    <li><Link to='/' className="menuItem">Order</Link></li>
                    <li><Link to='/' className="menuItem">Login</Link></li>
                </ul>
            </div>
            <div id="menuIcon" className="icon" onClick={handleClick}>
                <i id="bar" className={hamburgerOpen?"fa-regular fa-xmark":"fa-regular fa-bars"}></i>
            </div>
        </nav>
    );
};