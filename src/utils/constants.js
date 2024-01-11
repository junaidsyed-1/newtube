const YT_API = process.env.REACT_APP_YT_API_KEY;

export const YT_LOGO = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg";

export const YT_POPULAR_VIDEO = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=25&chart=mostPopular&regionCode=IN&key=" + YT_API;

export const EXPLORE_SP = ["Trending", "Music", "Films", "Live", "Gaming", "News", "Podcast", "Sports", "Learning"];

export const BUTTON_CAT = ["All", "Sports", "Entertainment", "Live", "Music", "Movies", "Podcast", "News", "Lofi", "Volleyball", "Cricket", "Latest", "Featured", "Events", "Gadgets", "Media", "Top News", "Recently Uploaded"];
