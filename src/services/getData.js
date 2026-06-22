import api from './api'

export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results[0]
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

  return results
}

export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

export async function getTopPeople() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}

export async function getMovieVideos(movieId) {
  const {
    data: { results }
  } = await api.get(`movie/${movieId}/videos`)

  return results
}

export async function getMovieCredits(movieId) {
  const {
    data: { cast }
  } = await api.get(`movie/${movieId}/credits`)

  return cast
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results }
  } = await api.get(`movie/${movieId}/similar`)

  return results
}

export async function getMovieById(movieId) {
  const { data } = await api.get(`movie/${movieId}`)

  return data
}

// export async function getMovieGenre() {
//   const {
//     data: { genres }
//   } = await api.get('/genre/movie/list')
//   console.log(genres)
//   return genres
// }

export async function getDiscoverMovie() {
  const {
    data: { results }
  } = await api.get('/discover/movie')

  return results
}

export async function getActionMovie() {
  const {
    data: { results }
  } = await api.get('/discover/movie?with_genres=28')

  return results
}

export async function getComedyMovie() {
  const {
    data: { results }
  } = await api.get('/discover/movie?with_genres=35')

  return results
}

export async function getScienceFictionMovie() {
  const {
    data: { results }
  } = await api.get('/discover/movie?with_genres=878')

  return results
}

export async function getTerrorMovie() {
  const {
    data: { results }
  } = await api.get('/discover/movie?with_genres=27')

  return results
}
