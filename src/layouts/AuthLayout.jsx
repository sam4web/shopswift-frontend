import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex flex-col w-full h-screen">
      <div className="py-1 flex-1">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;

