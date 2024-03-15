import aboutImage from "../../assets/heroman.png"
const About = () => {
    return (
        <div className="py-16 max-w-screen-xl mx-auto">
            <div>
                <div>
                    <img src={aboutImage} alt="forhad image" />
                </div>

                <div>
                    <p>Hello, my name is Farhad. My passion for computer technology started at a young age and it has always brought me joy. As I grew up, I realized my true desire to immerse myself in the IT field, driven by its dynamic nature and the urge to stay updated with the latest advancements.

                        The more I delve into this field, the more inspired I become, fueling my ambition to deepen my programming skills. I consider myself open-minded and determined, always eager to learn and adapt quickly to new challenges.

                        Outside of my professional interests, I enjoy hobbies like painting, traveling, playing and being active. These experiences contribute to my specific perspective and problem-solving skills.

                        I strongly believe that working with your team will not only allow me to contribute something new and valuable but also enable me to apply my knowledge to enhance the company is potential. Moreover, I am committed to fostering a productive and friendly environment, as I bring positivity and motivation to any team I join.

                        I am a dedicated team player interested in making a meaningful contribution to your company while continuously growing and learning in the process.</p>
                </div>
            </div>
        </div>
    );
};

export default About;