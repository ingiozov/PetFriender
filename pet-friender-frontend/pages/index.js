import Image from 'next/image'
import Layout from '../components/Layout'
import PetCard from '../components/PetCard'
import PetCards from '../components/PetCards'
import { API_URL } from '../config'

export default function HomePage({ dogs }) {
  console.log(dogs)
  return (
    <Layout>
      <h1>Pets Available for Adoption Nearby</h1>

      {dogs.length === 0 && <h3>No dogs to show</h3>}

      <PetCards>
        {dogs.map((dog) => (
          <PetCard key={dog.id} pet={dog} />
        ))}
      </PetCards>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/dogs`)
  const dogs = await res.json()

  return {
    props: { dogs },
  }
}
