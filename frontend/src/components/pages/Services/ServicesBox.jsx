import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

const ServicesData = [
  {
    name: "Web Development",
    description:
      "Designing and developing modern, user-friendly websites (HTML, CSS, JavaScript, TypeScript, React, Node.js).",
    icon: <FaLaptopCode className="text-4xl" />,
    bgColor: "bg-indigo-500/70",
  },
  {
    name: "Chatbot Development",
    description: "Improving customer interaction by designing smart assistants like WhatsApp Chatbot.",
    icon: <FaComments className="text-4xl" />,
    bgColor: "bg-purple-500/70",
  },
  {
    name: "Robotic Process Automation (RPA)",
    description: "Automating business processes with RPA solutions, saving time and costs.",
    icon: <FaRobot className="text-4xl" />,
    bgColor: "bg-yellow-500/70",
  },
  {
    name: "API Development",
    description: "Creating robust and scalable APIs to connect systems and enhance functionality.",
    icon: <FaCodeBranch className="text-4xl" />,
    bgColor: "bg-green-500/70",
  },
];
const ServicesBox = () => {
  return (
    <div className="h-full mt-10 text-white">
      <div className="grid grid-cols-2 gap-6">
        {ServicesData.map(({ name, description, icon, bgColor }) => (
          <div className={`p-2 ${bgColor} min-h-[180px] rounded-xl`}>
            <div className="p-3 space-y-3">
              {icon}
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;
