import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'
import PetCards from '../../components/PetCards'
import PetCard from '../../components/PetCard'

export default function DogsPage({ dogs }) {
  console.log(dogs)
  return (
    <Layout title="Dogs to adopt">
      <h1>Dogs to adopt</h1>

      {dogs.length === 0 && <h3>No dogs to show</h3>}

      <PetCards>
        {dogs.map((dog) => (
          <PetCard key={dog.id} pet={dog} />
        ))}
      </PetCards>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/dogs?_sort=name:ASC`)
  const dogs = await res.json()

  console.log(dogs)

  return {
    props: {
      dogs,
    },
    revalidate: 1,
  }
}
