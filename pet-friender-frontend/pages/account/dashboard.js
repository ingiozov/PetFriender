import { parseCookies } from '../../helpers/index'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import DashboardItem from '../../components/DashboardItem'
import { API_URL } from '../../config'

export default function DashboardPage({ dogs, token }) {
  const router = useRouter()

  const deletePet = async (id) => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/dogs/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message)
      } else {
        // router.push('/dogs')
        router.reload()
      }
    }
  }

  return (
    <Layout title="User Dashboard">
      <div>
        {dogs.map((dog) => (
          <DashboardItem key={dog.id} pet={dog} handleDelete={deletePet} />
        ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  const res = await fetch(`${API_URL}/dogs/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const dogs = await res.json()

  return {
    props: { dogs, token },
  }
}
