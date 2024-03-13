import useProject from "../Hooks/useProject";
import ProjectCard from "./ProjectCard";

const MyProject = () => {

    const [projects] = useProject();
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-4xl md:text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">My Project</h1>

            <div>
                {
                    projects.map(project => <ProjectCard 
                        key={project._id}
                        project={project}
                    ></ProjectCard> )
                }
            </div>
        </div>
    );
};

export default MyProject;