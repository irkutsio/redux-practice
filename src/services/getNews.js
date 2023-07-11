const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = 'f5506ac6da0a405b8f9b4dd7f12ed2d5';

export const getNews = async searchtext => {
  const data = await fetch(`${BASE_URL}/everything?q=${searchtext}`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  });
  return await data.json();
};

export const getTopNews = async () => {
  const data = await fetch(`${BASE_URL}/top-headlines?country=us`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  });
  return await data.json();
};
