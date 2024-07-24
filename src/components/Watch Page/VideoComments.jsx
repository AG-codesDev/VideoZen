import React from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from "react-redux";

const VideoComments = ({ data }) => {
  const { comments, statistics } = data;
  const isDarkModeActive = useSelector((store) => store.app.darkMode);

  return (
    <div className="comments-container overflow-hidden">
      <h1
        className={`${
          isDarkModeActive ? "text-white" : ""
        } font-bold mb-3 text-xl`}
      >
        {statistics.commentCount} Comments
      </h1>

      {comments.map((comment) => (
        <div
          className={` ${
            isDarkModeActive ? "bg-zinc-800" : "bg-slate-50"
          } flex p-3  gap-4 rounded-lg`}
          key={comment.id}
        >
          <div className=" h-fit">
            <img
              src={`${comment.snippet.topLevelComment.snippet.authorProfileImageUrl}`}
              alt=""
              className="rounded-full h-10 w-10"
            />
          </div>
          <div
            className={` ${
              isDarkModeActive ? "text-white" : ""
            } flex flex-col gap-2 `}
          >
            <div className="flex flex-col gap-1">
              <p className="font-medium">
                {comment.snippet.topLevelComment.snippet.authorDisplayName}
              </p>
              <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
            </div>
            <div className="btns flex gap-3">
              <button>
                <AiOutlineLike className="text-lg" />
              </button>
              <button>
                <AiOutlineDislike className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoComments;
