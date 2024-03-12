import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className="flex flex-col md:flex-row bg-blue-700 md:92vh">
      <div className="md:border-r-2 border-gray-300 md:92vh p-2">
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <p className="mt-4 text-white text-sm">
          Copyright &copy; 2024 Rajalakshmi
        </p>
      </div>

      <div className="p-2 overflow-y-auto h-90vh flex-2 bg-blue-700">
        <h4 className="text-white font-bold text-2xl mb-2 ">
          {selectedCategory}
          <span className="text-blue-700 pl-1">videos</span>
        </h4>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
