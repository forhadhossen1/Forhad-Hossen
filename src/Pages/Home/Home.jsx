import AboutProject from "../../Components/AboutProject";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import MyProject from "../../Components/MyProject";
import Skill from "../../Components/Skill";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Skill></Skill>
            <AboutProject></AboutProject>
            <MyProject></MyProject>
            <Footer></Footer>
        </div>
    );
};

export default Home;