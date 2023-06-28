

const Navbar = () => {

    const Title = "Rahat's Portfolio"

    const navItems = <>
        <li className="md:mx-3 text-xl hover:text-[#FEB000]"><a href="#home">Home</a></li>
        <li className="md:mx-3 text-xl hover:text-[#FEB000]"><a href="#skills">Skills</a></li>
        <li className="md:mx-3 text-xl hover:text-[#FEB000]"><a href="#projects">Projects</a></li>
        <li className="md:mx-3 text-xl hover:text-[#FEB000]"><a href="#about">About</a></li>
        <li className="md:mx-3 text-xl hover:text-[#FEB000]"><a href="#contact">Contact</a></li>
    </>


    return (
        <div className="flex justify-center">
            <div className="navbar fixed z-10 bg-opacity-25 bg-black text-white max-w-screen-xl text-center flex justify-between">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-36">
                            {navItems}
                        </ul>
                    </div>
                    <h2 className="text-xl ml-24 md:ml-0">{Title}</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal md:mr-80">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;