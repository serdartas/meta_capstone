import Nav from './Nav.js';
import "../styles/Header.css";

export default function Header() {
    return (
        <header>
            <img src={require("../images/Asset 16@4x.png")} alt='Little Lemon' />
            <Nav />
        </header>
    );
};