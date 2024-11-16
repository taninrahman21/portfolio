import React, { useEffect, useState } from "react";
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  const words = ['Web', 'Software', 'MERN Stack', 'Full Stack', 'Frontend'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [words.length]);


  return (
    <div className="flex items-center h-full">
      <div>
        <h1 className="uppercase text-3xl md:text-5xl lg:text-6xl text-[#333] font-extrabold">Tanin Rahman</h1>
        <div className="w-[160px] mt-6 md:mt-8 sm:text-3xl md:text-6xl font-extrabold h-2 bg-black"></div>
        <div className="flex text-xl md:text-2xl mt-7 md:mt-10">
          <div className="mr-2">
            <span
              key={index} // Ensure React re-renders each time the word changes
              className="flip-animation text-gray-500"
            >
              {words[index]}
            </span>
          </div>
          <p className="text-[#333] font-medium">Developer</p>
        </div>

        <div className="mt-5">
          <button className="bg-[#333] text-white px-5 py-2 md:p-4 font-medium hover:bg-white hover:text-[#333] border border-transparent hover:border-[#333] transition-all duration-300">
            <Link to='/about'>Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
