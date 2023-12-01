import Nav from './Nav.js'

export default function Header() {
    return (
        <header>
            <img src={require("../images/Asset 16@4x.png")}  width={250} height={60} alt='Little Lemon' />
            <Nav />
        </header>
    );
};