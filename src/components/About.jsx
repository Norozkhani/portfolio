import React from "react";

export default function About() {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen opacity-80 text-gray-300   "
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md  bg-gradient-to-r from-violet-700 to-violet-900 opacity-100 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-violet-500 ">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Madeleine Norozkhani, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                A Front-end developer student with experience in building
                Responsive and Scalable Web apps. I am knowledged in UI/UX
                principles and practices. In addition to front-end development,
                i also have experience working with Node.js, postgeSQL,
                sequilize and express.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
