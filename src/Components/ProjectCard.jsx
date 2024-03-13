import imae from "../assets/heroman.png"
import { LuExternalLink, LuGithub } from "react-icons/lu";
const ProjectCard = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-12">
            <div>
                <div className="p-3">
                    <div className="border-8 border-purple-600 p-20 md:p-36 relative w-[200px] md:max-w-[350px]">
                    </div>
                    <div className="absolute -mt-56 md:-mt-80 ml-6">
                        <img src={imae} alt="" className="bg-red-500 h-[200px] md:h-[300px]" />
                    </div>
                </div>

                <div className="p-3">
                    <h3 className="text-3xl font-bold my-4"> Project Name</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cupiditate, vero praesentium sit fugit facilis temporibus exercitationem deserunt tenetur! Labore neque eveniet obcaecati quis commodi dicta ut repellendus ipsum quae?</p>


                    <div className="flex gap-2">
                        <button className="text-md p-3 mt-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center gap-4">Live Link <LuExternalLink /></button>
                        <button className="text-md p-3 mt-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center gap-4">GitHub<LuGithub /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;