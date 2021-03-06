const API_KEY = 'e5ee7e67d61aff115089d3609ea613f3';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function getTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  );
}

export function getMoviesById(moviesId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${moviesId}?api_key=${API_KEY}`,
  );
}

export function getSearchMovie(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
}

export function getCastMovie(moviesId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${moviesId}/credits?api_key=${API_KEY}`,
  );
}

export function getReviewsMovie(moviesId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${moviesId}/reviews?api_key=${API_KEY}`,
  );
}
