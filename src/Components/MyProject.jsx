import { Link } from "react-router-dom";
import useProject from "../Hooks/useProject";
import ProjectCard from "./ProjectCard";

const MyProject = () => {

    const [projects] = useProject();
    const firstFiveProject = projects.slice(0, 3);
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-4xl md:text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">My Project</h1>

            <div>
                <div>
                    {firstFiveProject.map(project => (
                        <ProjectCard
                            key={project._id}
                            project={project}
                        />
                    ))}
                </div>

                {
                    projects.length > 3 && (
                        <Link to='/portfolio'>
                            <div className="flex justify-center my-12">
                                <button className="text-md p-3 w-[200px] mt-4 rounded-sm text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">See More</button>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default MyProject;