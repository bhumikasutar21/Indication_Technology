// import React from "react";

// function ContactSection() {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "f3ff2336-edec-4fe6-b0b2-e911f4dc4ffe");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//     }
//   };
//   return (
//     <div
//       id="contact"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-12"
//     >
//       <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Content */}
//         <div>
//           <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
//             Schedule Your{" "}
//             <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
//               Appointment
//             </span>
//           </h2>
//           <p className="mt-4 text-gray-600">
//             From first hello to final handshake, we're here to assist you every
//             step of the way, whether you have questions, feedback, or interested
//             in collaborating. Reach out—your next big move starts here.
//           </p>

//           <ul className="mt-6 space-y-3 text-gray-700">
//             <li>⚡ Connect all your tools in one place.</li>
//             <li>🚀 Stay ahead with cutting-edge features.</li>
//             <li>🧩 Tailor our platform to your needs.</li>
//             <li>💬 24/7 Support: Always here to help.</li>
//             <li>✨ ...And more</li>
//           </ul>

//           <div className="flex items-center mt-6 space-x-2">
//             <img
//               src="https://randomuser.me/api/portraits/men/32.jpg"
//               alt="client1"
//               className="w-10 h-10 rounded-full border-2 border-white shadow"
//             />
//             <img
//               src="https://randomuser.me/api/portraits/women/44.jpg"
//               alt="client2"
//               className="w-10 h-10 rounded-full border-2 border-white shadow -ml-3"
//             />
//             <img
//               src="https://randomuser.me/api/portraits/men/67.jpg"
//               alt="client3"
//               className="w-10 h-10 rounded-full border-2 border-white shadow -ml-3"
//             />
//             <p className="text-sm font-medium text-gray-600">
//               More than 54+ satisfied clients
//             </p>
//           </div>
//         </div>

//         {/* Right Form */}
//         <form
//           onSubmit={onSubmit}
//           className="bg-white shadow-lg rounded-2xl p-8 space-y-5"
//         >
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
//           />

//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             required
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
//           />

//           <input
//             type="text"
//             name="subject"
//             placeholder="How can we help you?"
//             required
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
//           />

//           <input
//             type="text"
//             name="phone"
//             placeholder="Enter your phone number"
//             required
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
//           />

//           <textarea
//             name="message"
//             placeholder="Enter your message"
//             rows="4"
//             required
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
//           ></textarea>

//           <button
//             type="submit"
//             className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 to-blue-600 hover:opacity-90 transition"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ContactSection;

import React, { useState } from "react";

function ContactSection() {
  const [popup, setPopup] = useState(null); // for success/error popup

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f3ff2336-edec-4fe6-b0b2-e911f4dc4ffe");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setPopup({ type: "success", message: "✅ Message sent successfully!" });
        event.target.reset();
      } else {
        setPopup({ type: "error", message: "❌ Failed to send message!" });
      }
    } catch (error) {
      setPopup({
        type: "error",
        message: "⚠️ Something went wrong. Try again!",
      });
    }

    // hide popup after 3s
    setTimeout(() => setPopup(null), 3000);
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-12"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
            Schedule Your{" "}
            <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
              Appointment
            </span>
          </h2>
          <p className="mt-4 text-gray-600">
            From first hello to final handshake, we're here to assist you every
            step of the way. Reach out—your next big move starts here.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>⚡ Connect all your tools in one place.</li>
            <li>🚀 Stay ahead with cutting-edge features.</li>
            <li>🧩 Tailor our platform to your needs.</li>
            <li>💬 24/7 Support: Always here to help.</li>
            <li>✨ ...And more</li>
          </ul>
        </div>

        {/* Right Form */}
        <form
          onSubmit={onSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-5 relative"
        >
          {/* Popup Message */}
          {popup && (
            <div
              className={`absolute top-[-50px] left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-md text-white ${
                popup.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {popup.message}
            </div>
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
          />

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
          />

          <input
            type="text"
            name="subject"
            placeholder="How can we help you?"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
          />

          <textarea
            name="message"
            placeholder="Enter your message"
            rows="4"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 to-blue-600 hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
