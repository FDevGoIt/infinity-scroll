import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '19823143-e5d054b038f568b2343c680be';

export const getPhotoService = async (query, page) => {
  const option = {
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 40,
    key: API_KEY,
  };
  try {
    const { data } = await axios('https://pixabay.com/api/', {
      params: option,
    });
    return data;
  } catch (error) {}
};
