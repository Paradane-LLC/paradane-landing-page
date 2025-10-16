"use client";
import React, { useState } from "react";

import Contactbg from "@/public/Contact-background";

import { AsYouType } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import contactFormSent from "@/public/contact-form-sent.json";

import { PhoneCall, MailIcon, MapPinIcon } from "lucide-react";

import Lottie from "lottie-react";

function page() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const subjects = [
    "Web Development",
    "UI/UX Design",
    "SEO",
    "Social Media Marketing",
    "Other",
  ];

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

    let formattedValue = "";
    if (digitsOnly.length === 0) {
      formattedValue = "";
    } else if (digitsOnly.length <= 3) {
      formattedValue = digitsOnly;
    } else {
      formattedValue = new AsYouType("US").input(digitsOnly);
    }

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

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    let valid = true;
    if (!isValidEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }
    if (form.phone && !isValidPhone(form.phone)) {
      setPhoneError("Please enter a valid US phone number.");
      valid = false;
    }
    if (!valid) {
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("xnQsjsdp", "edbsn5b028f776f6e54bc98ffba626d7ad149");
    formData.append(
      "xmIwtLD",
      "edbsn0cfb4561274e27144f1baf7fd49e2036e16766e121411230cf8098fd055ce5c2"
    );
    formData.append("xJdfEaS", "");
    formData.append("actionType", "Q2FzZXM=");
    formData.append("property(module)", "Cases");
    formData.append("returnURL", "https://paradane.com/contact");
    formData.append("First Name", form.firstName);
    formData.append("Contact Name", form.lastName);
    formData.append("Email", form.email);
    formData.append("Phone", form.phone);
    formData.append("Subject", form.subject);
    formData.append("Description", form.message);

    try {
      await fetch("https://help.paradane.com/support/WebToCase", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setSubmitted(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white-500/40 flex flex-col">
      <div className="w-full mx-auto relative flex">
        <h1 className="absolute top-40 left-1/2 -translate-x-1/2 z-10 text-5xl lg:text-6xl font-bold text-white text-center whitespace-nowrap">
          Contact Us
        </h1>
        <Contactbg color="#00489c" height={350} />
      </div>
      <div className="p-4 -mt-0.5 max-w-7xl mx-auto flex flex-col lg:flex-row flex-grow items-start justify-center w-full">
        <div className="flex flex-col items-start justify-center gap-5 flex-1">
          <h1 className="font-bold text-zinc-400">CONTACT US</h1>
          <h1 className="font-bold text-4xl">GET IN TOUCH</h1>
          <span className="text-start max-w-lg">
            We'd love to hear from you! Whether you have a question about our
            services, pricing, or anything else. We will respond within 24 hours
            of receiving your message. Or give us a call and reach us
            immediately for a chat. If we are unavailable we will call back same
            day.
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
        <div className="bg-zinc-200 flex flex-col p-5 flex-1 rounded-xl max-w-xl min-w-[320px] w-full mx-auto lg:max-w-lg">
          <div className="w-full min-h-[520px]  flex flex-col items-center justify-center">
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
                  className="flex flex-col gap-3 w-full mt-5"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col md:flex-row gap-3 w-full">
                    <div className="flex flex-col w-full">
                      <span className="font-bold">FIRST NAME</span>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="bg-white border border-gray-300 p-2 rounded placeholder-gray-400"
                        required
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="font-bold w-full">LAST NAME</span>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="bg-white border border-gray-300 p-2 rounded placeholder-gray-400"
                      />
                    </div>
                  </div>
                  {/* EMAIL & PHONE */}
                  <div className="flex flex-col md:flex-row gap-3 w-full">
                    <div className="flex flex-col w-full">
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
                        <span className="text-red-500 text-sm">
                          {emailError}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="font-bold">PHONE</span>
                      {/* <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={handlePhoneChange}
                        className={`bg-white border p-2 pl-4 rounded placeholder-gray-400 ${
                          phoneError ? "border-red-500" : "border-gray-300"
                        }`}
                      /> */}
                      <PhoneInput
                        international
                        defaultCountry="US"
                        value={form.phone}
                        onChange={(value) => setForm({ ...form, phone: value })}
                        className="bg-white border border-gray-300 p-2 rounded w-full"
                      />
                      {phoneError && (
                        <span className="text-red-500 text-sm">
                          {phoneError}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* SUBJECT */}
                  <div className="flex flex-col md:flex-row gap-3 w-full">
                    <div className="flex flex-col w-full">
                      <span className="font-bold">SUBJECT</span>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Select Subject"
                        className="bg-white border border-gray-300 p-2 rounded placeholder-gray-400"
                        required
                      >
                        <option value="" disabled>
                          Select Subject
                        </option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {/* MESSAGE */}
                  <div className="flex flex-col md:flex-row gap-3 w-full">
                    <div className="flex flex-col w-full">
                      <span className="font-bold">MESSAGE</span>
                      <textarea
                        type="text"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write message..."
                        className="bg-white border border-gray-300 p-2 py-5 rounded placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-800 lg:w-30 text-white p-2 mt-5 rounded-xl hover:bg-blue-700 transition-colors"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
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
