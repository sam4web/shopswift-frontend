import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUserAuthenticated, selectUser } from "@/features/auth/authSlice.js";
import useLogout from "@/hooks/useLogout.js";

const TopNav = () => {
  const isAuthenticated = useSelector(isUserAuthenticated);
  const user = useSelector(selectUser);
  const logout = useLogout();

  return (
    <nav className="bg-dark-secondary dark:bg-gray-dark">
      <div className="max-w-7xl w-full mx-auto px-4 lg:px-10 py-1.5">
        <ul
          className="text-light text-sm md:text-[16px] font-light flex justify-center items-center sm:justify-end space-x-6"
        >
          {isAuthenticated
            ? <>
              <li>Hello, {user?.username}</li>
              <li>
                <button
                  className="text-sm text-light px-3 py-1 rounded-md border-primary border-2"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </>
            : <>
              <li>
                <NavLink to="/login" className="hover:underline">Sign in</NavLink>
              </li>
              <li>
                <NavLink to="/register" className="hover:underline">
                  Create Account
                </NavLink>
              </li>
            </>}
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;