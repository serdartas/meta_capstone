import "../styles/About.css";

export default function About(){
    return (
        <section role="about" className="about">
            <div id="aboutWrapper">
                <div id="aboutLeft">
                    <h2>Little Lemon</h2>
                    <h3>Hilversum</h3>
                    <p>Little lemon is the best kebab house in the state! We offer variety of kebabs from all over the world! Choices include but not limited to Lebanese, Turkish, Syrian, Iranian, Moroccan and many more.
                    <br/><br/>Book your table to try it out!</p>
                </div>
                <div id="aboutRight">
                    <img src={require("../images/restauranfood.jpg")} alt="Awesome food" id="imgBottom"/>
                    <img src={"images/GrilledFish.jpg"} alt="burned fish" id="imgTop"/>
                </div>
            </div>
        </section>
    );
};