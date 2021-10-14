import { Button } from 'semantic-ui-react'
import Link from 'next/link'

export default function DashboardItem({ pet, handleDelete }) {
  return (
    <div>
      <h1>{pet.name}</h1>
      <Link href={`/dogs/edit/${pet.id}`}>
        <Button floated="right">edit event</Button>
      </Link>
      <a href="#" onClick={() => handleDelete(pet.id)}>
        <Button floated="right">Delete</Button>
      </a>
    </div>
  )
}
