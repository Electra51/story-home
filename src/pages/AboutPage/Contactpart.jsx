import React from "react";
import Button from "../../components/common/Button";

const ContactPart = () => {
  return (
    <div className="mx-auto max-w-[1200px] flex flex-col justify-center items-center">
      <h1 className="text-[50px] w-[634px] text-center">
        Creative project? Let's have a productive talk.
      </h1>
      <div className="mt-[80px] grid grid-cols-2 gap-10 justify-start items-center">
        <div class="relative">
          <input
            id="name"
            name="name"
            type="text"
            class="peer placeholder-transparent h-10 w-[500px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Your name"
          />
          <label
            for="name"
            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Name
          </label>
        </div>
        <div class="relative">
          <input
            id="Email"
            name="Email"
            type="Email"
            class="peer placeholder-transparent h-10 w-[500px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Email"
          />
          <label
            for="Email"
            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Email
          </label>
        </div>

        {/* <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                 
                  <div class="relative">
                    <button class="bg-blue-500 text-white rounded-md px-2 py-1">
                      Submit
                    </button>
                  </div>
                </div> */}
      </div>
      <div class="relative mr-auto mt-[90px] mx-20">
        <input
          id="Message"
          name="Message"
          type="Message"
          class="peer placeholder-transparent h-10 w-[1050px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
          placeholder="Message"
        />
        <label
          for="Message"
          class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
          Message
        </label>
      </div>{" "}
      <div className="my-20 ml-[-170px]">
        {" "}
        <Button title={"Send Now"} />
      </div>
    </div>
  );
};

export default ContactPart;
