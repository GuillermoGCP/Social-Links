import logoImage from "../assets/logoLinksWorld3.png";

const LogoComponent = () => {
  return (
    <div className="flex items-center justify-center w-48 h-48">
    <img
      src={logoImage}
      alt="Logo de la aplicación"
      className="w-full h-full object-contain"
    />
  </div>
  );
};

export default LogoComponent;
