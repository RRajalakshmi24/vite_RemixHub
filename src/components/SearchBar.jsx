import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmission = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
      window.location.reload();
    }
  };

  return (
    <form
      onSubmit={handleSubmission}
      className="bg-white border border-gray-300 rounded-lg p-2 flex items-center md:w-96 lg:w-120"
    >
      <input
        className="flex-grow outline-none px-4 py-2 md:px-7 md:py-1"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 bg-blue-300 text-white rounded ml-2"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
