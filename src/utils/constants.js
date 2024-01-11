const YT_API = process.env.REACT_APP_YT_API_KEY;

export const YT_LOGO = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg";

export const YT_POPULAR_VIDEO = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=25&chart=mostPopular&regionCode=IN&key=" + YT_API;
