const DEFAULT_POSTER = '/images/default.jpg';

export function getMoviePoster(movieId) {
  return '/images/' + movieId + '.jpg';
}

export { DEFAULT_POSTER };
