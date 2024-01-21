import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const BaseComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseComponent;
