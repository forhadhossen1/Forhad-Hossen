import { FaHtml5 } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';


const Skill = () => {
    return (
        <div className="">
            <div className="grid grid-cols-3 gap-5">
                <Tilt>
                    <div className="bg-gradient-to-r from-indigo-500 to-pink-500">
                        <h1><FaHtml5 className='text-8xl text-red-500 text-center'></FaHtml5></h1>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="bg-gradient-to-r from-indigo-500 to-pink-500">
                        <h1><FaHtml5 className='text-8xl text-red-500 text-center'></FaHtml5></h1>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="bg-gradient-to-r from-indigo-500 to-pink-500">
                        <h1><FaHtml5 className='text-8xl text-red-500 text-center'></FaHtml5></h1>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="bg-gradient-to-r from-indigo-500 to-pink-500">
                        <h1><FaHtml5 className='text-8xl text-red-500 text-center'></FaHtml5></h1>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default Skill;