import Tilt from 'react-parallax-tilt';
import { FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoIosMore } from "react-icons/io";
import { SiExpress, SiFirebase, SiMongodb, SiReactrouter, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import './Skill.css'
import ReactCloud from './ReactCloud';


const Skill = () => {

    return (
        <div>
            <div className="max-w-screen-xl mx-auto">

                <div className='my-12 flex flex-col md:flex-row justify-between items-center'>
                    <div className='p-3'>
                        <h1 className='text-4xl md:text-6xl font-bold  bg-gradient-to-r from-pink-500 to-blue-500 p-5 pr-9 rounded-r-full'>Skill..</h1>
                    </div>

                    <div className='p-3 '>
                        <ReactCloud></ReactCloud>
                    </div>
                </div>

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
                            <h1 className="text-3xl font-bold"><IoIosMore className='text-8xl text-black text-center'></IoIosMore >Others..</h1>
                        </div>
                    </Tilt>

                </div>
            </div>
        </div>
    );
};

export default Skill;