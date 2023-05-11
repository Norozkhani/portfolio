import React from "react";
import slack from "../assets/slack.png";
import todo from "../assets/todo.png";
import fns from "../assets/fairandsquare.png";

export default function Works() {
  return (
    <div name="work" className="w-full md:h-full h-full text-gray-300 ">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-indigo-500">
            Work
          </p>
          <p className="py-6 text-2xl">Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className="grid gap-4">
          {/* Grid Item */}

          {/* PROJECT 1 */}
          <div className="bg-cover bg-gradient-to-r from-indigo-700 to-indigo-900 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div flex-col">
            <span className="text-2xl my-4 font-bold inline border-b-4 text-gray-300 border-indigo-500 ">
              Todo with DB
            </span>
            <div className="flex-row mx-auto flex content-div items-center justify-center pl-4 pr-4">
              <img
                src={todo}
                alt="Website img"
                className="rounded-md h-48 w-85 "
              />

              <p className="text-left p-10">
                Fullstack todo application made with react, nodeJS and
                postgreSQL. This project is structured with a client side and a
                server side. As my first fullstack project, I really enjoied
                working with the HTTPS princebles to create a RESTfull API to
                connect the database to my frontend todo application. In this
                project I've also made use of express and sequilize on the
                server side.
              </p>
            </div>
            {/* <div className="flex-col relative right-80">
              <i class="devicon-nodejs-plain-wordmark"></i>
              <i class="devicon-react-original"></i>
              <i class="devicon-postgresql-plain"></i>
              <i class="devicon-sequelize-plain"></i>
            </div> */}
            <div className="pt-8 text-center">
              <a
                target="_blank"
                href="https://github.com/Norozkhani/todo-with-db"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg static">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* PROJECT 2 */}
          <div className="bg-cover bg-gradient-to-r from-indigo-700 to-indigo-900 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div flex-col">
            <span className=" text-2xl my-4 font-bold inline border-b-4 text-gray-300 border-indigo-500">
              Fair and Square
            </span>
            <div className="flex-row mx-auto flex content-div items-center justify-center pl-4 pr-4">
              <img
                src={fns}
                alt="Website img"
                className="rounded-md h-48 w-85"
              />
              <p className="text-left p-10">
                Client school project made in nextJS. As part of the program I'm
                studying at Hyper, i got the honor to create my first
                application in Next JS. During this project I worked with the
                scrum princables and helped my client get their vision come to
                life.
              </p>
            </div>
            <div className="pt-8 text-center ">
              <a
                target="_blank"
                href="https://github.com/Norozkhani/fair-and-square"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* PROJECT 3 */}
          <div className="bg-cover bg-gradient-to-r from-indigo-700 to-indigo-900 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div flex-col">
            <span className="text-2xl my-4 font-bold inline border-b-4 text-gray-300 border-indigo-500">
              Slack mock up
            </span>
            <div className="flex-row mx-auto flex content-div items-center justify-center pl-4 pr-4">
              <img
                src={slack}
                alt="Website img"
                className="rounded-md object-scale-down h-48 w-96"
              />
              <p className="text-left p-10">
                Slack mock up made with react, using firebase as a database. As
                my second React project, I created a slack mockup. This was an
                amazing eperience and i made use of styled components and MUI to
                style the whole page. In addition to the whole application i
                furthered my learnings in databases with firebase and made use
                of the google authentication functionallity to make it able for
                users to log in with their google account. (demo included)
              </p>
            </div>
            <div className="pt-8 text-center">
              <a
                target="_blank"
                href="https://slack-mockup-group4.netlify.app/ "
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg static -right-80">
                  Demo
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Norozkhani/slack/tree/master"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg static -right-80">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
