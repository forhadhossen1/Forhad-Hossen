import { Link } from "react-router-dom";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { motion } from "framer-motion";


const ProjectCard = ({ project, index }) => {
    const { ProjectName, ProjectDescription, GitHubLink, LiveLink, Image } = project || {}
    return (
        <div className="max-w-screen-xl mx-auto my-12">
            {
                index % 2 == 0 ? <div className="flex flex-col md:flex-row gap-12 justify-between my-12 items-center ">
                    {/* bg-gradient-to-b from-indigo-500 py-5 */}
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
                        className="p-3 flex-1">
                        <div className="border-8 border-purple-600 p-20 md:p-36 relative w-[200px] md:max-w-[350px]">
                        </div>
                        <div className="absolute -mt-56 md:-mt-80 ml-6">
                            <img src={Image} alt="" className="bg-red-500 h-[200px] md:h-[300px] w-[200px] md:w-[320px]" />
                        </div>
                    </motion.div>

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
                        className="p-3">
                        <h3 className="text-3xl font-bold my-4"> {ProjectName}</h3>
                        <p className="text-xl">{ProjectDescription}</p>


                        <div className="flex gap-3">
                            <Link to={LiveLink}>
                                <button className="text-md p-3 mt-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center gap-4">Live Link <LuExternalLink /></button>
                            </Link>
                            <Link to={GitHubLink}>
                                <button className="text-md p-3 mt-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center gap-4">GitHub<LuGithub /></button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
                    :
                    <div className="flex flex-col md:flex-row-reverse gap-12 justify-between my-12 items-center ">
                        {/* bg-gradient-to-b from-indigo-500 py-5 */}
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
                            className="p-3 flex-1">
                            <div className="border-8 border-purple-600 p-20 md:p-36 relative w-[200px] md:max-w-[350px]">
                            </div>
                            <div className="absolute -mt-56 md:-mt-80 ml-6">
                                <img src={Image} alt="" className="bg-red-500 h-[200px] md:h-[300px] w-[200px] md:w-[320px]" />
                            </div>
                        </motion.div>

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
                            className="p-3 ">
                            <h3 className="text-3xl font-bold my-4"> {ProjectName}</h3>
                            <p className="text-xl">{ProjectDescription}</p>


                            <div className="flex gap-3">
                                <Link to={LiveLink}>
                                    <button className="text-md p-3 mt-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center gap-4">Live Link <LuExternalLink /></button>
                                </Link>
                                <Link to={GitHubLink}>
                                    <button className="text-md p-3 mt-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center gap-4">GitHub<LuGithub /></button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
            }

        </div>
    );
};

export default ProjectCard;