import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ onGetStartedClick }: { onGetStartedClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-gradient-to-r from-[#7B0A02] to-[#101010] backdrop-blur-lg z-50 shadow-lg">
      <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          onClick={() => scrollToSection("hero")}
          className="flex items-center space-x-2 text-white text-2xl font-bold"
        >
          <img src="/images/logo.png" alt="SkyPay Logo" className="w-8 h-8 object-contain" />
          <span>SkyPay</span>
        </a>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white text-lg">
          <button onClick={() => scrollToSection("hero")} className="hover:text-red-500 transition">
            Home
          </button>
          <button onClick={() => scrollToSection("clients")} className="hover:text-red-500 transition">
            Clients
          </button>
          <button onClick={() => scrollToSection("about-us")} className="hover:text-red-500 transition">
            Features
          </button>
          <button onClick={() => scrollToSection("use-cases")} className="hover:text-red-500 transition">
            Use Cases
          </button>
          <button onClick={() => scrollToSection("reviews")} className="hover:text-red-500 transition">
            Reviews
          </button>
        </div>

        {/* Get Started Button (Desktop) */}
        <button
          onClick={onGetStartedClick}
          className="hidden md:block bg-red-500 px-5 py-2 text-white rounded-md hover:bg-red-600 transition"
        >
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden h-screen bg-gradient-to-r from-[#7B0A02] to-[#101010] p-6 text-center space-y-4 text-white">
          <button
            onClick={() => scrollToSection("hero")}
            className="block hover:text-red-500 border-b border-gray-600 pb-3 w-full text-left"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("clients")}
            className="block hover:text-red-500 border-b border-gray-600 pb-3 w-full text-left"
          >
            Clients
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="block hover:text-red-500 border-b border-gray-600 pb-3 w-full text-left"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("use-cases")}
            className="block hover:text-red-500 border-b border-gray-600 pb-3 w-full text-left"
          >
            Use Cases
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="block hover:text-red-500 border-b border-gray-600 pb-3 w-full text-left"
          >
            Reviews
          </button>
          <button
            onClick={() => {
              onGetStartedClick();
              setIsOpen(false);
            }}
            className="bg-red-500 px-5 py-2 text-white rounded-md hover:bg-red-600 transition w-full mt-4"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;