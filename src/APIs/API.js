const API_URL = 'https://api.themoviedb.org/3/';

const API_KEY = "9c7e3331eee4ea5dffb6fdfec67121d2";

const SEARCH_MOVIE = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;

const POPULAR_MOVIES = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

const GENRES = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;

const IMAGE_URL = 'http://image.tmdb.org/t/p/';

const SIZE = 'w1280';

const SIZE_POSTER = 'w780';


export {
    API_URL,
    API_KEY,
    SEARCH_MOVIE,
    POPULAR_MOVIES,
    IMAGE_URL,
    SIZE,
    SIZE_POSTER
}