import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer>
            <img src={require("../images/Asset 20@4x.png")} width={'200px'} alt="logo" />

            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order</a></li>
            <li><a href="#">Login</a></li>
           </ul>

           <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Address</a></li>
            <li><a href="#">Phone Number</a></li>
            <li><a href="#">email</a></li>
           </ul>

           <ul>
            <li><a href="#">Social Media</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">X</a></li>
           </ul>
        </footer>
    );
};