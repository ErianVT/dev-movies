import { useEffect, useState } from 'react'

import Slider from '../../components/Slider'
import {
  getTopMovies,
  getActionMovie,
  getComedyMovie,
  getScienceFictionMovie,
  getTerrorMovie,
  getDiscoverMovie
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Container, HomeTitleMovie } from './styles'

function Movies() {
  const [discoverMovie, setDiscoverMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [actionMovie, setActionMovie] = useState()
  const [comedyMovie, setComedyMovie] = useState()
  const [scienceFictionMovie, setScienceFictionMovie] = useState()
  const [terrorMovie, setTerrorMovie] = useState()
  const [featuredMovie, setFeaturedMovie] = useState(null)

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getDiscoverMovie(),
        getTopMovies(),
        getActionMovie(),
        getComedyMovie(),
        getScienceFictionMovie(),
        getTerrorMovie()
      ])
        .then(
          ([
            discoverMovie,
            topMovies,
            actionMovie,
            comedyMovie,
            scienceFictionMovie,
            terrorMovie
          ]) => {
            const randomIndex = Math.floor(Math.random() * discoverMovie.length)

            setFeaturedMovie(discoverMovie[randomIndex])

            setDiscoverMovie(discoverMovie)
            setTopMovies(topMovies)
            setActionMovie(actionMovie)
            setComedyMovie(comedyMovie)
            setScienceFictionMovie(scienceFictionMovie)
            setTerrorMovie(terrorMovie)
          }
        )
        .catch((err) => console.error(err))
    }
    getAllData()
  }, [])

  return (
    <>
      {featuredMovie && (
        <Background img={getImages(featuredMovie.backdrop_path)}>
          {
            <HomeTitleMovie>
              <h1>Sejá Bem-Vindo a seção de Filmes</h1>
            </HomeTitleMovie>
          }
        </Background>
      )}

      <Container>
        {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
        {discoverMovie && (
          <Slider info={discoverMovie} title={'Descubra um Filme'} />
        )}
        {actionMovie && <Slider info={actionMovie} title={'Filmes de Ação'} />}
        {comedyMovie && (
          <Slider info={comedyMovie} title={'Filmes de Comédia'} />
        )}
        {scienceFictionMovie && (
          <Slider
            info={scienceFictionMovie}
            title={'Filmes de Ficção Cientifica'}
          />
        )}
        {terrorMovie && (
          <Slider info={terrorMovie} title={'Filmes de Terror'} />
        )}
      </Container>
    </>
  )
}

export default Movies
