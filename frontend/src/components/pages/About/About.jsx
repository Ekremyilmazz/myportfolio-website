import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Heading from "../../HelperComponent/Heading";
import resume from '../../../assets/CV.pdf'

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/*heading */}
      <Heading title="About" subtitle="A Passionate Software Developer" />

      {/*Details Section */}
      <div className="mt-10 text-slate-500">
        <p>
          I am a dedicated and detail-oriented software developer with a strong
          passion for creating innovative solutions. With experience in web
          development, API design, Robotic Process Automation (RPA), and chatbot
          development, I thrive on building functional, user-friendly
          applications that solve real-world problems. My journey has led me to
          work with modern technologies like React, Node.js, and TypeScript,
          allowing me to stay up-to-date with industry trends and best
          practices.
        </p>{" "}
        <br />
        <p>
          I believe in writing clean, efficient code and delivering projects
          that meet both technical and business requirements. Whether it’s
          automating processes, developing smart assistants, or creating
          powerful APIs, I enjoy pushing boundaries and constantly improving my
          skills. My goal is to contribute to meaningful projects and provide
          value through technology-driven solutions.
        </p>
        {/*Social Links*/}
        <div className="flex space-x-4 mt-10">
          <a href="https://github.com/Ekremyilmazz">
          <AiFillGithub className="social-btn" />
          </a>
          <a href="https://www.linkedin.com/in/ekrem-y%C4%B1lmaz-309474205/">
           <AiFillLinkedin className="social-btn" />
          </a>         
        </div>
        {/* Button Links*/}
        <div className="fleax space-x-4 mt-4">
          <a href={resume}
          className="primary-btn">
            Download Resume
          </a>
          <a href="mailto:ekremmyillmaz@gmail.com?subject=Contact from Portfolio&body=Hello, I would like to reach out regarding..." className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
