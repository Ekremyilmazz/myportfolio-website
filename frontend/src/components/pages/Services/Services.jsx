import React from "react";
import ServicesBox from "./ServicesBox.jsx";
import Heading from "../../HelperComponent/Heading.jsx";

const Services = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
        {/*heading */}
      <Heading 
      title="Services"
      subtitle="Comprehensive Services: Web Development, API Design, RPA, and Chatbot Solutions"
      />

      {/*Services Card */}
      <div>
        <ServicesBox />
      </div>
    </div>
  );
};

export default Services;
