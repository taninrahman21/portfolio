import React from "react";
import profile from "../../assets/profile.jpg";
import "react-sweet-progress/lib/style.css";
import { FaCheck, FaMusic, FaStudiovinari } from "react-icons/fa";

const About = () => {
  return (
    <div className="mt-44 mb-20 mx-auto">
      <div className="text-center">
        <h2 className="font-extrabold uppercase text-4xl">About Me</h2>
        <p>Home / About Me</p>
      </div>

      <div className="mt-24 px-2 md:px-6 w-[90%] lg:w-3/4 mx-auto">
        <h2 className="font-bold text-xl">About Information</h2>
        {/* Profile Information */}
        <div className="mt-5 md:mt-8 flex justify-center items-center md:items-start flex-col md:flex-row">
          <div className="md:mr-5">
            <img
              className="w-[150px] md:w-[200px] rounded-full"
              src={profile}
              alt=""
            />
          </div>
          <div className="mt-5 md:mt-0">
            <p className="font-medium text-justify">
              Hello! I’m Tanin Rahman. Web developer from Dhaka, Bangladesh. I
              have rich experience in web site design and building, also I have
              learned backend. I love to talk with you about our unique.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 place-items-center md:place-items-start mt-8 md:mt-16 text-sm">
              <p className="pb-2">
                <span className="text-[#f26b38]">Age:</span> 21
              </p>
              <p className="pb-2">
                <span className="text-[#f26b38]">Residence:</span> Bangladesh
              </p>
              <p className="pb-2">
                <span className="text-[#f26b38]">Address:</span> Dhaka,
                Bangladesh
              </p>
              <p className="pb-2">
                <span className="text-[#f26b38]">Phone:</span> +880 1784933595
              </p>
              <p className="pb-2">
                <span className="text-[#f26b38]">Email:</span>{" "}
                taninrahman21@gmail.com
              </p>
            </div>

            <button className="px-4 mt-4 py-2 block mx-auto md:mx-0 bg-[#f26b38] text-white">
              <a href='https://drive.google.com/file/d/1mml-5tbGmERS65eaqPaRmj8-_e1sMJl1/view?usp=share_link'>
              Download Resume
              </a>
            </button>
          </div>
        </div>

        {/* Coding Skills */}
        <div className="mt-16 w-full">
          <h2 className="font-bold text-xl">Coding Skills</h2>
          <div className="flex flex-wrap items-center mt-8">

            <div className="w-full mb-3">
              <div className="flex justify-between mb-2">
                <p>React</p>
                <p>85%</p>
              </div>
              <div className="w-full bg-gray-300">
                <div className="h-1 w-[85%] bg-[#f26b38]"></div>
              </div>
            </div>

            <div className="w-full mb-3">
              <div className="flex justify-between mb-2">
                <p>JavaScript</p>
                <p>88%</p>
              </div>
              <div className="w-full bg-gray-300">
                <div className="h-1 w-[88%] bg-[#f26b38]"></div>
              </div>
            </div>

            <div className="w-full mb-3">
              <div className="flex justify-between mb-2">
                <p>Node Js</p>
                <p>70%</p>
              </div>
              <div className="w-full bg-gray-300">
                <div className="h-1 w-[70%] bg-[#f26b38]"></div>
              </div>
            </div>

            <div className="w-full mb-3">
              <div className="flex justify-between mb-2">
                <p>Express Js</p>
                <p>75%</p>
              </div>
              <div className="w-full bg-gray-300">
                <div className="h-1 w-[75%] bg-[#f26b38]"></div>
              </div>
            </div>

            <div className="w-full mb-3">
              <div className="flex justify-between mb-2">
                <p>Tailwind & Bootstrap</p>
                <p>90%</p>
              </div>
              <div className="w-full bg-gray-300">
                <div className="h-1 w-[90%] bg-[#f26b38]"></div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex justify-between mb-2">
                <p>Html & Css</p>
                <p>95%</p>
              </div>
              <div className="w-full bg-gray-300">
                <div className="h-1 w-[90%] bg-[#f26b38]"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Education */}
        <div className="mt-16 ">
           <h2 className="font-bold text-xl">Education</h2>
           <div className="mt-6">

            <div>
              <p className="border border-[#f26b38] px-2 py-1 text-sm w-fit">Aug 2018 - Present</p>
              <h4 className="text-sm font-bold mt-3">Kurigram Polytechnic Institute - Kurigram</h4>
              <p className="text-sm mt-2">Diploma in Civil Engineering</p>
            </div>

            <div className="mt-5">
              <p className="border border-[#f26b38] px-2 py-1 text-sm w-fit">June 2022 - Dec 2022</p>
              <h4 className="text-sm font-bold mt-3">Complete Web Development Course - Programming Hero</h4>
              <p className="text-sm mt-2">I have done this course and complete almost 25+  <br />  projects where there is 4 Full Stack projects.</p>
            </div>

           </div>
        </div>

        {/* Knowledge */}
        <div className="mt-16 ">
           <h2 className="font-bold text-xl">Knowledge</h2>

           <div className="mt-5 grid grid-cols-1 md:grid-cols-2">

            <div className="flex items-center text-sm py-1">
              <FaCheck className="text-[#f26b38] mr-3"/>
              <p>Responsive Web Design</p>
            </div>
            <div className="flex items-center text-sm py-1">
              <FaCheck className="text-[#f26b38] mr-3"/>
              <p>UI/UX Disign</p>
            </div>
            <div className="flex items-center text-sm py-1">
              <FaCheck className="text-[#f26b38] mr-3"/>
              <p>Mern Stack Web Development</p>
            </div>
            <div className="flex items-center text-sm py-1">
              <FaCheck className="text-[#f26b38] mr-3"/>
              <p>Frontend Web Development</p>
            </div>
            <div className="flex items-center text-sm py-1">
              <FaCheck className="text-[#f26b38] mr-3"/>
              <p>Full Stack Web Development</p>
            </div>
            <div className="flex items-center text-sm py-1">
              <FaCheck className="text-[#f26b38] mr-3"/>
              <p>Modern and mobile-ready</p>
            </div>
            <div className="flex items-center text-sm py-1">
              <FaCheck className="text-[#f26b38] mr-3"/>
              <p>Fast Problem Solution</p>
            </div>
            <div className="flex items-center text-sm py-1">
              <FaCheck className="text-[#f26b38] mr-3"/>
              <p>Quick Learning</p>
            </div>

           </div>
        </div>

      {/* Interests */}
      <div className="mt-16 ">
         <h2 className="font-bold text-xl">Interests</h2>
         <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div>
            <div className="flex items-center mb-3">
              <FaStudiovinari className="text-[#f26b38] text-4xl mr-3"/>
              <p className="font-semibold">Learn New Technologies</p>
            </div>
            <p className="text-sm">I love learning when something new comes out.</p>
          </div>

          <div>
            <div className="flex items-center mb-3">
              <FaMusic className="text-[#f26b38] text-4xl mr-3"/>
              <p className="font-semibold">Music</p>
            </div>
            <p className="text-sm">I love to listen music.When I get bore I listen music and feel so fresh.</p>
          </div>

          <div>
            <div className="flex items-center mb-3">
              <FaStudiovinari className="text-[#f26b38] text-4xl mr-3"/>
              <p className="font-semibold">Traveling</p>
            </div>
            <p className="text-sm">When I get free time I love to travel new place.</p>
          </div>

         </div>
      </div>


      </div>
    </div>
  );
};

export default About;
