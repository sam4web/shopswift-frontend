import { AUTH_NAV_LINKS, NAV_LINKS } from "@/constants/index.js";

const Sidenav = () => {
  return (
    <nav
      className="bg-light dark:bg-primary-dark mt-3 max-w-[240px] ml-5 p-2 rounded-lg shadow-md md:hidden transition"
    >
      <ul className="space-y-1.5">
        {NAV_LINKS.map((link, idx) => (
          <li key={idx}>
            <a className="nav-link" href="">
              {link.title}
            </a>
          </li>
        ))}
        {AUTH_NAV_LINKS.map((link, idx) => (
          <li key={idx}>
            <a className="nav-link" href="">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidenav;