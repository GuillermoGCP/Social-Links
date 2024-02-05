import ProfileBox from "./ProfileBox";
import LogoComponent from "./LogoComponent";

const Header = () => {
  return (
    <header className="text-white">
      <div className="flex items-center justify-between bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-800">
        <LogoComponent />

        <h1 className="text-5xl font-extrabold mb-2 mt-4 text-indigo-100 flex-grow">
          Links World
        </h1>

        <ProfileBox />
      </div>
    </header>
  );
};

export default Header;
