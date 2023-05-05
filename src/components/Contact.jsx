import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-200 h-[100vh] flex justify-center items-center"
    >
      <div className="bg-white mx-auto shadow-xl rounded-lg h-[83vh] mt-14 p-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-4xl text-black-400 font-extrabold text-center mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Have a question or want to get in touch? Fill out the form below and
            we'll get back to you as soon as possible.
          </p>
          <form
            className="grid grid-cols-1 gap-6"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1">
              <label htmlFor="name" className="text-black font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="bg-blue-100 border text-black py-3 px-4 border-orange-400 focus:border-none rounded-lg focus:outline-dashed outline-2"
              />
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor="email" className="text-black font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="bg-blue-100 border text-black py-3 px-4 border-orange-400 focus:border-none rounded-lg focus:outline-dashed outline-2"
              />
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor="message" className="text-black font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="bg-blue-100 border text-black py-3 px-4 border-orange-400 focus:border-none rounded-lg focus:outline-dashed outline-2"
              />
            </div>
            <div className="grid grid-cols-1">
              <button
                type="submit"
                className="inline-flex text-xl items-center justify-center w-full px-6 py-3 border border-transparent rounded-md shadow-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 hover:outline-dashed"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
