import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DevOps Engineer",
          "Site Reliability Enthusiast",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Cyber Security Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;