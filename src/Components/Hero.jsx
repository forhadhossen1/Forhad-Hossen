import herobg from '../assets/herobg.png';

const Hero = () => {
    return (
        <div className='bg-cover bg-center h-[90vh]' style={{ backgroundImage: `url(${herobg})` }}>
            <div className='max-w-screen-xl mx-auto'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis cumque mollitia numquam, in et temporibus at facilis exercitationem labore adipisci quaerat quae autem, aperiam dicta beatae, assumenda voluptatibus minima eligendi!</p>
            </div>
        </div>
    );
};

export default Hero;