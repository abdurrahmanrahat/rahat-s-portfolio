import bannerSVG from '../../../assets/code-in-table.svg';

const Banner = () => {
    return (
        <div className="min-h-screen bg-[#1D1D1D]">
            <div className="max-w-screen-xl mx-auto text-white flex flex-col-reverse md:flex-row">
                <div className="md:w-1/2 flex flex-col justify-center mt-16 p-4">
                    <h3 className='text-2xl'>Hi! I&apos;m Abdur Rahman Rahat</h3>
                    <span className='text-5xl font-semibold'>ReactJS Developer</span>
                    <p className='my-4'>I am a Front-End Developer currently focusing on mastering React JS and Next JS for expanding my skills to create dynamic and interactive web applications.</p>
                    <span><button className='btn btn-md uppercase'>Resume</button></span>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                    <img src={bannerSVG} className='w-full mt-20' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;