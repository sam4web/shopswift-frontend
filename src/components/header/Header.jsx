import TopNav from "@/components/header/TopNav.jsx";
import ThemeToggler from "@/components/header/ThemeToggler.jsx";
import { useState } from "react";
import Logo from "@/components/header/Logo.jsx";
import NavLinks from "@/components/header/NavLinks.jsx";
import Sidenav from "@/components/header/Sidenav.jsx";
import { LuShoppingCart, LuUserCircle2 } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [showSidenav, setShowSidenav] = useState(false);
  const toggleSidenav = () => setShowSidenav(prev => !prev);

  return (
    <header className="dark:bg-body-dark transition">
      <TopNav />

      <nav className="bg-light dark:bg-primary-dark transition">
        <div className="max-w-7xl w-full mx-auto px-4 lg:px-10 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            <NavLinks />
            <button className="block md:hidden" onClick={toggleSidenav}>
              <FaBars className="dark:text-light size-6" />
            </button>

            <div className="flex items-center gap-3.5">
              <ThemeToggler />
              <a href="" className="relative inline-block">
                <LuShoppingCart className="size-6 dark:text-light" />
              </a>
              <a href="">
                <LuUserCircle2 className="size-[26px] dark:text-light" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {showSidenav && <Sidenav />}
    </header>
  );
};

export default Header;