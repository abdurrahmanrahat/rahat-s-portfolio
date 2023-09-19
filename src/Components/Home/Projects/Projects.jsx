import { Link } from "react-router-dom";
// import project1 from "../../../assets/projects/assignment10.jpg";
// import project2 from "../../../assets/projects/assignment11.jpg";
// import project3 from "../../../assets/projects/college-project.jpg";
import { FaGithub, FaRegEye } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div id="projects" className="bg-[#1D1D1D] text-white">
      <div className="max-w-screen-xl mx-auto p-4 pt-20">
        <h2 className="text-3xl font-semibold border-b-2 border-[#FEB000] w-[55%] md:w-[15%] mx-auto text-center">
          What I Built
        </h2>
        <div className="my-10">
          {/* One */}
          {projects.map((p) => (
            <div key={p._id} className="md:flex custom-row-reverse-class">
              <div className="md:w-1/2 flex flex-col justify-center mb-10 md:pl-4 md:mb-0">
                <h2 className="text-3xl">{p.projectName}</h2>
                <h5 className="text-lg font-semibold mt-4">Features:</h5>
                <div className="mx-4">
                  <li>{p.features.one}</li>
                  <li>{p.features.two}</li>
                  <li>{p.features.three}</li>
                </div>
                <p className="my-4">
                  <span className="text-lg font-semibold">
                    Technologies used:
                  </span>{" "}
                  {p.technology}
                </p>
                <div className="text-lg">
                  <p>
                    <Link to={p.liveLink}>
                      <span className="flex items-center gap-1 hover:text-[#FEB000]">
                        <FaRegEye className="inline" /> Live View
                      </span>
                    </Link>
                  </p>
                  <p>
                    <Link to={p.git}>
                      <span className="flex items-center gap-1 hover:text-[#FEB000]">
                        <FaGithub className="inline" />{" "}
                        {p.git_server ? "Github Client" : " Github Link"}
                      </span>
                    </Link>
                  </p>
                  {p.git_server && (
                    <p>
                      <Link to={p.git_server}>
                        <span className="flex items-center gap-1 hover:text-[#FEB000]">
                          <VscServerProcess className="inline" /> Github Server
                        </span>
                      </Link>
                    </p>
                  )}
                </div>
              </div>
              <div className="md:w-1/2 h-[440px] overflow-hidden p-4 mb-10 md:mb-0">
                <Link to={p.liveLink}>
                  <img
                    src={p.projectImage}
                    className="w-full h-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
