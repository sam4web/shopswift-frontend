import useTitle from "@/hooks/useTitle.js";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { validatePassword, validateUsername } from "@/utils/validateCredentials.js";

const Login = () => {
  useTitle("Sign in | ShopSwift");

  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    const usernameValid = validateUsername(formData?.username || "");
    const passValid = validatePassword(formData?.password || "");
    if (!usernameValid.isValid) newErrors.username = usernameValid.message;
    if (!passValid.isValid) newErrors.password = passValid.message;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && canSubmit;
  };

  const handleChange = (e) => {
    setErrors(null);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const canSubmit = [formData?.username, formData?.password].every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log(formData);
  };

  return (
    <section className="size-full flex justify-center items-center px-3">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full shadow-md rounded-xl px-4 sm:px-5 py-7 md:p-8 space-y-6 bg-light dark:bg-primary-dark"
      >
        <h2
          className="text-4xl text-secondary-dark font-medium text-center dark:text-light"
        >
          Login
        </h2>

        {errors?.message &&
          <div className="bg-rose-500 px-4 py-2 rounded-md shadow-md">
            <p className="text-white font-medium">{errors.message}</p>
          </div>
        }

        <div className="space-y-4 md:space-y-6">
          <div className="auth-field-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="john"
              value={formData?.username || ""}
              onChange={handleChange}
              autoComplete="on"
            />
            <p className="err-msg">{errors?.username}</p>
          </div>


          <div className="auth-field-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              onChange={handleChange}
              value={formData?.password || ""}
              autoComplete="on"
            />
            <p className="err-msg">{errors?.password}</p>
          </div>
        </div>

        <button
          type="submit"
          className="btn-secondary dark:btn-primary w-full"
          disabled={!canSubmit}
        >
          Login
        </button>

        <p className="text-center text-secondary-dark dark:text-light">
          Not a member yet?{" "}
          <NavLink to="/register" className="text-primary font-medium">
            Register
          </NavLink>
        </p>
      </form>
    </section>
  );

};

export default Login;