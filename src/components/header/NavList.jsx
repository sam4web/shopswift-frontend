import { AUTH_NAV_LINKS, NAV_LINKS } from "@/constants/index.js";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUserAuthenticated } from "@/features/auth/authSlice.js";

const NavList = () => {
  const isAuthenticated = useSelector(isUserAuthenticated);

  return (
    <ul className="hidden md:flex items-center space-x-1">
      {NAV_LINKS.map((link, idx) => (
        <li key={idx}>
          <NavLink to={link.ref} className="nav-link">
            {link.title}
          </NavLink>
        </li>
      ))}
      {isAuthenticated &&
        AUTH_NAV_LINKS.map((link, idx) => (
          <li key={idx}>
            <NavLink to={link.ref} className="nav-link">
              {link.title}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

export default NavList;