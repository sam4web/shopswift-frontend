import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="bg-secondary-dark dark:bg-gray-dark">
      <div className="max-w-7xl w-full mx-auto px-4 lg:px-10 py-1.5">
        <ul
          className="text-light text-sm md:text-[16px] font-light flex justify-center items-center sm:justify-end space-x-6"
        >
          {/*
          <li>Hello, {{ request.user }}</li>
          <li>
            <a href="{% url 'user:logout' %}">
              <button
                class="text-sm text-light px-3 py-1 rounded-md border-primary border-2"
              >
                Logout
              </button>
            </a>
          </li>
          */}

          <li>
            <NavLink to="/login" className="hover:underline">Sign in</NavLink>
          </li>
          <li>
            <NavLink to="/register" className="hover:underline">
              Create Account
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;