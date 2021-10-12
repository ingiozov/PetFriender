import { Card, Icon, Image, Button } from 'semantic-ui-react'
import styles from '../styles/PetCard.module.css'

export default function PetCard({ pet }) {
  return (
    <Card href={`/dogs/${pet.slug}`}>
      <Image src={pet.image.formats.thumbnail.url} wrapped ui={false} />

      <Card.Content>
        <Card.Header>{pet.name}</Card.Header>
        <Card.Meta>{pet.breed}</Card.Meta>
        {/* <Card.Meta>{pet.gender}</Card.Meta> */}
        <Card.Description>
          {pet.description.slice(0, 234) + ' ...'}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <a>
          <Icon name="location arrow" />
          {pet.location}
        </a>
      </Card.Content>
    </Card>
  )
}
