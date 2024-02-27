import herobg from '../assets/herobg.png';
import heroman from '../assets/heroman.png';
const Hero = () => {
    return (
        <div className='bg-cover bg-center h-[100vh]' style={{ backgroundImage: `url(${herobg})` }}>
            <div className='max-w-screen-xl mx-auto pt-16'>

                <div className='min-h-[100vh] flex flex-col lg:flex-row justify-between items-center p-3'>
                    <div className='flex-1'>
                        <h2 className='text-3xl md:text-5xl font-bold tracking-wide hover:tracking-widest'>Hi _ <br /> <span className=' text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-500'>I am Forhad </span></h2>
                        <h1 className='text-5xl md:text-7xl font-bold tracking-wide py-5'>Web <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-500'>Developer</span></h1>

                        <p className='font-medium text-xl text-gray-100 w-full md:w-2/3'>Welcome to my web corner! I am Forhad , a profasional MERN (MongoDB, Express.js, React, Node.js) stack developer. With a love for crafting seamless and dynamic web applications, I thrive on turning innovative ideas into reality. My expertise lies in leveraging the power of MongoDB for robust data storage, Express.js for scalable server-side development, React for building intuitive user interfaces,....<button className="btn btn-link text-blue-500"> Read More</button></p>
                    </div>

                    <div className=''>
                        <img src={heroman} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;