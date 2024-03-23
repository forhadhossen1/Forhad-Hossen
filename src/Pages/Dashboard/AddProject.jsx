import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProject = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data)
        // imge upload to imageBB and then get an url;
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data);
        if(res.data.success){
            const project = {
                ProjectName : data.ProjectName,
                GitHubLink : data.GitHubLink,
                LiveLink : data.LiveLink,
                ProjectDescription : data.ProjectDescription,
                Image : res.data.data.display_url
            }
            const projectTopic = await axiosPublic.post('/project', project);
            console.log(projectTopic);
            if(projectTopic.data.insertedId){
                alert(' Iam success')
            }
        }
    };

    return (
        <div className="">
            <h2 className="text-4xl md:text-5xl font-bold text-center border-b-4 max-w-[350px] p-3 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Add Project</h2>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold text-black">Project Name*</span>
                        </label>
                        <input {...register("ProjectName", { required: true })}
                            type="text" placeholder="Project Name" className="input input-bordered w-full text-black" />

                    </div>
                    <div className="felx-col md:flex gap-6">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold text-black">GitHub Link*</span>
                            </label>
                            <input {...register("GitHubLink", { required: true })}
                                type="text" placeholder="GitHub Link" className="input input-bordered w-full text-black" />
                        </div>

                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold text-black">Live Link*</span>
                            </label>
                            <input {...register("LiveLink", { required: true })}
                                type="text" placeholder="Live Link" className="input input-bordered w-full text-black" />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-black">Project Description</span>
                        </label>
                        <textarea {...register("ProjectDescription")}
                            className="textarea textarea-bordered h-24 text-black" placeholder="Project Description"></textarea>
                    </div>

                    <div>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                    </div>

                    {/* <input  className="btn btn-block" type="submit" /> */}
                    <button className="btn btn-block bg-gradient-to-r from-purple-600 to-pink-600 border-none text-black" >Add Project</button>
                </form>
            </div>
        </div>
    );
};

export default AddProject;