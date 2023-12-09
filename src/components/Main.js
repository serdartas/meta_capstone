import About from './About.js';
import Hero from './Hero.js';
import Highlights from './Highlights.js';
import Testimonials from './Testimonials.js';
import "../styles/Main.css";

export default function Main() {
    return (
        <main>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </main>
    );
};