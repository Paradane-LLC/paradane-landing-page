"use client";
import React, { useState } from "react";

import Contactbg from "@/public/Contact-background";

import { AsYouType } from "libphonenumber-js";
import contactFormSent from "@/public/contact-form-sent.json";

import { PhoneCall, MailIcon, MapPinIcon } from "lucide-react";

import Lottie from "lottie-react";

function page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (emailError && name === "email" && isValidEmail(value)) {
      setEmailError("");
    }
  }

  function handlePhoneChange(e) {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    const formattedValue = new AsYouType("US").input(digitsOnly);
    setForm({ ...form, phone: formattedValue });
    if (phoneError && isValidPhone(formattedValue)) {
      setPhoneError("");
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhone(phone) {
    // Only allow 10 digits, US format
    return /^\(\d{3}\) \d{3}-\d{4}$/.test(phone);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    let valid = true;
    if (!isValidEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }
    if (!isValidPhone(form.phone)) {
      setPhoneError("Please enter a valid US phone number.");
      valid = false;
    }
    if (!valid) {
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setEmailError("");
      setPhoneError("");
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-white-500/40 flex flex-col">
      <div className="w-full relative flex justify-center">
        <h1 className="absolute top-40 left-1/2 -translate-x-1/2 z-10 text-5xl lg:text-6xl font-bold text-white text-center whitespace-nowrap">
          Contact Us
        </h1>
        <Contactbg color="#00489c" height={350} />
      </div>
      <div className="p-4 -mt-0.5 m-75 flex flex-col lg:flex-row flex-grow items-start justify-center">
        <div className="flex flex-col items-start justify-center gap-5 flex-1">
          <h1 className="font-bold text-zinc-400">CONTACT US</h1>
          <h1 className="font-bold text-4xl">GET IN TOUCH</h1>
          <span className="text-start max-w-lg">
            We'd love to hear from you! Whether you have a question about our
            services, pricing, or anything else. We will respond within 24 hours
            of receiving your message. Or give us a call and reach us
            immediately for a chat. If we are unnavailable we will call back
            same day.
          </span>
          <div className="flex flex-row">
            <div className="border-1 border-zinc-500 rounded-full p-2 flex items-center justify-center">
              <PhoneCall size={35} color="black" />
            </div>
            <div className="ml-3 mt-3">+1 (832) 859-7883</div>
          </div>
          <div className="flex flex-row">
            <div className="border-1 border-zinc-500 rounded-full p-2 flex items-center justify-center">
              <MailIcon size={35} color="black" />
            </div>
            <a
              href="mailto:support@paradane.com"
              className="text-blue-700 underline ml-3 mt-3"
            >
              support@paradane.com
            </a>
          </div>
          <div className="flex flex-row">
            <div className="border-1 border-zinc-500 rounded-full p-2 flex items-center justify-center">
              <MapPinIcon size={35} color="black" />
            </div>
            <div className="flex flex-col mt-1">
              <span className="ml-3 font-bold">
                AREAS SERVED <br />
              </span>
              <span className="ml-3 text-zinc-600">USA & EUROPE</span>
            </div>
          </div>
          <div></div>
        </div>
        <div className="bg-zinc-200 flex flex-col items-center justify-center p-5 gap-5 flex-1 mb-10 rounded-xl max-w-xl min-w-[320px] w-full mx-auto lg:max-w-lg">
          <div className="w-full min-h-[520px] flex flex-col items-center justify-center">
            {submitted ? (
              <div className="flex flex-col items-center mt-6">
                <Lottie
                  animationData={contactFormSent}
                  loop={false}
                  autoplay={true}
                  style={{ height: 240, width: 240 }}
                />
                <span className="text-black font-semibold mt-2 text-2xl">
                  Thank you! We'll be in touch.
                </span>
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold">MAKE APPOINTMENT</h1>
                <form
                  className="flex flex-col gap-3 w-full px-10 mb-10"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col gap-3 w-full">
                    <div className="justify-start font-bold">
                      <span>NAME</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="bg-white border border-gray-300 p-2 rounded placeholder-gray-400"
                    />
                    <span className="font-bold">EMAIL</span>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      className={`bg-white border p-2 rounded placeholder-gray-400 ${
                        emailError ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    {emailError && (
                      <span className="text-red-500 text-sm">{emailError}</span>
                    )}
                    <span className="font-bold">PHONE</span>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      value={form.phone}
                      onChange={handlePhoneChange}
                      className={`bg-white border p-2 pl-4 rounded placeholder-gray-400 ${
                        phoneError ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    {phoneError && (
                      <span className="text-red-500 text-sm">{phoneError}</span>
                    )}
                    <span className="font-bold">MESSAGE</span>
                    <textarea
                      type="text"
                      placeholder="Write message..."
                      className="bg-white border border-gray-300 p-2 rounded placeholder-gray-400"
                    />
                    <button className="bg-blue-800 lg:w-30 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors mt-5">
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
