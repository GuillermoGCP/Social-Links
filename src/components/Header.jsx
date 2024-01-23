import ProfileBox from "./ProfileBox";
import LogoComponent from "./LogoComponent";

const Header = () => {
  return (
    <header className="bg-indigo-700 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
        <LogoComponent />
          <h1 className="text-5xl font-extrabold mb-2 mt-4 text-indigo-100">
            Links World
          </h1>
        </div>
        <ProfileBox /> 
      </div>
    </header>
  );
};

export default Header;
