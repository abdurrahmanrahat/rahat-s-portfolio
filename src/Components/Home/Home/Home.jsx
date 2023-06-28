import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
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

            {/* Footer */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;