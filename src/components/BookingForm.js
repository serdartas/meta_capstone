import availableTimes from "../staticData/availableTimes.json";
import occassions from "../staticData/occasions.json";

export default function BookingForm(props){
    return(
        <div id="bookingWrapper">
            <form>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time">
                    {availableTimes.map((availability)=>
                            <option key={availability.id}>{availability.availableTime}</option>
                        )}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    {occassions.map((occ)=>
                        <option key={occ.id}>{occ.occassion}</option>
                    )}
                </select>
                <button>Make Your reservation</button>
            </form>
        </div>
    )
}