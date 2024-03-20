/* eslint-disable react/no-unescaped-entities */
import useTestimonial from "../Hooks/useTestimonial";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaThinkPeaks } from "react-icons/fa6";
import { GoCodeReview } from "react-icons/go";
import { motion } from "framer-motion";

const Testimonial = () => {
    const [testimonials] = useTestimonial();
    return (
        <div className="my-16 mt-24 max-w-screen-xl mx-auto md:h-[80vh]">

            <div>
                <motion.h1
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.9,
                        x: { type: "spring", stiffness: 30 },
                        opacity: { duration: 2 },
                        ease: "easeIn",
                        duration: 1,
                    }}
                    className="text-4xl md:text-5xl font-bold text-center border-b-4 max-w-[350px] p-3 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Testimonials</motion.h1>

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

                                <p className="text-xl text-center font-bold py-5">What my Clients are saying?</p>

                                <motion.blockquote
                                    initial={{ y: 200, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.9,
                                        y: { type: "spring", stiffness: 30 },
                                        opacity: { duration: 2 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    className="text-xl text-center mt-6 italic">" {testimonial.details} "</motion.blockquote>


                                <motion.div
                                    initial={{ y: 200, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.9,
                                        y: { type: "spring", stiffness: 30 },
                                        opacity: { duration: 2 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    className="flex justify-center  pt-8">
                                    <img src={testimonial.image} alt="" className="h-[120px] w-[120px] rounded-full" />
                                </motion.div>
                                <motion.h4
                                    initial={{ y: -200, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.9,
                                        y: { type: "spring", stiffness: 30 },
                                        opacity: { duration: 2 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    className="text-2xl font-semibold text-pink-600 text-center pt-10">{testimonial.name}</motion.h4>
                                <motion.p
                                    initial={{ y: -200, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.9,
                                        y: { type: "spring", stiffness: 30 },
                                        opacity: { duration: 2 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    className="text-md text-center "> {testimonial.work}</motion.p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>






        </div>
    );
};

export default Testimonial;