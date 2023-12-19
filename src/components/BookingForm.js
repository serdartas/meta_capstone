import { useEffect, useState } from "react";
import occassions from "../staticData/occasions.json";
import "../utils/mockAPI.js";
import { submitAPI } from "../utils/mockAPI.js";
import { useNavigate } from "react-router-dom";
import "../styles/BookingForm.css";

export default function BookingForm(props){
    const [toDay, setToDay] = useState(new Date());
    const [bookingDate, setBookingDate] = useState(toDay.toLocaleDateString());
    const [bookingTime, setBookingTime] = useState("17:00");
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occassion, setOccassion] = useState("Anniversary");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const action = {
            Type:'reserve time',
            date:bookingDate,
            timeSlot:bookingTime
        };

        props.setAvailableTimes(action);
    }, [bookingDate]);

    useEffect(() => {
        if(formSubmitted){
            navigate("/booking-confirmation");
        }
    }, [formSubmitted]);

    const submitForm = (e) => {
        e.preventDefault();
        const formData = {
                customerId:1,
                date:bookingDate,
                timeSlot:bookingTime,
                guests:numberOfGuests,
                occassion:occassion
        };
        setFormSubmitted(submitAPI(formData));
    }

    const dateChanged = (e) => {
        const targetDate = new Date(e.target.value);
        setBookingDate(targetDate.toLocaleDateString())
    }

    function getAvailableTimes() {
        if(bookingDate === undefined ){
            return ["00:00"];
        }
        return(props.availableTimes);
    }

    return(
        <div id="bookingWrapper">
            <form>
                <div className="formColumn">
                    <div className="formRow">
                        <label htmlFor="res-date">Choose date</label>
                        <input type="date" id="res-date" onChange={(i)=> dateChanged(i)} />
                    </div>
                    <div className="formRow">
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time" onChange={(i)=> setBookingTime(i.target.value)}>
                            {getAvailableTimes().map((availability)=>
                                    <option key={availability.availableTime}>{availability.availableTime}</option>
                                )}
                        </select>
                    </div>
                </div>
                <div className="formColumn">
                    <div className="formRow">
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(i)=> setNumberOfGuests(i.target.value)} />
                    </div>
                    <div className="formRow">
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" onChange={(i)=> setOccassion(i.target.value)}>
                            {occassions.map((occ)=>
                                <option key={occ.id}>{occ.occassion}</option>
                            )}
                        </select>
                    </div>
                </div>
                <button onClick={submitForm} >Make Your reservation</button>
            </form>
        </div>
    )
}