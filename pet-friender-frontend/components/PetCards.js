import { Card } from 'semantic-ui-react'
import PetCard from './PetCard'
import styles from '../styles/PetCards.module.css'

export default function PetCards({ children }) {
  return <Card.Group centered>{children}</Card.Group>
}
