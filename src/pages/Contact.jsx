import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          subject,
          message,
        },
        publicKey,
      );
      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.log("Email sending failed:", error);
      alert("Message not send.Please try again");
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center mb-10"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center rounded-full bg-[#062532] gap-2 ">
          <p className="flex items-center justify-center text-sm gap-2.5 text-[#22D3EE] border border-[#164E63] rounded-full px-5 py-2">
            {" "}
            <MdOutlineMail className="h-4 w-4 text-cyan-400" /> Get In Touch
          </p>
        </div>
        <p className="bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent text-sm sm:text-2xl md:text-3xl font-bold mt-3">
          {" "}
          Contact Me
        </p>
        <p className="text-gray-500 mt-2">
          I'm always open to new opportunities,collaboration,or just a friendly
          chat,
        </p>
        <p className="text-gray-500">Fell Free to reach out!</p>
      </div>

      <div className=" items-stretch flex-col md:flex-row justify-center w-full max-w-7xl mx-auto flex gap-6 md:gap-8 mt-5 px-4">
        <div className="w-full md:w-[40%] min-w-0 h-full bg-[#171B26] text-white p-4 sm:p-6 rounded-2xl">
          <p className="text-sm text-blue-600 font-semibold flex items-start">
            LET'S CONNECT
          </p>
          <h1 className="text-lg sm:text-xl md:text-3xl font-bold mt-2 ">
            Let's Build{" "}
          </h1>
          <h1 className="text-lg sm:text-xl md:text-3xl font-bold">
            Something <span className="text-cyan-500">Amazing !</span>
          </h1>
          <p className="text-sm text-gray-400 mt-4">
            I'm currently looking for full-time opportunities and open to
            collaborations. Whether you have a project idea, a job opportunity,
            or just want to say hi, I'd love to hear from you.
          </p>

          <div className="flex flex-col mt-2">
            <a
              href="mailto:soni.umang921@gmail.com"
              className="w-full flex mt-2 items-center"
            >
              <div className="bg-[#142638] p-4 rounded-2xl">
                <MdEmail className="h-5 w-5 text-blue-500" />
              </div>

              <div className="flex flex-col justify-center ml-2">
                <span>Email</span>
                <p className="text-sm text-gray-500">soni.umang921@gmail.com</p>
              </div>

              <div className="ml-auto flex items-center">
                <FaExternalLinkAlt className="h-4 w-4" />
              </div>
            </a>
          </div>

          <div className="flex flex-col mt-2">
            <a
              href="https://www.linkedin.com/in/umang-soni123/"
              className="w-full flex  mt-2"
            >
              <div className="bg-[#142638] p-4 rounded-2xl">
                <FaLinkedin className="h-5 w-5 text-blue-500" />
              </div>
              <div className="flex flex-col ml-2 justify-center">
                <span>Linkedin</span>
                <p className="text-sm text-gray-500">
                  linkedin.com/in/umang-soni123/
                </p>
              </div>
              <div className="ml-auto flex items-center">
                <FaExternalLinkAlt className="h-4 w-4" />
              </div>
            </a>
          </div>
          <div className="flex flex-col mt-2">
            <a
              href="https://github.com/soniumang123"
              className="w-full flex  mt-2"
            >
              <div className="bg-[#142638] p-4 rounded-2xl">
                <FaGithub className="h-5 w-5 text-blue-500" />
              </div>
              <div className="flex flex-col justify-center ml-2">
                <span>Github</span>
                <p className="text-sm text-gray-500">github.com/soniumang123</p>
              </div>
              <div className="ml-auto flex items-center">
                <FaExternalLinkAlt className="h-4 w-4" />
              </div>
            </a>
          </div>
          <div className="flex flex-col mt-2">
            <div
              href="mailto:soni.umang921@gmail.com"
              className="w-full flex  mt-2"
            >
              <div className="bg-[#142638] p-4 rounded-2xl">
                <IoLocationOutline className="h-5 w-5 text-blue-500" />
              </div>
              <div
                href="mailto:soni.umang921@gmail.com"
                className="flex flex-col justify-center ml-2"
              >
                <p href="mailto:soni.umang921@gmail.com">Location</p>
                <p className="text-sm text-gray-500">Jaipur,Rajasthan,India</p>
              </div>
              <a
                href="mailto:soni.umang921@gmail.com"
                className="ml-auto flex items-center"
              >
                <FaLocationArrow className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="border-t border-[#263449] mt-5 pt-3">
            <p className="text-[#A9B9D0] text-base mb-3">Follow Me</p>

            <div className="flex flex-row gap-2.5">
              <FaGithub className="h-6 w-6 " /> <MdEmail className="h-6 w-6" />{" "}
              <FaLinkedin className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className=" w-full md:flex-1 min-w-0 h-full bg-[#171B26] text-white p-4 sm:p-6 rounded-2xl ">
          <p className="text-sm text-blue-500">Send A Message</p>
          <p className="text-3xl font-bold">Drop Me a Message</p>
          <p className="text-sm text-gray-400 mt-2">
            Fill out the form below and I'll get back to you as soon as possible
          </p>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row w-full gap-3">
              <div className="w-full md:flex-1 min-w-0 flex flex-row gap-3 mt-2 border border-[#263449] bg-[#121923] px-4 py-3 rounded-xl transition-all duration-200 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/20">
                <MdOutlinePerson className="h-4 w-4 mt-2" />
                <div className="">
                  <p className="w-full">Your Name</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-transparent text-white text-sm placeholder:text-gray-500 outline-none border-none focus:ring-0 mt-1"
                    required
                  />
                </div>
              </div>
              <div className="w-full md:flex-1 min-w-0 flex flex-row gap-3 mt-2 border border-[#263449] bg-[#121923] px-4 py-3 rounded-xl transition-all duration-200 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/20">
                <MdEmail className="h-4 w-4 mt-2" />
                <div className="">
                  <p className="w-full">Enter Email</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    className="w-full bg-transparent text-white text-sm placeholder:text-gray-500 outline-none border-none focus:ring-0 mt-1"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:flex-1 min-w-0 flex flex-row gap-3 mt-2 border border-[#263449] bg-[#121923] px-4 py-3 rounded-xl transition-all duration-200 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/20">
              <FaRegFileAlt className="h-4 w-4 mt-2" />
              <div className="flex flex-col">
                <p className="mb-2">Subject</p>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What's this about?"
                  className="w-full bg-transparent text-white text-sm placeholder:text-gray-500 outline-none border-none focus:ring-0"
                  required
                />
              </div>
            </div>
            <div
              className="flex flex-row gap-3 mt-2 border border-[#263449] bg-[#121923] px-4 py-3 rounded-xl transition-all duration-200 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/20"
              required
            >
              <FaRegComment className="h-4 w-4 mt-2" />
              <div className="flex flex-col">
                <p className="mb-2">Message</p>
                <textarea
                  type="text"
                  cols={100}
                  rows={5}
                  placeholder="Type your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-y bg-transparent text-white text-sm placeholder:text-gray-500 outline-none border-none focus:ring-0 min-h-32"
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="Submit"
              className="w-full bg-linear-to-r from-[#2196F3] via-[#3B5BFF] to-[#6D00FF] text-white font-semibold py-2 rounded-xl hover:brightness-110 transition-all duration-300 my-5 cursor-pointer"
            >
              Send Message
            </button>
          </form>
          {success && (
            <p className="mt-4 text-green-400">Form Submitted Successfully</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
