import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen  flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
          <p className="text-4xl font-bold inline border-b-4 border-violet-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Send me a message</p>
        </div>
        <input
          className="bg-[#f6f8fb] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#f6f8fb]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#f6f8fb] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-violet-500 hover:border-violet-500 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </div>
    </div>
  );
}
