import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTitle = (title) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title.trim();
  }, [location, title]);
};

export default useTitle;