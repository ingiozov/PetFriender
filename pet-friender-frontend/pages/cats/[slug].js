import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function CatPage() {
  const router = useRouter()

  console.log(router)

  return (
    <Layout title="Cat for adoption">
      <h1>Cat Page</h1>
    </Layout>
  )
}
