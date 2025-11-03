import Button from "../../components/common/Button";

const ContactPart = () => {
  return (
    <div className="mx-auto max-w-[1200px] flex flex-col justify-center items-center mb-[174px] md:mt-12 lg:my-[200px]">
      <h1 className="text-[26px] md:text-[35px] w-[340px] md:w-[480px] lg:w-[700px] lg:text-[50px] text-center">
        Creative project? Let&apos;s have a productive talk.
      </h1>
      <div className="mt-[80px] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 justify-start items-center">
        <div className="relative">
          <input
            type="text"
            className="peer placeholder-transparent h-10 w-[300px] lg:w-[500px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Your name"
          />
          <label
            htmlFor="name"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Name
          </label>
        </div>
        <div className="relative mt-14 md:mt-0 lg:mt-0">
          <input
            type="Email"
            className="peer placeholder-transparent h-10 w-[300px] lg:w-[500px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Email"
          />
          <label
            htmlFor="Email"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Email
          </label>
        </div>
      </div>
      <div className="relative mr-[76px] md:mr-auto lg:mr-auto mt-[90px] mx-20">
        <input
          type="Message"
          className="peer placeholder-transparent h-10 w-[300px] md:w-[600px] lg:w-[1050px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
          placeholder="Message"
        />
        <label
          htmlFor="Message"
          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
          Message
        </label>
      </div>{" "}
      <div className="my-42 ml-[-170px]">
        {" "}
        <Button title={"Send Now"} aria="Send Now with StoryHome" />
      </div>
    </div>
  );
};

export default ContactPart;
