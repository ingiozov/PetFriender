import { useRouter } from 'next/router'
import { API_URL } from '../../config'
import Layout from '../../components/Layout'

export default function DogPage({ dog }) {
  const router = useRouter()

  return (
    <Layout title="Dog for adoption">
      <h1>{dog.name}</h1>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/dogs?slug=${slug}`)
  const dogs = await res.json()

  return {
    props: { dog: dogs[0] },
  }
}
