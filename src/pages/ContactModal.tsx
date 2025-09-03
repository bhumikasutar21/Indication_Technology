import { useState } from "react";
import { X } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState(null); // ✅ success/error status

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

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
        setStatus("success");
        event.target.reset(); // ✅ clear form
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg w-[90%] md:w-[500px] p-6 relative text-white">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-red-400"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>

        {/* Contact Form */}
        <form className="space-y-4" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-200 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-200 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-200 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-200 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-200 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-2 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* ✅ Success / Error Messages */}
        {status === "success" && (
          <p className="mt-4 text-green-400 text-center">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400 text-center">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
