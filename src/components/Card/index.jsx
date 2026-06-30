import { useNavigate } from 'react-router-dom'

import { getImages } from '../../utils/getImages'
import { Container } from './styles'

function Card({ item }) {
  const navigate = useNavigate()

  const isSeries = Boolean(item.first_air_date)

  function handleClick() {
    if (isSeries) {
      navigate(`/detalhe/serie/${item.id}`)
    } else {
      navigate(`/detalhe/filme/${item.id}`)
    }
  }

  return (
    <Container>
      <img
        src={getImages(item.poster_path || item.profile_path || '')}
        alt={item.title || item.name}
        onClick={handleClick}
      />
      <h3>{item.title || item.name}</h3>
    </Container>
  )
}

export default Card
