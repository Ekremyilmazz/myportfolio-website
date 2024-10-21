import React from "react";
import projectPortfolio from '../../../assets/Portfolyo.pdf';

const ProjectBox = ({ ProjectData }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        {ProjectData.map((project, index) => {
          return (
            <div
              key={index}
              className="h-[160px] 
          rounded-xl"
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
              {/*Details Section */}
              <div className="pt-3 flex flex-col">
                <h1 className="text-2xl
                font-semibold">{project.name}</h1>
                <p className="line-clamp-2 
                text-gray-500">
                    {project.description}</p>
                <a href={project.previewLink}
                target="_blank"
                className="primary-btn mt-3
                ">View Project</a>
                <a href={projectPortfolio}
                target="_blank"
                className="primary-btn mt-3">View Projects Documents</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectBox;
