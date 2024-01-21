import ProfileBox from "./ProfileBox";

const Header = () => {
  return (
    <header className="bg-indigo-700 text-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-extrabold mb-2 mt-4 text-indigo-100">
            Links World
          </h1>
        </div>
        <ProfileBox /> {/* Componente ProfileBox */}
      </div>
    </header>
  );
};

export default Header;
