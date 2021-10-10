import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function DogPage() {
  const router = useRouter()

  console.log(router)

  return (
    <Layout title="Dog for adoption">
      <h1>Dog Page</h1>
    </Layout>
  )
}
