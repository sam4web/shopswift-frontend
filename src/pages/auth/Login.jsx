import useTitle from "@/hooks/useTitle.js";
import { Navigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { validatePassword, validateUsername } from "@/utils/validateCredentials.js";
import { sendLoginRequest } from "@/features/auth/authThunks.js";
import { useDispatch, useSelector } from "react-redux";
import { isUserAuthenticated } from "@/features/auth/authSlice.js";
import { toast } from "react-toastify";

const Login = () => {
  useTitle("Sign in | ShopSwift");

  const dispatch = useDispatch();
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState(null);

  const isAuthenticated = useSelector(isUserAuthenticated);
  if (isAuthenticated)
    return <Navigate to={"/"} replace={true} />;

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

  const loginUser = async () => {
    try {
      const toastId = toast.info("Logging in, please wait...");
      await dispatch(sendLoginRequest(formData)).unwrap();
      toast.dismiss(toastId);
      toast.success("Successfully logged in.");
    } catch (err) {
      toast.dismiss();
      toast.error(err);
      setErrors(prev => ({ ...prev, message: err }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    loginUser();
  };

  return (
    <section className="size-full flex justify-center items-center px-3">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full shadow-md rounded-xl px-4 sm:px-5 py-7 md:p-8 space-y-6 bg-light dark:bg-dark-primary"
      >
        <h2
          className="text-4xl text-dark-secondary font-medium text-center dark:text-light"
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

        <p className="text-center text-dark-secondary dark:text-light">
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