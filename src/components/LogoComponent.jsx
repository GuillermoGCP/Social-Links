import logoImage from "../assets/logoLinksWorld3.png";

const LogoComponent = () => {
  return (
    <div>
      <img src={logoImage} alt="Logo de la aplicación" className="w-40 h-40" />
    </div>
  );
};

export default LogoComponent;
