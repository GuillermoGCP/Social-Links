import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import PropTypes from "prop-types";

const BaseComponent = () => {
  const url = import.meta.env.VITE_FRONT_URL + `/clouds.jpg`;

  const backImage = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
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
