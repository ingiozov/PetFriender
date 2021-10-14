import qs from 'qs'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'
import PetCards from '../../components/PetCards'
import PetCard from '../../components/PetCard'

export default function SearchPage({ dogs }) {
  const router = useRouter()

  return (
    <Layout title="Search Results">
      <Link href="/dogs">Go Back</Link>

      <h1>Search Results for "{router.query.term}"</h1>

      {dogs.length === 0 && <h3>No dogs to show</h3>}

      <PetCards>
        {dogs.map((dog) => (
          <PetCard key={dog.id} pet={dog} />
        ))}
      </PetCards>
    </Layout>
  )
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { age_contains: term },
        { breed_contains: term },
        { color_contains: term },
        { gender_contains: term },
        { health_contains: term },
        { location_contains: term },
        { size_contains: term },
        { description_contains: term },
      ],
    },
  })

  const res = await fetch(`${API_URL}/dogs?${query}}`)
  const dogs = await res.json()

  return {
    props: {
      dogs,
    },
  }
}
