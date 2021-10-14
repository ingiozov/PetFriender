import { Card, Icon, Image, Button } from 'semantic-ui-react'
import Link from 'next/link'
import styles from '../styles/PetCard.module.css'

export default function PetCard({ pet }) {
  return (
    <Link href={`/dogs/${pet.slug}`}>
      <Card>
        {pet.image ? (
          <Image
            src={pet.image.formats.thumbnail.url}
            layout="fill"
            // objectFit="cover"
          />
        ) : (
          'Here can be an image of your pet'
        )}

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
    </Link>
  )
}
