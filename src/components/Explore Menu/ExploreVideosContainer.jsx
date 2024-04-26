import React from "react";
import { useSelector } from "react-redux";
import HomeShimmer from "../Shimmer/HomeShimmer";
import ExploreVideos from "./ExploreVideo";

const ExploreVideosContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
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
      className={`flex flex-wrap mt-20 gap-2 justify-evenly ${
        isMenuOpen ? "lg:w-[88%] lg:ml-[11.3rem]" : ""
      } px-2`}
    >
      {exploreVideos.map((video) => (
        <ExploreVideos video={video} key={video.id.videoId} />
      ))}
    </div>
  );
};

export default ExploreVideosContainer;
