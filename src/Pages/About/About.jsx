/* eslint-disable react/no-unescaped-entities */
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa6";
import aboutImage from "../../assets/bulb.png"
import { SiAxios, SiExpress, SiFirebase, SiFramer, SiGit, SiGithub, SiJsonwebtokens, SiMongodb, SiNextdotjs, SiReactrouter, SiSass, SiTailwindcss } from "react-icons/si";
import Footer from "../../Components/Footer";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="pt-16 max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-12 p-3">
                <div className="flex-1">
                   
                    <motion.img

                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.9,
                            x: { type: "spring", stiffness: 30 },
                            opacity: { duration: 2 },
                            ease: "easeIn",
                            duration: 1,
                        }} src={aboutImage}
                        // className="md:h-[400px] w-full"
                        alt="forhad image" />
                </div>

                <div className="flex-1">

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
                        className="text-4xl font-bold py-7 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">My Story....</motion.h1>
                    <motion.p
                        initial={{ y: 200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.9,
                            y: { type: "spring", stiffness: 30 },
                            opacity: { duration: 2 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="text-lg lg:text-xl">Hello, my name is Farhad. My passion for computer technology started at a young age and it has always brought me joy. As I grew up, I realized my true desire to immerse myself in the IT field, driven by its dynamic nature and the urge to stay updated with the latest advancements.

                        The more I delve into this field, the more inspired I become, fueling my ambition to deepen my programming skills. I consider myself open-minded and determined, always eager to learn and adapt quickly to new challenges.

                        Outside of my professional interests, I enjoy hobbies like painting, traveling, playing and being active. These experiences contribute to my specific perspective and problem-solving skills.

                        I strongly believe that working with your team will not only allow me to contribute something new and valuable but also enable me to apply my knowledge to enhance the company is potential. Moreover, I am committed to fostering a productive and friendly environment, as I bring positivity and motivation to any team I join.

                        I am a dedicated team player interested in making a meaningful contribution to your company while continuously growing and learning in the process.</motion.p>


                    <a href="https://drive.google.com/uc?export=download&id=1GMlBsbmCYlSmJolDJpFiBNGKirfjRPtZ" download>
                        <motion.button
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.9,
                                x: { type: "spring", stiffness: 30 },
                                opacity: { duration: 2 },
                                ease: "easeIn",
                                duration: 1,
                            }}
                            className="text-md p-3 mt-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center gap-4">Get Resume</motion.button>
                    </a>
                    {/* https://drive.google.com/file/d/1GMlBsbmCYlSmJolDJpFiBNGKirfjRPtZ/view?usp=drive_link */}
                </div>
            </div>


            <motion.section
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                delay: 0.9,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 2 },
                ease: "easeIn",
                duration: 1,
            }}
            className="p-3 py-6 bg-gray-800 w-full md:w-1/2 mx-auto rounded-lg">
                <div className="container max-w-xl mx-auto">
                    <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
                        <blockquote className="max-w-lg text-lg italic font-medium text-center">"Everybody should learn to program a computer because it teaches you how to think__"</blockquote>
                        <div className="text-center dark:text-gray-400">
                            <p>Steve Jobs</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <div className="my-12">
                <motion.h2
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.9,
                        x: { type: "spring", stiffness: 30 },
                        opacity: { duration: 2 },
                        ease: "easeIn",
                        duration: 1,
                    }}
                    className="text-3xl font-bold p-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">My Workflow</motion.h2>
                <div className="py-12 p-3">
                    <ul className="timeline timeline-vertical  uppercase text-black text-sm md:text-xl">
                        <li>
                            <div className="timeline-start timeline-box">Requirements Analysis</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Ask About Deadlines and Restrictions</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Setting Up The Environment</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Programming</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Testing My Results</div>
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Supporting and Scaling My Code</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-4 my-12 p-3">
                <div className="flex-1">
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
                        className="text-4xl font-bold py-7 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-pink-500 pb-9">Skill....</motion.h1>
                    <img src="https://i.ibb.co/syDfnV7/3.jpg" alt=" image" />
                </div>

                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 uppercase ">
                        <h2 className="text-xl font-bold flex items-center gap-2">HTML <FaHtml5 /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">CSS <FaCss3 /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">Tailwind<SiTailwindcss /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">Bootstrap <FaBootstrap /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">JS <FaJs /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">React <FaReact /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">ReactRouter <SiReactrouter /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">Express <SiExpress /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">NodeJs <FaNodeJs /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">MongoDB <SiMongodb /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">NextJs<SiNextdotjs /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">FireBase<SiFirebase /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">Git<SiGit /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">GitHub<SiGithub /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">Sass<SiSass /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">JWT<SiJsonwebtokens /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">Axios<SiAxios /></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">Framer<SiFramer /></h2>
                    </div>

                </div>
            </div>

            <motion.p

                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.9,
                    y: { type: "spring", stiffness: 30 },
                    opacity: { duration: 2 },
                    ease: "easeIn",
                    duration: 1,
                }} className="py-12 text-lg md:text-xl -3">Welcome to my web corner! I am Farhad, a professional MERN (MongoDB, Express.js, React, Node.js) stack developer. With a passion for building seamless and dynamic web applications, I specialize in turning innovative ideas into tangible reality. My expertise lies in developing MongoDB is potential for powerful data storage, Express.js for scalable server-side development, and React for creating intuitive user interfaces. Also I am able to work with any new technology.</motion.p>


            <motion.section
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.9,
                    y: { type: "spring", stiffness: 30 },
                    opacity: { duration: 2 },
                    ease: "easeIn",
                    duration: 1,
                }}
                className="-3 py-6 bg-gray-800 w-full md:w-1/2 mx-auto rounded-lg my-12">
                <div className="container max-w-xl mx-auto">
                    <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
                        <blockquote className="max-w-lg text-lg italic font-medium text-center">"Interested in working together? We should line up a time to chat."</blockquote>
                        <blockquote className="max-w-lg text-lg italic font-medium text-center">"Have a project in mind?
                            My inbox is always open to new opportunities.
                            Feel free to contact me for any of your inquiries!"</blockquote>
                    </div>
                </div>
            </motion.section>

            <Footer></Footer>
        </div>
    );
};

export default About;