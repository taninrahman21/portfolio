import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div>
        <h1 className="uppercase text text-center text-4xl font-extrabold">
          I'm Tanin Rahman
        </h1>
        <TypeAnimation
          sequence={[
            "Frontend Web Developer",
            1000,
            "Full Stack Web Developer",
            1000,
            "JavaScript Developer",
            1000,
            "React Developer",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "1em" , textAlign: 'center', marginLeft: "80px"}}
          wrapper="span"
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Home;
