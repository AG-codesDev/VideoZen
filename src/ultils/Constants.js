const GOOGLE_API_KEY = "AIzaSyCqMRpPSphMIZPI8EDB-BJ-6v-j7CX9fNw";

const CHANNEL_DATA =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyCqMRpPSphMIZPI8EDB-BJ-6v-j7CX9fNw";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=10&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?key=" + GOOGLE_API_KEY;

const YOUTUBE_SEARCH_RESULT_VIDEOS =
  "  GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=viratkohli&key=[YOUR_API_KEY]";

const myVideos =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=AIzaSyCqMRpPSphMIZPI8EDB-BJ-6v-j7CX9fNw";

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=[YOUR_API_KEY] HTTP/1.1
