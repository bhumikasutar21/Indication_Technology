// import { useState } from "react";
// import { X } from "lucide-react";

// // Define props type
// interface ContactModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// // Define status type
// type Status = "loading" | "success" | "error" | null;

// const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
//   const [status, setStatus] = useState(null); // ✅ success/error status

//   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setStatus("loading");

//     const formData = new FormData(event.currentTarget);
//     formData.append("access_key", "f3ff2336-edec-4fe6-b0b2-e911f4dc4ffe");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: json,
//       }).then((res) => res.json());

//       if (res.success) {
//         setStatus("success");
//         event.target.reset(); // ✅ clear form
//       } else {
//         setStatus("error");
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
//       {/* Modal Box */}
//       <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg w-[90%] md:w-[500px] p-6 relative text-white">
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-white hover:text-red-400"
//           onClick={onClose}
//         >
//           <X size={24} />
//         </button>

//         <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>

//         {/* Contact Form */}
//         <form className="space-y-4" onSubmit={onSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-200 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-200 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-200 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-200 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             rows={4}
//             className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-200 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           ></textarea>

//           <button
//             type="submit"
//             disabled={status === "loading"}
//             className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-2 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
//           >
//             {status === "loading" ? "Sending..." : "Send Message"}
//           </button>
//         </form>

//         {/* ✅ Success / Error Messages */}
//         {status === "success" && (
//           <p className="mt-4 text-green-400 text-center">
//             ✅ Message sent successfully!
//           </p>
//         )}
//         {status === "error" && (
//           <p className="mt-4 text-red-400 text-center">
//             ❌ Something went wrong. Please try again.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContactModal;

// ContactModal.tsx
// import { useState } from "react";
// import { X } from "lucide-react";

// interface ContactModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// type Status = "loading" | "success" | "error" | null;

// const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
//   const [status, setStatus] = useState<Status>(null);

//   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setStatus("loading");

//     const form = event.currentTarget;
//     const formData = new FormData(form);
//     formData.append("access_key", "f3ff2336-edec-4fe6-b0b2-e911f4dc4ffe");

//     const json = JSON.stringify(Object.fromEntries(formData));

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: json,
//       }).then((r) => r.json());

//       if (res.success) {
//         setStatus("success");
//         form.reset();
//         // optional: auto-close after 2s
//         // setTimeout(() => { onClose(); setStatus(null); }, 2000);
//       } else {
//         setStatus("error");
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
//       <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg w-[90%] md:w-[500px] p-6 relative text-white">
//         <button
//           className="absolute top-4 right-4 text-white hover:text-red-400"
//           onClick={onClose}
//         >
//           <X size={24} />
//         </button>

//         <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>

//         <form className="space-y-4" onSubmit={onSubmit}>
//           <input name="name" required placeholder="Full Name" className="..." />
//           <input
//             name="email"
//             type="email"
//             required
//             placeholder="Email"
//             className="..."
//           />
//           <input name="subject" placeholder="Subject" className="..." />
//           <input name="phone" placeholder="Phone" className="..." />
//           <textarea
//             name="message"
//             rows={4}
//             required
//             placeholder="Message"
//             className="..."
//           />
//           <button type="submit" disabled={status === "loading"} className="...">
//             {status === "loading" ? "Sending..." : "Send Message"}
//           </button>
//         </form>

//         {status === "success" && (
//           <p className="mt-4 text-green-400 text-center">
//             ✅ Message sent successfully!
//           </p>
//         )}
//         {status === "error" && (
//           <p className="mt-4 text-red-400 text-center">
//             ❌ Something went wrong. Please try again.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContactModal;

//*******************
import { useState } from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = "loading" | "success" | "error" | null;

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [status, setStatus] = useState<Status>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "f3ff2336-edec-4fe6-b0b2-e911f4dc4ffe");

    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((r) => r.json());

      if (res.success) {
        setStatus("success");
        form.reset();
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
    <div className="fixed inset-0 bg-black/80  backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-pink-500/40 via-purple-600/40 to-blue-800/40 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl w-[90%] md:w-[500px] p-6 relative text-white">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-red-400 transition"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Contact Us
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={onSubmit}>
          <input
            name="name"
            required
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder-white-400"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder-white-400"
          />
          <input
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder-white-400"
          />
          <input
            name="phone"
            placeholder="Phone"
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder-white-400"
          />
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Message"
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder-white-400 resize-none"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-2 rounded-lg bg-blue-600/80 hover:bg-blue-600 transition disabled:opacity-50 font-semibold"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status messages */}
        {status === "success" && (
          <p className="mt-4 text-green-400 text-center font-medium">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400 text-center font-medium">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
