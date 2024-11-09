import { AUTH_NAV_LINKS, NAV_LINKS } from "@/constants/index.js";

const NavLinks = () => {
  return (
    <ul className="hidden md:flex items-center space-x-1">
      {NAV_LINKS.map((link, idx) => (
        <li key={idx}>
          <a href="" className="nav-link">
            {link.title}
          </a>
        </li>
      ))}
      {AUTH_NAV_LINKS.map((link, idx) => (
        <li key={idx}>
          <a href="" className="nav-link">
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;