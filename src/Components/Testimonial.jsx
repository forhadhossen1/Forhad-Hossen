import useTestimonial from "../Hooks/useTestimonial";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaThinkPeaks } from "react-icons/fa6";
import { GoCodeReview } from "react-icons/go";

const Testimonial = () => {
    const [testimonials] = useTestimonial();
    return (
        <div className="my-16 mt-24 max-w-screen-xl mx-auto">
            
            <div>
                <h1 className="text-4xl md:text-6xl font-bold text-center border-b-4 max-w-[250px] p-3 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Testimonials</h1>
            </div>
    

            <div className="flex justify-center my-8">
                <FaThinkPeaks className="text-7xl font-bold text-purple-700" />
                <GoCodeReview className="text-7xl font-bold text-pink-700" />
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    testimonials.map(testimonial => (
                        <SwiperSlide
                            key={testimonial._id}
                            testimonial={testimonial}
                        >
                            <div className="max-w-[450px] mx-auto">

                                <p className="text-xl text-center mt-6">{testimonial.details}</p>
                                <div className="flex justify-center  pt-8">
                                    <img src={testimonial.image} alt="" className="h-[120px] w-[120px] rounded-full" />
                                </div>
                                <h4 className="text-2xl font-semibold text-pink-600 text-center pt-10">{testimonial.name}</h4>
                                <p className="text-md text-center "> {testimonial.work}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>






        </div>
    );
};

export default Testimonial;