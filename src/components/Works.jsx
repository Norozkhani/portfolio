import React from "react";

import slack from "../assets/slack.png";
import todo from "../assets/todo.png";
import fns from "../assets/fairandsquare.png";

export default function Works() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-violet-500">
            Work
          </p>
          <p className="py-6 text-2xl">Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${todo})` }}
            className="bg-cover shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col w-100 h-100 bg-black">
              <span className=" text-lg font-bold text-white tracking-wider">
                Todo with DB
              </span>
              <p className="text-center">
                Fullstack todo application made with react, nodeJS and
                postgreSQL
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/Norozkhani/todo-with-db">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${fns})` }}
            className="bg-cover shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black w-full h-full  ">
              <span className=" text-lg font-bold text-white tracking-wider">
                Fair and Square
              </span>
              <p className="text-center">
                Client school project made in nextJS
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/Norozkhani/fair-and-square">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${slack})` }}
            className="bg-cover shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col w-100 h-100 bg-black">
              <span className=" text-lg font-bold text-white tracking-wider">
                Slack mock up
              </span>
              <p className="text-center">
                Slack mock up made with react, using firebase as a database.
              </p>
              <div className="pt-8 text-center">
                <a href="https://slack-mockup-group4.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Norozkhani/slack/tree/master">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
