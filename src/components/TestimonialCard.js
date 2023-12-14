import "../styles/TestimonialCard.css";

export default function TestimonialCard (props){
    return(
        <article role="Testimonial" className="testimonialCard">
            <div id="testimonialWrapper">
                <div id="testimonialHeader">
                    <img src={props.testimonialImage} alt={props.testimonialComment} />
                    <p>{props.testimonialUser}</p>
                </div>
                <div id="testimonialComment">
                    <p>{props.testimonialComment}</p>
                </div>
                <div id="testimonialStars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
            </div>
        </article>
    )
}