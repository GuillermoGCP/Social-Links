import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import PropTypes from "prop-types";

const BaseComponent = () => {
  const url = import.meta.env.VITE_FRONT_URL + `/clouds2.jpg`;

  const backImage = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100vw",
    height: "100%",
  };
  return (
    <>
      <div style={backImage}>
        <Header />
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
BaseComponent.propTypes = {
  children: PropTypes.node,
};
export default BaseComponent;
