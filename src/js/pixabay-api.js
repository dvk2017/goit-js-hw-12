import axios from 'axios';

export const PER_PAGE = 15;

export async function fetchFromPxb(query, page) {
  const API_KEY = '47762015-3b880641f1939f09591269c8d';

  axios.defaults.baseURL = 'https://pixabay.com';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    page: page,
    per_page: PER_PAGE,
    image_type: 'photo',
    orientation: 'horizontal',
    order: 'latest',
    safesearch: false,
  });

  const response = await axios.get(`/api/?${searchParams}`);
  return response.data;
}
