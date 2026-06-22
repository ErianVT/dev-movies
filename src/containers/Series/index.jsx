import { useEffect, useState } from 'react'

import Slider from '../../components/Slider'
import {
  getDiscoverTv,
  getTopSeries,
  getPopularSeries,
  getActionSeries,
  getComedySeries,
  getMysterySeries
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Container, HomeTitleMovie } from './styles'

function Series() {
  const [featuredTv, setFeaturedTv] = useState(null)
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [actionSeries, setActionSeries] = useState()
  const [comedySeries, setComedySeries] = useState()
  const [mysterySeries, setMysterySeries] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getDiscoverTv(),
        getTopSeries(),
        getPopularSeries(),
        getActionSeries(),
        getComedySeries(),
        getMysterySeries()
      ])
        .then(
          ([
            discoverTv,
            topSeries,
            popularSeries,
            actionSeries,
            comedySeries,
            mysterySeries
          ]) => {
            const randomIndex = Math.floor(Math.random() * discoverTv.length)

            setFeaturedTv(discoverTv[randomIndex])

            console.log({
              topSeries,
              popularSeries,
              actionSeries,
              comedySeries
            })

            setTopSeries(topSeries)
            setPopularSeries(popularSeries)
            setActionSeries(actionSeries)
            setComedySeries(comedySeries)
            setMysterySeries(mysterySeries)
          }
        )
        .catch((err) => console.error(err))
    }
    getAllData()
  }, [])

  return (
    <>
      {featuredTv && (
        <Background img={getImages(featuredTv.backdrop_path)}>
          {
            <HomeTitleMovie>
              <h1>Sejá Bem-Vindo a seção de Séries</h1>
            </HomeTitleMovie>
          }
        </Background>
      )}

      <Container>
        {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
        {popularSeries && (
          <Slider info={popularSeries} title={'Séries popular'} />
        )}
        {actionSeries && (
          <Slider info={actionSeries} title={'Séries de Ação e Aventura'} />
        )}
        {comedySeries && (
          <Slider info={comedySeries} title={'Séries de Comédia'} />
        )}
        {mysterySeries && (
          <Slider info={mysterySeries} title={'Séries de Mistério'} />
        )}
      </Container>
    </>
  )
}

export default Series
