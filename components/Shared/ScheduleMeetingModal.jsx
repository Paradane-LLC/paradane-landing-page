import React, { useRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ScheduleMeetingModal({ open, onClose }) {
  const services = [
    { id: 1, name: "Website Development" },
    { id: 2, name: "Social Media Marketing" },
    { id: 3, name: "User Interface Design" },
    { id: 4, name: "Search Engine Optimization" },
    { id: 5, name: "Multiple options" },
  ];

  const modalRef = useRef(null);

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);

  // persisting fields in form
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");

  function resetForm() {
    setName("");
    setCompany("");
    setPhone("");
    setEmail("");
    setService("");
    setSelectedDate(null);
    setStep(1);
  }

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 mt-100 z-50 flex items-center justify-center bg-black/40">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative"
      >
        <button
          className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {step !== 3 && (
          <h2 className="text-2xl font-bold mb-4 text-zinc-700">
            Schedule a Meeting
          </h2>
        )}
        {step === 1 && (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setStep(2);
            }}
          >
            <div>
              <label className="block text-sm font-medium mb-1">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00489c]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00489c]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00489c]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00489c]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Service of Interest<span className="text-red-500">*</span>
              </label>
              <select
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00489c]"
              >
                <option value=""></option>
                {services.map((service) => (
                  <option key={service.id}>{service.name}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="mt-4 bg-[#00489c] text-white font-semibold py-2 rounded-lg hover:bg-[#003366] transition-all"
            >
              Next
            </button>
          </form>
        )}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <label className="block text-sm font-medium mb-1">
              Select a Date & Time for your Meeting
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              timeIntervals={60}
              minDate={new Date()}
              dateFormat={"MMM d, yyyy h:mm aa"}
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00489c]"
              placeholderText="Chose date and time"
            />
            <button
              className="mt-4 bg-[#00489c] text-white font-semibold py-2 rounded-lg hover:bg-[#003366] transition-all"
              disabled={!selectedDate}
              onClick={() => setStep(3)}
            >
              Confirm
            </button>
            <button
              className="mt-2 text-zinc-600 hover:text-zinc-800 underline"
              onClick={() => setStep(1)}
              type="button"
            >
              Back
            </button>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col gap-4 py-4 text-center">
            <span className="text-3xl text-[#00489c] font-bold">
              Thank you!
            </span>
            <span className="text-zinc-700 text-center">
              {" "}
              Your Meeting has been scheduled. <br />
              We look forward to speaking with you!
            </span>
            <span className="text-zinc-700 text-center">
              <br />
              Scheduled for: <br />
              <span className="font-bold text-lg text-[#00489c]">
                {selectedDate.toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  timeZoneName: "short",
                })}
              </span>
            </span>
            <button
              className="mt-4 bg-[#0489c] text-black border-1 font-semibold py-2 px-6 rounded-lg hover:bg-[#003366] hover:text-white transition-all"
              onClick={() => {
                (resetForm(), onClose());
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScheduleMeetingModal;
