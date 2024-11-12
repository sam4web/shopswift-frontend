import TopNav from "@/components/header/TopNav.jsx";
import ThemeToggler from "@/components/header/ThemeToggler.jsx";
import { useState } from "react";
import Logo from "@/components/header/Logo.jsx";
import NavLinks from "@/components/header/NavLinks.jsx";
import Sidenav from "@/components/header/Sidenav.jsx";
import { LuShoppingCart, LuUserCircle2 } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showSidenav, setShowSidenav] = useState(false);
  const toggleSidenav = () => setShowSidenav(prev => !prev);

  return (
    <header className="dark:bg-dark-body">
      <TopNav />

      <nav className="bg-light dark:bg-dark-primary">
        <div className="max-w-7xl w-full mx-auto px-4 lg:px-10 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            <NavLinks />
            <button className="block md:hidden" onClick={toggleSidenav}>
              <FaBars className="dark:text-light size-6" />
            </button>

            <div className="flex items-center gap-3.5">
              <ThemeToggler />
              <NavLink to="/cart" className="relative inline-block">
                <LuShoppingCart className="size-6 dark:text-light" />
              </NavLink>
              <NavLink to="/profile">
                <LuUserCircle2 className="size-[26px] dark:text-light" />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {showSidenav && <Sidenav />}
    </header>
  );
};

export default Header;