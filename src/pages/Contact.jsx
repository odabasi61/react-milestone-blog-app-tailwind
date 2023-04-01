import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="p-6 md:p-12">
        <h2 className="text-center pb-6 font-bold text-xl md:text-2xl lg:text-3xl">
          Contact Us
        </h2>
        <div>
          <form className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 m-auto">
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="name">First name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="lastname">Last name</label>
              <input type="text" id="lastname" placeholder="Your last name" />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="Your phone number" />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                className="resize-none"
                id="message"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="flex justify-center pt-4">
              <button className="text-white bg-blue-950 py-2 w-full rounded-lg">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
