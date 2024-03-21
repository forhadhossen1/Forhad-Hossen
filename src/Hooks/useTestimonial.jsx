
import { useState } from "react";

const useTestimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState([true]);

    // fetch('testimonial.json')
    fetch('http://localhost:5000/testimonials')
        .then(res => res.json())
        .then(data => {
            setTestimonials(data);
            setLoading(false);
        })

    return [testimonials, loading]
};

export default useTestimonial;