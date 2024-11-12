import { useNavigate } from "react-router-dom";
import useTitle from "@/hooks/useTitle.js";

const NotFound = () => {
  useTitle("Page Not Found | ShopSwift");
  const navigate = useNavigate();

  return (
    <section>
      <div className="section-container">
        <div className="w-full text-center space-y-3.5 lg:space-y-7">
          <h1
            className="text-7xl lg:text-8xl dark:text-light text-dark-secondary font-extrabold mb-1"
          >
            404
          </h1>

          <p className="font-normal text-lg dark:text-light max-w-xs mx-auto">
            Sorry, the page you&#39;re looking for doesn&#39;t exist.
          </p>

          <button
            className="btn-secondary dark:btn-primary"
            onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </section>

  )
    ;
};

export default NotFound;