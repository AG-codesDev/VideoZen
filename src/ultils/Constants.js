const GOOGLE_API_KEY1 = "AIzaSyDBbmFW9LgW8-0iR1X2ZXIkmhflizPiTPs";
const GOOGLE_API_KEY2 = "AIzaSyBp6oq_Sh5J8CPPs97Jjwt_C-yDA1E4LM8";
const GOOGLE_API_KEY3 = "AIzaSyBbhgYAFuKH_BVEtmuLOBQa87SVk6AnVQM";
const GOOGLE_API_KEY4 = "AIzaSyDhk04bfwvfuEHbmo2_HjE3on0W6wMTq5A";
const GOOGLE_API_KEY5 = "AIzaSyDd0jXwtw-NP7TN9m_uTSiW6kkEHxXyL9w";
const GOOGLE_API_KEY6 = "AIzaSyDzAjoQ3kcQGs8tmWmhUEDbVWnTkvExFUI";
const GOOGLE_API_KEY7 = "AIzaSyD3RGHc1yqo_Ydc0a39oW5nYSGyplXAD0E";
const GOOGLE_API_KEY8 = "AIzaSyCm2UqEv7BNjSXJpfgdO08SPnmDjhW3aeA";
const GOOGLE_API_KEY9 = "AIzaSyBD2d7tb5kQCuXYyPXE3049oZ0aiqr4Hws";
const GOOGLE_API_KEY10 = "AIzaSyArnnLGA0YQJKJXjiJsv5RhQMoPyXoKcUE";

export const VIDEO_DATA =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY6;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&type=video&key=" +
  GOOGLE_API_KEY6;

export const YOUTUBE_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&key=" +
  GOOGLE_API_KEY6;

export const YOUTUBE_COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?key=" + GOOGLE_API_KEY6;

export const YOUTUBE_SEARCH_RESULT_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" +
  GOOGLE_API_KEY6;
export const YOUTUBE_EXPLORE_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&type=video&key=" +
  GOOGLE_API_KEY6;

export const YOUTUBE_CHANNEL_DATA =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY6;
