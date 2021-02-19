import axios from "axios";

// const KEY = "AIzaSyA2H0ZScotAnSmNn22vaC05A4AsSPWWbhA";



export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});
