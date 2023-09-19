import { useEffect, useState } from "react";

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])
    return (
        <div id="skills" className="bg-[#1D1D1D] text-white text-center">
            <div className="max-w-screen-xl mx-auto p-4">
                <h2 className="text-3xl font-semibold border-b-2 border-[#FEB000] w-[89%] md:w-[26%] mx-auto">Technologies and Tools</h2>
                <p className="md:w-3/5 mx-auto mt-2">Using a combination of state-of-the-art technologies and dependable open-source software, I develop user-focused, high-performing websites for mobile devices, tablets, and computers.</p>
                <div className="grid grid-cols-3 md:grid-cols-6 my-6">
                    {
                        skills.map(skill => <div key={skill._id} className="p-4 flex flex-col justify-center items-center">
                            <img src={skill.image} className="w-32" alt="" />
                            <h4>{skill.title}</h4>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;