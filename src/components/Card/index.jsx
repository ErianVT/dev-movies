import { useNavigate } from 'react-router-dom'

import { getImages } from '../../utils/getImages'
import { Container } from './styles'

function Card({ item }) {
  const navigate = useNavigate()

  // consegui fazer da home navegar para os detalhes do filme; mas na seção de filmes similares
  //ele só envia o id; mas não navega; acho que preciso usar o UseNavigate.

  return (
    <Container>
      <img
        src={getImages(item.poster_path || item.profile_path || '')}
        alt={item.title || item.name}
        onClick={() => navigate(`/detalhe/${item.id}`)}
      />
      <h3>{item.title || item.name}</h3>
    </Container>
  )
}

export default Card
