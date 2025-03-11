import { Menu, X, Search, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Button } from "@/components/ui/button";
import { IUser } from "@/types";

import MobileMenu from "../modules/MobileMenu";
import AuthModal from "../modules/AuthModal";

const Header = () => {
  // ============== State ===============
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [cookies, , removeCookie] = useCookies(["accessToken", "user"]);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  // ============== Check Auth Status ===============
  useEffect(() => {
    try {
      if (cookies.user && cookies.accessToken) {
        const parsedUser: IUser =
          typeof cookies.user === "string"
            ? JSON.parse(cookies.user)
            : cookies.user;
        console.log("Parsed user:", parsedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } else {
        removeCookie("user");
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      removeCookie("user");
      setUser(null);
      setIsAuthenticated(false);
    }
  }, [cookies.user, cookies.accessToken, removeCookie]);

  // ============== Logout Function ===============
  const logoutHandler = () => {
    removeCookie("user");
    removeCookie("accessToken");
    setUser(null);
    setIsAuthenticated(false);
    window.location.reload();
  };

  // ============== Rendering ===============
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

        {/* Search Input (Desktop) */}
        <div className="hidden md:flex items-center w-1/3 border border-gray-300 rounded-lg px-3 py-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full ml-2 outline-none bg-transparent"
          />
        </div>

        {/* Sign In Button & User Icon */}
        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <Button
              variant="outline"
              className="hidden md:block"
              onClick={() => setModalOpen(true)}
            >
              Sign In
            </Button>
          ) : (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={logoutHandler}
            >
              <User className="w-6 h-6" />
              <span className="text-sm font-medium">{user?.fullName}</span>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} />

      {/* Auth Modal */}
      <AuthModal isOpen={modalOpen} onClose={setModalOpen} />
    </header>
  );
};

export default Header;
