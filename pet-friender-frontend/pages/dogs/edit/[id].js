import { parseCookies } from '../../../helpers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Icon } from 'semantic-ui-react'
import Layout from '../../../components/Layout'
import Modal from '../../../components/Modal'
import ImageUpload from '../../../components/ImageUpload'
import { API_URL } from '../../../config/index'
import styles from '../../../styles/Form.module.css'

export default function EditDogPage({ dog, token }) {
  const [values, setValues] = useState({
    name: dog.name,
    age: dog.age,
    breed: dog.breed,
    color: dog.color,
    description: dog.description,
    gender: dog.gender,
    health: dog.health,
    location: dog.location,
    size: dog.size,
  })

  const [imagePreview, setImagePreview] = useState(
    dog.image ? dog.image.formats.thumbnail.url : null
  )

  const [showModal, setShowModal] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    )

    if (hasEmptyFields) {
      toast.error('Please fill in all fields')
    }

    const res = await fetch(`${API_URL}/dogs/${dog.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('Unauthorized')
        return
      }
      toast.error('Something went wrong')
    } else {
      const dog = await res.json()
      router.push(`/dogs/${dog.slug}`)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setValues({ ...values, [name]: value })
  }

  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/dogs/${dog.id}`)
    const data = await res.json()
    setImagePreview(data.image.formats.thumbnail.url)
    setShowModal(false)
  }

  return (
    <Layout title="Edit dog">
      <Link href="/dogs">Go Back</Link>
      <h1>Edit dog</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Dog's Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="age">Dog's Age</label>
            <input
              type="text"
              id="age"
              name="age"
              value={values.age}
              onChange={handleInputChange}
              placeholder="adult, senior, puppy"
            />
          </div>
          <div>
            <label htmlFor="breed">Dog's Breed</label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={values.breed}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="color">Dog's Color</label>
            <input
              type="text"
              id="color"
              name="color"
              value={values.color}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="gender">Dog's gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="health">Dog's health</label>
            <input
              type="text"
              id="health"
              name="health"
              value={values.health}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="size">Dog's size</label>
            <input
              type="text"
              id="size"
              name="size"
              value={values.size}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="location">Dog's location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={values.location}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="description">About</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <input type="submit" value="Update dog" className="btn" />
      </form>

      <h2>Dog Image</h2>

      {imagePreview ? (
        <div>
          <Image src={imagePreview} width={250} height={250} />
        </div>
      ) : (
        <div>
          <p>No Image Uploaded</p>
        </div>
      )}

      <div>
        <Button onClick={() => setShowModal(true)}>
          <Icon name="file image" /> Set Image
        </Button>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload
          petId={dog.id}
          imageUploaded={imageUploaded}
          token={token}
        />
      </Modal>
    </Layout>
  )
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req)

  const res = await fetch(`${API_URL}/dogs/${id}`)
  const dog = await res.json()

  return {
    props: { dog, token },
  }
}
