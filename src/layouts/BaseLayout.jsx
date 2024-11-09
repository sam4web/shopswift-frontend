import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header.jsx";
import Footer from "@/components/footer/Footer.jsx";

const BaseLayout = () => {
  return (
    <main className="flex flex-col w-full h-screen">
      <Header />
      <div className="py-1 flex-1">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default BaseLayout;