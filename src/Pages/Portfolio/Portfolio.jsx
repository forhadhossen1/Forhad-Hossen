import ProjectCard from "../../Components/ProjectCard";
import useProject from "../../Hooks/useProject";
import Footer from '../../Components/Footer';
import { motion } from "framer-motion";

const Portfolio = () => {
    const [projects] = useProject();
    return (
        <div className=" max-w-screen-xl mx-auto">
            <div className="py-16">
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
                    className="text-4xl md:text-5xl font-bold text-center border-b-4 max-w-[350px] p-3 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Portfolio</motion.h1>

            </div>

                {
                    projects.map((project, index) => (
                        <ProjectCard
                            key={project._id}
                            project={project}
                            index={index}
                        >
                        </ProjectCard>
                    ))
                }

            </div>
            <div className="mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Portfolio;

// {index%2==0? <div>img text</div>: <div> text img</div>}