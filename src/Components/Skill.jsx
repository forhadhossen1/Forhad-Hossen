import Tilt from 'react-parallax-tilt';
import { FaBootstrap, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoIosMore } from "react-icons/io";
import { SiExpress, SiFirebase, SiMongodb, SiReactrouter, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import './Skill.css'


const Skill = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto bg-gradient-to-r from-indigo-500 to-pink-500">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 p-3">

                    <Tilt className='glass'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '200px'
                        }}>
                            <h1 className="text-3xl font-bold"><SiTailwindcss className='text-8xl text-cyan-400 text-center'></SiTailwindcss> Tailwind</h1>
                        </div>
                    </Tilt>

                    <Tilt className='glass'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '200px'
                        }}>
                            <h1 className="text-3xl font-bold"><FaBootstrap className='text-8xl text-indigo-500 text-center'></FaBootstrap>Bootstrap</h1>
                        </div>
                    </Tilt>

                    <Tilt className='glass'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '200px'
                        }}>
                            <h1 className="text-3xl font-bold"><FaJs className='text-8xl text-yellow-400 text-center'></FaJs>JS</h1>
                        </div>
                    </Tilt>

                    <Tilt className='glass'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '200px'
                        }}>
                            <h1 className="text-3xl font-bold"><FaReact className='text-8xl text-cyan-400 text-center'></FaReact>React</h1>
                        </div>
                    </Tilt>

                    <Tilt className='glass'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '200px'
                        }}>
                            <h1 className="text-3xl font-bold"><SiExpress className='text-8xl text-gray-400 text-center'></SiExpress>Express</h1>
                        </div>
                    </Tilt>

                    <Tilt className='glass'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '200px'
                        }}>
                            <h1 className="text-3xl font-bold"><FaNodeJs className='text-8xl text-green-700 text-center'></FaNodeJs>NodeJs</h1>
                        </div>
                    </Tilt>

                    <Tilt className='glass'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '200px'
                        }}>
                            <h1 className="text-3xl font-bold"><SiMongodb className='text-8xl text-green-700 text-center'></SiMongodb>MongoDB</h1>
                        </div>
                    </Tilt>

                    <Tilt className='glass'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '200px'
                        }}>
                            <h1 className="text-3xl font-bold"><SiFirebase className='text-8xl text-yellow-400 text-center'></SiFirebase>Firebase</h1>
                        </div>
                    </Tilt>

                    <Tilt className='glass'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '200px'
                        }}>
                            <h1 className="text-3xl font-bold"><TbBrandNextjs className='text-8xl text-gray-400 text-center'></TbBrandNextjs>NextJs</h1>
                        </div>
                    </Tilt>

                    <Tilt className='glass'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '200px'
                        }}>
                            <h1 className="text-3xl font-bold"><SiReactrouter className='text-8xl text-red-400 text-center'></SiReactrouter >React Router</h1>
                        </div>
                    </Tilt>

                    <Tilt className='glass'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '200px'
                        }}>
                            <h1 className="text-3xl font-bold"><IoIosMore className='text-8xl text-red-400 text-center'></IoIosMore >Others..</h1>
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
};

export default Skill;