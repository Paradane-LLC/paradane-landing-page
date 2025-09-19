import React from "react";

import { PhoneCall, MailIcon, PinIcon, MapPinIcon } from "lucide-react";

function page() {
  return (
    <div className="min-h-screen bg-amber-500/40 flex items-center justify-center gap-5 flex-1">
      <div className="bg-blue-800/60 p-4 m-50 flex flex-row flex-grow items-stretch justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-5 flex-1">
          <h1>CONTACT US</h1>
          <h1>GET IN TOUCH</h1>
          <span className="text-center max-w-lg">
            We'd love to hear from you! Whether you have a question about our
            services, pricing, or anything else, our team is ready to answer all
            your questions.
          </span>
          <div className="flex flex-row">
            <PhoneCall
              className="border-lg border-white"
              size={35}
              color="white"
            />
            <div>+1 (832) 859-7883</div>
          </div>
          <div className="flex flex-row">
            <MailIcon
              className="border-lg border-white"
              size={35}
              color="white"
            />
          </div>
          <div className="flex flex-row">
            <MapPinIcon
              className="border-lg border-white"
              size={35}
              color="white"
            />
          </div>
          <div></div>
        </div>
        <div className="bg-amber-500 flex flex-col items-center justify-center gap-5 flex-1 mb-10">
          <h1 className="text-3xl">Make an Appointment</h1>
          <div className="flex flex-col gap-3 w-full px-10 mb-10">
            <div className="justify-start font-bold">
              <span>NAME</span>
            </div>
            <input
              type="text"
              placeholder="NAME"
              className="border border-gray-300 p-2 rounded"
            />
            <span className="font-bold">EMAIL</span>
            <input
              type="text"
              placeholder="EMAIL"
              className="border border-gray-300 p-2 rounded"
            />
            <span className="font-bold">PHONE</span>
            <input
              type="text"
              placeholder="PHONE"
              className="border border-gray-300 p-2 rounded"
            />
            <span className="font-bold">MESSAGE</span>
            <input
              type="text"
              placeholder="MESSAGE"
              className="border border-gray-300 p-2 rounded"
            />
            <button className="bg-blue-800 lg:w-40 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
