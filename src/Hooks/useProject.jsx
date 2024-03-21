import { useEffect } from "react";
import { useState } from "react";

const useProject = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState([true])
    useEffect(() => {
        // fetch('project.json')
        fetch('http://localhost:5000/project')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
    }, [])

    return [projects, loading]
};

export default useProject;