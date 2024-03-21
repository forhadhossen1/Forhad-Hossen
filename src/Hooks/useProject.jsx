// import { useEffect } from "react";
// import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useProject = () => {
    const axiosPublic = useAxiosPublic();
    // const [projects, setProjects] = useState([]);
    // const [loading, setLoading] = useState([true])
    // useEffect(() => {
    //     // fetch('project.json')
    //     fetch('http://localhost:5000/project')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProjects(data);
    //             setLoading(false);
    //         })
    // }, [])

    // return [projects, loading]

    const { data: projects = [], isPending: loading, refetch } = useQuery({
        queryKey: ['project'],
        queryFn: async () => {
            const res = await axiosPublic.get('/project');
            return res.data
        }
    })

    return [projects, refetch, loading]
};

export default useProject;