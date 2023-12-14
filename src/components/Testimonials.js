import "../styles/Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const comments = [
    {
        testimonialImage:"images/avatar1.jpg",
        testimonialUser:"John Smith",
        testimonialComment:"That was an awesome dinner!",
    },
    {
        testimonialImage:"images/avatar2.jpg",
        testimonialUser:"Jade Smith",
        testimonialComment:"I literally ate my fingers!",
    },
    {
        testimonialImage:"images/avatar3.jpg",
        testimonialUser:"Jack Smith",
        testimonialComment:"No I don't know John or Jade!",
    },
];

export default function Testimonials() {
    return (
        <section role="Testimonials" className="testimonials">
            <div id="testimonialsHeading">
                <h2>Testimonials</h2>
            </div>
                <div id="testimonialContainer">
                    {
                        comments.map((comment) =>
                            <TestimonialCard
                                key = {comment.testimonialUser}
                                testimonialComment={comment.testimonialComment}
                                testimonialImage={comment.testimonialImage}
                                testimonialUser={comment.testimonialUser}
                            />
                        )
                    }
                </div>
            
        </section>
    );
};