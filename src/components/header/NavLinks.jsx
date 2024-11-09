import { AUTH_NAV_LINKS, NAV_LINKS } from "@/constants/index.js";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="hidden md:flex items-center space-x-1">
      {NAV_LINKS.map((link, idx) => (
        <li key={idx}>
          <NavLink to={link.ref} className="nav-link">
            {link.title}
          </NavLink>
        </li>
      ))}
      {AUTH_NAV_LINKS.map((link, idx) => (
        <li key={idx}>
          <NavLink to={link.ref} className="nav-link">
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;