import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/me.png";
import { Link } from "react-scroll";

export default function HomePage() {
  return (
    <div name="home" className="h-screen w-full  static ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-end Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            My name is Madeleine Norozkhani and im a front-end developer
            student! I love being creative and structured with my work. I also
            have the experience of doing both fullstack, UX projects and working
            agile.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-400 to-indigo-600 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full z-2"
          />
        </div>
      </div>
    </div>
  );
}
