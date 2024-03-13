import useTestimonial from "../Hooks/useTestimonial";
import TestimonialCard from "./TestimonialCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
    const [testimonials] = useTestimonial();
    return (
        <div className="my-12 mt-16">
            <div>
                <h1 className="text-4xl font-bold text-center border-b-4 max-w-[250px] p-3 mx-auto">Testimonial</h1>
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    testimonials.map(testimonial => (
                        <SwiperSlide
                            key={testimonial._id}
                            testimonial={testimonial}
                        >
                            <div>
                                hello world
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>






        </div>
    );
};

export default Testimonial;