import { FaHtml5 } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';


const Skill = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-3">
                    <Tilt>
                        <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-52" style={{
                            borderRadius: '78% 22% 40% 60% / 48% 60% 40% 52% ',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <h1 className="text-3xl font-bold"><FaHtml5 className='text-8xl text-red-500 text-center'></FaHtml5> HTML</h1>
                        </div>
                    </Tilt>
                    <Tilt>
                        <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-52" style={{
                            borderRadius: '23% 77% 68% 32% / 48% 60% 40% 52%  ',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <h1 className="text-3xl font-bold"><FaHtml5 className='text-8xl text-red-500 text-center'></FaHtml5>CSS</h1>
                        </div>
                    </Tilt>
                    <Tilt>
                        <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-52" style={{
                            borderRadius: '62% 38% 25% 75% / 48% 12% 88% 52%  ',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <h1 className="text-3xl font-bold"><FaHtml5 className='text-8xl text-red-500 text-center'></FaHtml5> TAILWIND</h1>
                        </div>
                    </Tilt>
                    <Tilt>
                        <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-52" style={{
                            borderRadius: '11% 89% 25% 75% / 80% 29% 71% 20%  ',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <h1 className="text-3xl font-bold"><FaHtml5 className='text-8xl text-red-500 text-center'></FaHtml5>BOOTSTRAP</h1>
                        </div>
                    </Tilt>
                
                </div>
            </div>
        </div>
    );
};

export default Skill;