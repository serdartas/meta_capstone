import { click } from "@testing-library/user-event/dist/click";
import "../styles/Nav.css";
import { useState } from "react";

export default function Nav(props) {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const handleClick = () => setHamburgerOpen(!hamburgerOpen);

    return (
        <nav>
            <div id="menuList">
                <ul id="navBar" className={hamburgerOpen?"open":""}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div id="menuIcon" className="icon" onClick={handleClick}>
                <i id="bar" className={hamburgerOpen?"fa fa-times":"fa fa-bars"}></i>
            </div>
        </nav>
    );
};