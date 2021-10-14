import Layout from '../../components/Layout'
import PetCards from '../../components/PetCards'
import PetCard from '../../components/PetCard'
import Pagination from '../../components/Pagination'
import { API_URL, PER_PAGE } from '../../config/index'

export default function DogsPage({ dogs, page, total }) {
  return (
    <Layout title="Dogs to adopt">
      <h1>Dogs to adopt</h1>

      {dogs.length === 0 && <h3>No dogs to show</h3>}

      <PetCards>
        {dogs.map((dog) => (
          <PetCard key={dog.id} pet={dog} />
        ))}
      </PetCards>

      <Pagination page={page} total={total} />
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

  // Fetch total count
  const totalRes = await fetch(`${API_URL}/dogs/count`)
  const total = await totalRes.json()

  // Fetch dogs
  const dogRes = await fetch(
    `${API_URL}/dogs?_sort=name:ASC&_limit=${PER_PAGE}&_start=${start}`
  )
  const dogs = await dogRes.json()

  return {
    props: {
      dogs,
      page: +page,
      total,
    },
  }
}
