import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Logo from "../assets/Logo1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 mb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={Logo}
                alt="Indication Technology Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Call Our Office */}
          <div className="text-center md:text-left">
            <h4 className="font-poppins font-semibold text-lg mb-4 text-white">
              Call our office
            </h4>
            <p className="text-gray-300 text-lg">+91 70301 94516</p>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="font-poppins font-semibold text-lg mb-4 text-white">
              Services
            </h4>

            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/web-development"
                  className="hover:text-brand-purple transition-colors duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/app-development"
                  className="hover:text-brand-purple transition-colors duration-300"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-services"
                  className="hover:text-brand-purple transition-colors duration-300"
                >
                  AI Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Send a Message */}
          <div className="text-center md:text-left">
            <h4 className="font-poppins font-semibold text-lg mb-4 text-white">
              Send a message
            </h4>
            <p className="text-gray-300">indicationtechnology@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
