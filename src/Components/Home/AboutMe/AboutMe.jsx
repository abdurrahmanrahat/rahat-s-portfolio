import RahatPhoto from '../../../assets/rahat.jpg';

const AboutMe = () => {
    return (
        <div className="bg-[#1D1D1D] text-white text-center">
            <div className="max-w-screen-xl mx-auto p-4">
                <h2 className="text-3xl font-semibold border-b-2 border-[#FEB000] md:w-[12%] mx-auto">About Me</h2>
                <div className='md:flex my-4'>
                    <div className='md:w-1/3'>
                        <img src={RahatPhoto} className='rounded p-4 mx-auto' alt="" />
                    </div>
                    <div className='md:w-2/3 text-start flex items-center md:ml-4'>
                        I am a fresher ReactJS developer, and I am currently studying English Language & Literature. My goal is to gain extensive experience in the above-mentioned field and make myself one of the best to become a master developer. Currently, I am also expanding my skills by learning Next.js, a popular framework for React-based web development. Next.js offers powerful features such as server-side rendering, static site generation, and routing, which can help create efficient and optimized web applications. By mastering Next.js, I am enhancing my ability to build dynamic and high-performance websites that provide a seamless user experience.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;