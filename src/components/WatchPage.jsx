import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../ultils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENTS_API } from "../ultils/Constants";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiDotsThreeBold } from "react-icons/pi";

const WatchPage = () => {
  const [comments, setComments] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const showFull = (e) => {
    e.target.classList.remove("h-20");
  };
  const showLess = (e) => {
    e.target.parentElement.classList.add("h-20");
    // console.log(e.target.classList);
  };

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const getComments = async () => {
    const data = await fetch(
      YOUTUBE_COMMENTS_API +
        `&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=100`
    );
    const json = await data.json();
    // console.log(json.items);
    setComments(json.items);
  };

  const getchannelData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyCqMRpPSphMIZPI8EDB-BJ-6v-j7CX9fNw`
    );
    const json = await data.json();
    setChannelData(json.items[0]);
  };

  // console.log(channelData);
  const { snippet, statistics } = channelData;

  // console.log(snippet);

  useEffect(() => {
    getComments();
    getchannelData();
  }, []);

  if (comments.length == 0) return ".....";

  return (
    <div className="w-[73%]">
      <iframe
        width="890"
        height="500"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="videoPlayer mx-28 bg-gray-100 rounded-xl my-5"
      ></iframe>

      <div className="video-data flex flex-col w-4/5 mx-28">
        <h1 className="video-title font-bold text-xl">{snippet.title}</h1>

        <div className="flex items-center justify-between">
          <div className="channel-logo-subscribeBtn flex w-fit my-3 items-center gap-4">
            <img
              src="https://cdn.pixabay.com/photo/2021/09/13/15/59/youtube-6621791_1280.jpg"
              alt="channel-logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-bold flex items-center gap-1">
              {snippet.channelTitle}{" "}
              <IoMdCheckmarkCircle className="mt-1 text-gray-600" />
            </span>
            <button className="bg-black text-white px-4 py-2 font-medium text-[0.9rem] rounded-3xl">
              Subscribe
            </button>
          </div>
          <div className="like-dislike-share-download flex gap-6 ">
            <span className="bg-slate-100 flex gap-3  rounded-2xl px-3 py-1">
              <button className="flex gap-1 items-center ">
                <AiOutlineLike className=" text-xl" />{" "}
                <span className="text-sm">
                  {(statistics.likeCount / 1000).toFixed(1) + "k"}
                </span>
              </button>
              <button>
                <AiOutlineDislike className=" text-xl" />
              </button>
            </span>
            <button className="bg-gray-100 flex rounded-2xl gap-1 px-3 py-1">
              <PiShareFat className=" text-xl rounded-lg" />
              <span className="text-sm">Share</span>
            </button>
            <button className="bg-gray-100 flex rounded-2xl gap-1 px-3 py-1">
              <LiaDownloadSolid className=" text-xl" />{" "}
              <span className="text-sm">Download</span>
            </button>
            <button className="bg-gray-100 px-1 text-xl rounded-full gap-1">
              <PiDotsThreeBold />
            </button>
          </div>
        </div>
      </div>

      <div
        className="description mx-28 h-20 mt-2 mb-6 bg-gray-200 overflow-hidden p-3 rounded-xl text-sm leading-6"
        onClick={showFull}
      >
        {snippet.description}

        <button onClick={showLess} className="block mt-3 font-semibold">
          Show less
        </button>
      </div>

      <div className="comments-container  mx-28">
        <h1 className="font-bold text-xl">
          {statistics.commentCount} Comments
        </h1>

        {comments.map((comment) => (
          <div
            className="flex flex-col p-3  bg-slate-50 rounded-lg"
            key={comment.id}
          >
            <div className="flex gap-3">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/000/567/894/small/vector60-2085-01.jpg"
                alt=""
                className="rounded-full h-10 w-10"
              />
              <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
            </div>
            <div className="like-dislike flex ml-12 gap-3">
              <button>
                <AiOutlineLike />
              </button>
              <button>
                <AiOutlineDislike />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
