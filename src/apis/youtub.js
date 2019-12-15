import axios from 'axios';

const KEY = 'AIzaSyA4gxU7a6e8Q_IsPZzNZr0cwRSSVsFJKZw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params : {
      part: 'snippet',
      maxResults: 5,
      key: `${KEY}`
  }

});
