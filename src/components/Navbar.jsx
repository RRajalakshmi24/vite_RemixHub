import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex items-center p-2 bg-blue-700 sticky top-0 justify-between">
      <Link to="/" className="flex items-center">
        <img src='../../public/logo.png' alt="logo" className="h-5" />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
