import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useProject from "../../Hooks/useProject";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageProject = () => {
    const [projects, refetch] = useProject();
    const axiosPublic = useAxiosPublic();
    const handleDeleteProject = (project) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/project/${project._id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    //refetch to update the ui
                    Swal.fire({
                        title: "Deleted!",
                        text: `${project.name} has been deleted`,
                        icon: "success"
                    });
                    refetch()
                }
            }
        })
    }


    return (
        <div>
            <h2 className="text-4xl md:text-5xl font-bold text-center border-b-4 max-w-[350px] p-3 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Manage Project</h2>

            <div className="text-3xl font-bold md:flex justify-btween pb-5">
                <h2>Total Items :{projects.length}</h2>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-black">
                                <th>
                                    No:
                                </th>
                                <th>Image</th>
                                <th>Project Name</th>
                                <th>Live Link</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                projects.map((project, index) => <tr key={project._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={project.Image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {project.ProjectName}
                                    </td>
                                    <td>
                                        {project.LiveLink}
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updateProject/${project._id}`}>
                                            <button className="btn text-white bg-orange-500"><FaEdit></FaEdit></button>
                                            </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteProject(project)} className="btn text-white bg-red-700"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProject;