import ProjectCard from "../../Components/ProjectCard";
import useProject from "../../Hooks/useProject";
import Footer from '../../Components/Footer';

const Portfolio = () => {
    const [projects] = useProject();
    return (
        <div className=" max-w-screen-xl mx-auto">
            <div className="py-16">
                <h1 className="text-4xl md:text-6xl text-center font-bold py-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Portfolio</h1>

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