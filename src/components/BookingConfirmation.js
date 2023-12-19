import About from "./About";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import "../utils/mockAPI.js";
import { generateBookingID } from "../utils/mockAPI.js";
import "../styles/BookingConfirmation.css";

export default function BookingConfirmation () {
    return(
        <> 
            <section id="bookingSection">
                <div id="divBookingConfirmation">
                    <p>Your booking is confirmed!</p>
                    <p>Your booking id is {generateBookingID()}</p>
                </div>
            </section>
            <Highlights />
            <Testimonials />
            <About />
        </>
    );
}