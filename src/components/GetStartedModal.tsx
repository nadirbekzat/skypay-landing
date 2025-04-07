import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const allowedEmailDomains = [
  "@gmail.com",
  "@outlook.com",
  "@hotmail.com",
  "@icloud.com",
  "@yahoo.com",
  "@protonmail.com",
  "@aol.com",
  "@me.com",
  "@live.com",
  "@gmx.com",
  "@zoho.com",
  "@mail.com",
  "@mail.ru",
  "@inbox.ru",
  "@bk.ru",
  "@list.ru",
];

const isEnglishOnly = (text: string) => /^[a-zA-Z\s]+$/.test(text);

const isValidEmail = (email: string) => {
  const isEnglish = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const hasAllowedDomain = allowedEmailDomains.some((domain) =>
    email.toLowerCase().endsWith(domain)
  );
  return isEnglish && hasAllowedDomain;
};

const isValidPhoneNumber = (phone: string) => {
  // International format: + followed by 8 to 15 digits
  return /^\+[1-9]\d{7,14}$/.test(phone);
};

const GetStartedModal = ({ isOpen, onClose }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setEmail("");
      setPhone("");
      setError("");
      setSuccess(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isEnglishOnly(name)) {
      setError("Name must be in English letters only.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Email must be in English and use a common domain like @gmail.com, @outlook.com, etc.");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      setError("Phone number must be in international format, starting with '+' and followed by 8 to 15 digits.");
      return;
    }

    console.log("Submitting:", { name, email, phone });

    setName("");
    setEmail("");
    setPhone("");
    setError("");
    setSuccess(true);
  };

  return (
    <div className="fixed top-1/2 left-1/2 z-[9999] transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-[#4c4d4c] p-6 rounded-xl shadow-2xl w-[90vw] max-w-md text-gray-200 relative">
        <button
          className="absolute top-2 right-3 text-2xl font-bold text-gray-300 hover:text-red-500"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-2 text-center text-white">
          Leave a few details about you
        </h2>
        <p className="text-center text-sm text-white mb-4">
          Someone from our team will get back to you soon
        </p>

        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}

        {success && (
          <p className="text-green-400 text-sm mb-4 text-center">
            Form submitted successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 rounded-md bg-[#ffffff] text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-md bg-[#ffffff] text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full p-3 rounded-md bg-[#ffffff] text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedModal;