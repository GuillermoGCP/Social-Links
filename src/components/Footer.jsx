const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white p-4 text-center">
      <p>
        Creado y diseñado por{" "}
        <a
          className="hover:text-green-300"
          href="https://www.linkedin.com/in/guillermocporto/"
        >
          Guillermo Cerviño Porto
        </a>
        ,
        <a
          className="hover:text-green-300"
          href="https://www.linkedin.com/in/ruth-vil"
        >
          {" "}
          Ruth Villa Valeiro
        </a>
        ,
        <a
          className="hover:text-green-300"
          href="https://www.linkedin.com/in/luisdelsaz/"
        >
          {" "}
          Louis del Saz{" "}
        </a>
        y{" "}
        <a
          className="hover:text-green-300"
          href="https://www.linkedin.com/in/rosdanyguerraguerrero/"
        >
          {" "}
          Rosdany Guerra Guerrero
        </a>{" "}
        &copy; 2024
      </p>
    </footer>
  );
};

export default Footer;
