import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-800">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/3 md:w-1/2 bg-gray-600 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="flex flex-col mb-8">
            <div className="flex-grow">
              <h2 className="text-white dark:text-white font-bold mb-2">
                Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-full">
              <form className="flex flex-col mt-4">
                <label
                  htmlFor="name"
                  className="text-white font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg mt-2 mb-4"
                  required
                />

                <label
                  htmlFor="email"
                  className="text-white font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg mt-2 mb-4"
                  required
                />

                <label
                  htmlFor="message"
                  className="text-white font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg mt-2 mb-4"
                  rows="4"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-lg"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white font-bold mb-2">
            Location
          </h2>
          <div className="my-4">
            <p className="text-gray-300 mb-2">
              <FaMapMarkerAlt className="inline-block mr-2" /> 1234 Street Name,
              City Name, United States
            </p>
            <p className="text-gray-300 mb-2">
              <FaPhone className="inline-block mr-2" /> +1 234 567 8901
            </p>
            <p className="text-gray-300 mb-2">
              <FaEnvelope className="inline-block mr-2" /> contact@company.com
            </p>
          </div>
          <iframe
            title="Map"
            className="w-full h-80 rounded-lg overflow-hidden mt-8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6804.378190645003!2d74.24679319460738!3d31.49148579560293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391902458f9a4737%3A0xc000320dbcba19e2!2sIttefaq%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1681933464507!5m2!1sen!2s"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
