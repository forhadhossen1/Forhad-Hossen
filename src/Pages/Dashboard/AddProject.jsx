import { useForm } from "react-hook-form";

const AddProject = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <h2 className="text-4xl md:text-5xl font-bold text-center border-b-4 max-w-[350px] p-3 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Add Project</h2>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Project Name*</span>
                        </label>
                        <input {...register("ProjectName", { required: true })}
                            type="text" placeholder="Project Name" className="input input-bordered w-full " />

                    </div>
                    <div className="felx-col md:flex gap-6">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold">GitHub Link*</span>
                            </label>
                            <input {...register("GitHubLink", { required: true })}
                                type="text" placeholder="GitHub Link" className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Live Link*</span>
                            </label>
                            <input {...register("LiveLink", { required: true })}
                                type="text" placeholder="Recipe Live Link" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Project Description</span>
                        </label>
                        <textarea {...register("ProjectDescription")}
                            className="textarea textarea-bordered h-24" placeholder="Project Description"></textarea>
                    </div>

                    <div>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                    </div>

                    {/* <input  className="btn btn-block" type="submit" /> */}
                    <button className="btn btn-block bg-gradient-to-r from-orange-400 to-red-600" >Add Project</button>
                </form>
            </div>
        </div>
    );
};

export default AddProject;