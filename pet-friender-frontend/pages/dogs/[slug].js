import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { Button } from 'semantic-ui-react'
import { API_URL } from '../../config'
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function DogPage({ dog }) {
  const router = useRouter()

  return (
    <Layout title="Dog for adoption">
      {/* <Button floated="right" onClick={deleteEvent}>
        Delete
      </Button>
      <Button floated="right">
        <Link href={`/dogs/edit/${dog.id}`}>Edit</Link>
      </Button> */}
      <h1>{dog.name}</h1>
      <ToastContainer />
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
