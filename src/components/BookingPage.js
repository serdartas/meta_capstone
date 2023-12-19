import BookingForm from "./BookingForm";
import "../styles/BookingPage.css";
import initialAvailableTimes from "../staticData/availableTimes.json";
import { useReducer } from 'react';
import "../utils/mockAPI.js";
import { fetchAPI, submitAPI } from "../utils/mockAPI.js";
import Highlights from "./Highlights.js";
import Testimonials from "./Testimonials.js";
import About from "./About.js";

const updateTimes = (availableTimes, action) => {
// Reducer function.
// action.Type: 'reserve time'
// action.timeSlot: ...'17:00'
// action.date: 'some date toLocaleString
    let output;
    switch (action.Type) {
        case undefined:
            console.log('Undefined action type!');
            break;
        case 'reserve time':
            output = fetchAPI(action.date);
            break;
        case 'table booked':
            output = submitAPI(action.formData);
            break;
        default:
            break;
    }
    return output;
};

const initializeTimes = () => {
    // console.log(fetchAPI(new Date()));
    // const currentDay = new Date();
    // let timeSeries = [{"date":currentDay.toLocaleDateString(), availableSlots:initialAvailableTimes}];
    // for (let i = 0; i < 7; i++) {
    //     currentDay.setDate(currentDay.getDate() + 1);
    //     timeSeries = [...timeSeries, {"date":currentDay.toLocaleDateString(), availableSlots:initialAvailableTimes}]
    // }
    // return timeSeries;
    return fetchAPI(new Date());
}

function BookingPage(params) {
    // const [availableTimes, setAvailableTimes] = useState(initialAvailableTimes);
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initialAvailableTimes, initializeTimes);

    return(
        <>
        <section id="bookingSection">
            <div id="bookingSectionHeader">
                <h1>Book your table!</h1>
            </div>
            <div id="bookingForm">
                <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
            </div>
        </section>
        <Highlights />
        <Testimonials />
        <About />
        </>
    );
}

export default BookingPage;