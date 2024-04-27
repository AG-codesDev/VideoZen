import React from "react";
import { useSelector } from "react-redux";
import HomeShimmer from "../Shimmer/HomeShimmer";
import ExploreVideos from "./ExploreVideo";

const ExploreVideosContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkModeActive = useSelector((store) => store.app.darkMode);
  // const [explore,setExplore] = useSta
  // const getExploreVideos = () => {
  // };
  const exploreVideos = useSelector((store) => store.app.exploreVideos);
  // useEffect(() => {
  //   getExploreVideos();
  // }, []);
  // console.log(typeof exploreVideos);

  if (exploreVideos.length === 0) return <HomeShimmer />;

  return (
    <div
      className={` ${
        isDarkModeActive ? "bg-gray-900" : ""
      } flex flex-wrap mt-12 lg:mt-16 gap-2 justify-evenly py-5 lg:py-3 ${
        isMenuOpen ? "lg:w-[88%] lg:ml-[11rem]" : ""
      }`}
    >
      {exploreVideos.map((video) => (
        <ExploreVideos video={video} key={video.id.videoId} />
      ))}
    </div>
  );
};

export default ExploreVideosContainer;
