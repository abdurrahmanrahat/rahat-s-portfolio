import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            {/* <Navbar></Navbar> */}

            {/* Body Section */}
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Contact></Contact>

            {/* Footer */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;