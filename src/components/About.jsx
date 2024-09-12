import React from "react";

export default function About() {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen opacity-90 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md  bg-gradient-to-r from-indigo-700 to-indigo-900 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-indigo-500 ">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold opacity-100">
              <p>
                Hi. I'm Madeleine Norozkhani, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                A Fullstack developer student with experience in building
                Responsive and Scalable Web apps. I am knowledged in UI/UX
                principles and practices. I am currantly looking for an
                fullstack internship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
