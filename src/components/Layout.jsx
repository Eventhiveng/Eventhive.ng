import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Preloader from "./Preloader";
import CustomCursor from "./CustomCursor";
import { useEffect, useState } from "react";
import ScrollTop from "./ScrollTop";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="anin">
          <CustomCursor />
          <Nav />
          <Outlet />
          <ScrollTop />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
