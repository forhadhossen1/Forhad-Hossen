import AboutProject from "../../Components/AboutProject";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import MyProject from "../../Components/MyProject";
import Responsive from "../../Components/Responsive";
import Skill from "../../Components/Skill";
import Testimonial from "../../Components/Testimonial";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Skill></Skill>
            <AboutProject></AboutProject>
            <MyProject></MyProject>
            <Testimonial></Testimonial>
            <Responsive></Responsive>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;