import herobg from '../assets/herobg.png';
import heroman from '../assets/heroman.png';
const Hero = () => {
    return (
        <div className='bg-cover bg-center h-[100vh]' style={{ backgroundImage: `url(${herobg})` }}>
            <div className='max-w-screen-xl mx-auto pt-16'>

                <div className='min-h-[100vh] flex flex-col lg:flex-row justify-between items-center p-3'>
                    <div>
                        <h2 className='text-3xl md:text-5xl font-bold tracking-wide hover:tracking-widest'>Hi _ <br /> <span className=' text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-500'>I am Forhad </span></h2>
                        <h1 className='text-5xl md:text-7xl font-bold tracking-wide py-5'>Web <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-500'>Developer</span></h1>
                    </div>

                    <div>
                        <img src={heroman} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;