import { AUTH_NAV_LINKS, NAV_LINKS } from "@/constants/index.js";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav
      className="bg-light dark:bg-primary-dark mt-3 max-w-[240px] ml-5 p-2 rounded-lg shadow-md md:hidden"
    >
      <ul className="space-y-1.5">
        {NAV_LINKS.map((link, idx) => (
          <li key={idx}>
            <NavLink className="nav-link" to={link.ref}>
              {link.title}
            </NavLink>
          </li>
        ))}
        {AUTH_NAV_LINKS.map((link, idx) => (
          <li key={idx}>
            <NavLink className="nav-link" to={link.ref}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidenav;