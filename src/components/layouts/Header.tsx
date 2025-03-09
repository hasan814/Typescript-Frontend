import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  // ============== State ================
  const [menuOpen, setMenuOpen] = useState(false);

  // ============== Rendering ================
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left Section - Logo & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <h1 className="text-xl font-semibold">My Blog</h1>
        </div>

        <div className="hidden md:flex items-center w-1/3 border border-gray-300 rounded-lg px-3 py-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full ml-2 outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:block">
            Sign In
          </Button>
          <User className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-4 flex flex-col space-y-3 bg-gray-100 p-4 rounded-lg shadow"
          >
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-all"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-all"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-all"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-all"
            >
              Contact
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
