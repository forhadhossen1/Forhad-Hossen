import useTestimonial from "../Hooks/useTestimonial";

const Testimonial = () => {
    const [testimonials] = useTestimonial();
    return (
        <div>
            {
                testimonials.map(testimonial => (
                    <Testimonial
                        key={testimonial._id}
                        testimonial={testimonial}
                    >

                    </Testimonial>
                ))
            }
        </div>
    );
};

export default Testimonial;