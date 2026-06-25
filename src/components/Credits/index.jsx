import { getImages } from '../../utils/getImages'
import { Title, Container } from './styles'

function Credits({ credits }) {
  const imgArtist = credits.filter((imagem) => imagem.profile_path)

  return (
    <>
      <Title>Créditos</Title>
      {imgArtist && (
        <Container>
          {imgArtist.slice(0, 5).map((artist) => (
            <div key={artist.id}>
              <img src={getImages(artist.profile_path)} alt={artist.name} />

              <p>{artist.original_name}</p>
            </div>
          ))}
        </Container>
      )}
    </>
  )
}

export default Credits
