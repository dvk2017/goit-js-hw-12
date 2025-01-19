export default function fetchFromPxb(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '47762015-3b880641f1939f09591269c8d';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
