import Layout from '../components/Layout'
import { API_URL } from '../config'

export default function HomePage({ dogs }) {
  console.log(dogs)
  return (
    <Layout>
      <h1>Pets Available for Adoption Nearby</h1>
      {dogs.map((dog) => (
        <h2>{dog.name}</h2>
      ))}
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
