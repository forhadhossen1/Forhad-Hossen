import useProject from "../Hooks/useProject";

const MyProject = () => {

    const [projects] = useProject();
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-4xl md:text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 py-8">My Project</h1>
        </div>
    );
};

export default MyProject;