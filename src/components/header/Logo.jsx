import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="md:block hidden">
      <NavLink to="/">
        <img
          src="/favicon.png"
          alt="shopswift logo"
          className="size-12 rounded-md shadow-sm"
        />
      </NavLink>
    </div>
  );
};

export default Logo;