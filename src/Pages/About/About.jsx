import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa6";
import aboutImage from "../../assets/heroman.png"
import { SiExpress, SiFirebase, SiGit, SiGithub, SiMongodb, SiNextdotjs, SiReactrouter, SiSass, SiTailwindcss } from "react-icons/si";
const About = () => {
    return (
        <div className="py-16 max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-12 p-3">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold py-7">My Story....</h1>
                    <img src={aboutImage} alt="forhad image" />
                </div>

                <div className="flex-1">
                    <p className="text-lg lg:text-xl">Hello, my name is Farhad. My passion for computer technology started at a young age and it has always brought me joy. As I grew up, I realized my true desire to immerse myself in the IT field, driven by its dynamic nature and the urge to stay updated with the latest advancements.

                        The more I delve into this field, the more inspired I become, fueling my ambition to deepen my programming skills. I consider myself open-minded and determined, always eager to learn and adapt quickly to new challenges.

                        Outside of my professional interests, I enjoy hobbies like painting, traveling, playing and being active. These experiences contribute to my specific perspective and problem-solving skills.

                        I strongly believe that working with your team will not only allow me to contribute something new and valuable but also enable me to apply my knowledge to enhance the company is potential. Moreover, I am committed to fostering a productive and friendly environment, as I bring positivity and motivation to any team I join.

                        I am a dedicated team player interested in making a meaningful contribution to your company while continuously growing and learning in the process.</p>

                    <a href="https://drive.google.com/uc?export=download&id=1GMlBsbmCYlSmJolDJpFiBNGKirfjRPtZ" download>
                        <button className="text-md p-3 mt-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center gap-4">Get Resume</button>
                    </a>
                    {/* https://drive.google.com/file/d/1GMlBsbmCYlSmJolDJpFiBNGKirfjRPtZ/view?usp=drive_link */}
                </div>
            </div>

            <h3 className="text-center font-bold text-xl py-5">__Everybody should learn to program a computer because it teaches you how to think__</h3>
            <p className="text-center">Steve Jobs..</p>


            <div className="my-12">
                <h2 className="text-3xl font-bold p-3">My Workflow</h2>
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
                    <h1 className="text-4xl font-bold py-7">Skill....</h1>
                    <img src="https://i.ibb.co/syDfnV7/3.jpg" alt=" image" />
                </div>

                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 uppercase">
                        <h2 className="text-xl font-bold flex items-center gap-2">HTML <FaHtml5/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">CSS <FaCss3/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">Tailwind<SiTailwindcss/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">Bootstrap <FaBootstrap/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">JS <FaJs/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">React <FaReact/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">ReactRouter <SiReactrouter/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">Express <SiExpress/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">NodeJs <FaNodeJs/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">MongoDB <SiMongodb/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">NextJs<SiNextdotjs/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">FireBase<SiFirebase/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">Git<SiGit/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">GitHub<SiGithub/></h2>
                        <h2 className="text-xl font-bold flex items-center gap-2">Sass<SiSass/></h2>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;