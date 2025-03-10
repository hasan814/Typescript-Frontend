import { motion, AnimatePresence } from "framer-motion";
import { IMobileMenuProps } from "@/types";

const MobileMenu = ({ isOpen }: IMobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
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
  );
};

export default MobileMenu;
