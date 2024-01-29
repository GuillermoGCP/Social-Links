import sadFaceImage from "../assets/globo3.gif";

const NoLinksToday = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <p>¡Vaya!, no hay enlaces compartidos</p>
      <img
        src={sadFaceImage}
        alt="Logo de la aplicación"
        className="w-1/3 h-1/3 object-contain mx-auto my-auto"
      />
    </div>
  );
};

export default NoLinksToday;
