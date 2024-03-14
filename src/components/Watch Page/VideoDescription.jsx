import React from "react";

const VideoDescription = ({ data }) => {
  const { showFull, showLess, snippet } = data;
  return (
    <div
      className="description h-20 mt-2 mb-6 bg-gray-200 overflow-hidden p-3 rounded-xl text-sm leading-6"
      onClick={showFull}
    >
      {snippet.description}

      <button onClick={showLess} className="block mt-3 font-semibold">
        Show less
      </button>
    </div>
  );
};

export default VideoDescription;
