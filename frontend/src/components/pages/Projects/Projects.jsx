import React from 'react'
import ProjectBox from './ProjectBox';
import Heading from '../../HelperComponent/Heading';

const Projects = ({ProjectData}) => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/*heading */}
      <Heading 
      title="Projects"
      subtitle="A Collection of Projects That Demonstrate My Skills and Creativity"
      />

      {/*Projects Section */}
      <div>
        <ProjectBox ProjectData={ProjectData} />
      </div>
     </div>
  );
};

export default Projects
