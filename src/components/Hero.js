import "../styles/Hero.css";

export default function Hero() {
    return (
        <section role="highlights" className="hero">
            <div id="heroLeft">
                <h1>Little Lemon</h1>
                <h2>Hilversum</h2>
                <p>Little lemon is the best kebab house in the state! We offer variety of kebabs from all over the world! Choices include but not limited to Lebanese, Turkish, Syrian, Iranian, Moroccan and many more.</p> 
                <p> Book your table to try it out!</p>
                <button>Reserve a Table</button>
            </div>
            <div id="heroRight">
                <img src={require("../images/restauranfood.jpg")} />
            </div>
        </section>
    );
};