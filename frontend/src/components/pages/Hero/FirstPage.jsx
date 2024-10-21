import React from "react";
import personImg from "../../../assets/Person.jpeg";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main
        className="h-full w-full
      bg-secondary page-shadow "
      >
        <div className="p-10 space-y-4">
          {/*image-container*/}
          <div>
            <img
              src={personImg}
              alt=""
              className="h-[300px] mx-auto"
            />
          </div>
          {/*text-container*/}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl
              font-bold text-black/80">I'm Ekrem</p>
              <p className="text-black/75
              text-left">Software Developer</p>
              <p className="text-black/75">
                I'm Ekrem a junior software developer. I am focused more on user-side processes,  where ı feel 
                more confident and comfortable.
              </p>
              <a className="inline-block primary-btn" 
              href="mailto:ekremmyillmaz@gmail.com">Hire Me</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
