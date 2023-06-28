import { Link } from 'react-router-dom';
import project1 from '../../../assets/projects/assignment10.jpg';
import project2 from '../../../assets/projects/assignment11.jpg';
import project3 from '../../../assets/projects/assignment12.jpg';
import { FaGithub, FaRegEye } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";

const Projects = () => {
    return (
        <div id='projects' className="bg-[#1D1D1D] text-white">
            <div className="max-w-screen-xl mx-auto p-4 pt-20">
                <h2 className="text-3xl font-semibold border-b-2 border-[#FEB000] w-[55%] md:w-[15%] mx-auto text-center">What I Built</h2>
                <div className='my-10'>
                    {/* One */}
                    <div className='md:flex'>
                        <div className='md:w-1/2 flex flex-col justify-center mb-10 md:mb-0'>
                            <h2 className='text-3xl'>Restaurant Food Recipe with Cook</h2>
                            <h5 className='text-lg font-semibold mt-4'>Features:</h5>
                            <div className='mx-4'>
                                <li>A home page with a navbar and three section as well as Chef & Recipe Section and Lastly, this site has a gorgeous footer.</li>
                                <li>There has a login button, that redirect to the login page and user can login this site to view chef details.</li>
                                <li>Under this site, every chefs has his own details in another page and has their top three recipes in below on this chef details page.</li>
                            </div>
                            <p className='my-4'><span className='text-lg font-semibold'>Technologies used:</span> React js, Tailwind CSS, DaisyUI, Firebase, Express js, Node js & MongoDB.</p>
                            <div className='text-lg'>
                                <p>
                                    <Link to='https://assignment-09-client-79647.web.app/'>
                                        <span className='flex items-center gap-1 hover:text-[#FEB000]'><FaRegEye className='inline' /> Live View</span>
                                    </Link>
                                </p>
                                <p>
                                    <Link to='https://github.com/abdurrahmanrahat/Assignment-10-client'>
                                        <span className='flex items-center gap-1 hover:text-[#FEB000]'><FaGithub className='inline' /> Github Client</span>
                                    </Link>
                                </p>
                                <p>
                                    <Link to='https://github.com/abdurrahmanrahat/Assignment-10-server'>
                                        <span className='flex items-center gap-1 hover:text-[#FEB000]'><VscServerProcess className='inline' /> Github Server</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className='md:w-1/2 h-[440px] overflow-hidden p-4 mb-10 md:mb-0'>
                            <Link to='https://assignment-09-client-79647.web.app/'>
                                <img src={project1} className='w-full h-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000' alt="" />
                            </Link>
                        </div>
                    </div>

                    {/* Two */}
                    <div className='md:flex my-8'>
                        <div className='md:w-1/2 h-[440px] overflow-hidden p-4'>
                            <Link to='https://assignment-11-ph.web.app/'>
                                <img src={project2} className='w-full h-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000' alt="" />
                            </Link>
                        </div>
                        <div className='md:w-1/2 flex flex-col justify-center'>
                            <h2 className='text-3xl'>Various Sport Toys website</h2>
                            <h5 className='text-lg font-semibold mt-4'>Features:</h5>
                            <div className='mx-4'>
                                <li>A home page with a navbar & a carousel banner as well as more section like gallery, Sport category and Lastly, there has a footer with some links.</li>
                                <li>This website navbar has a login button, that redirect to the login page and user can login this site to view every toy details page.</li>
                                <li>Among this site, there have a page named Add A Toy from here user can add their toy products for selling in this site.</li>
                            </div>
                            <p className='my-4'><span className='text-lg font-semibold'>Technologies used:</span> React js, Tailwind CSS, DaisyUI, AOS Animation, Firebase, Express js, Node js & MongoDB.</p>
                            <div className='text-lg'>
                                <p>
                                    <Link to='https://assignment-11-ph.web.app/'>
                                        <span className='flex items-center gap-1 hover:text-[#FEB000]'><FaRegEye className='inline' /> Live View</span>
                                    </Link>
                                </p>
                                <p>
                                    <Link to='https://github.com/abdurrahmanrahat/Assignment-11-client'>
                                        <span className='flex items-center gap-1 hover:text-[#FEB000]'><FaGithub className='inline' /> Github Client</span>
                                    </Link>
                                </p>
                                <p>
                                    <Link to='https://github.com/abdurrahmanrahat/Assignment-11-server'>
                                        <span className='flex items-center gap-1 hover:text-[#FEB000]'><VscServerProcess className='inline' /> Github Server</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* One */}
                <div className='md:flex'>
                    <div className='md:w-1/2 flex flex-col justify-center mb-10 md:mb-0'>
                        <h2 className='text-3xl'>Foreign Language Learning School</h2>
                        <h5 className='text-lg font-semibold mt-4'>Features:</h5>
                        <div className='mx-4'>
                            <li>A home page with a navbar & a carousel banner as well as more section like Popular Instructors and Classes Section.</li>
                            <li>Among this site, there have a page named Dashboard from here user redirect Student Dashboard and Instructors redirect Instructor Dashboard as well as admin redirect Admin Dashboard.</li>
                            <li>In this site, student can select their courses & pay for it and Instructor can upload their new courses and Admin can accept or remove courses.</li>
                        </div>
                        <p className='my-4'><span className='text-lg font-semibold'>Technologies used:</span> React js, Tailwind CSS, DaisyUI, anime js, Firebase, Express js, Node js, vercel & MongoDB.</p>
                        <div className='text-lg'>
                            <p>
                                <Link to='https://assignment-12-flls.web.app/'>
                                    <span className='flex items-center gap-1 hover:text-[#FEB000]'><FaRegEye className='inline' /> Live View</span>
                                </Link>
                            </p>
                            <p>
                                <Link to='https://github.com/abdurrahmanrahat/Assignment-12-client'>
                                    <span className='flex items-center gap-1 hover:text-[#FEB000]'><FaGithub className='inline' /> Github Client</span>
                                </Link>
                            </p>
                            <p>
                                <Link to='https://github.com/abdurrahmanrahat/Assignment-12-server'>
                                    <span className='flex items-center gap-1 hover:text-[#FEB000]'><VscServerProcess className='inline' /> Github Server</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className='md:w-1/2 h-[440px] overflow-hidden p-4 mb-10 md:mb-0'>
                        <Link to='https://assignment-12-flls.web.app/'>
                            <img src={project3} className='w-full h-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000' alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;