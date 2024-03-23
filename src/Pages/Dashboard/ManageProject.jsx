import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useProject from "../../Hooks/useProject";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageProject = () => {
    const [projects, refetch] = useProject();
    const axiosPublic = useAxiosPublic();
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
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
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
                                        ${project.LiveLinki}
                                    </td>
                                    <td>
                                        {/* <Link to={`/dashboard/updateItem/${item._id}`}> */}
                                            <button className="btn text-white bg-orange-500"><FaEdit></FaEdit></button>
                                        {/* </Link> */}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn text-white bg-red-700"><FaTrashAlt></FaTrashAlt></button>
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