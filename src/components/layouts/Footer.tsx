import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-25">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">My Blog</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center - Navigation Links */}
        <nav className="flex space-x-4 my-4 md:my-0">
          <a href="#" className="text-gray-300 hover:text-white transition">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            Blog
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            Contact
          </a>
        </nav>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition">
            <CiFacebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <CiTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <CiInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Separator */}
      <Separator className="bg-gray-700 my-4" />

      {/* Bottom Section */}
      <p className="text-center text-sm text-gray-400">
        Developed by Hasan Moosavi ❤️
      </p>
    </footer>
  );
};

export default Footer;
