import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { API_URL } from '../../config/index'
import styles from '../../styles/Form.module.css'

export default function AddDogPage() {
  const [values, setValues] = useState({
    name: '',
    age: '',
    breed: '',
    color: '',
    description: '',
    gender: '',
    health: '',
    location: '',
    size: '',
  })

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

    const res = await fetch(`${API_URL}/dogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
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

  return (
    <Layout title="Add dog">
      <Link href="/dogs">Go Back</Link>
      <h1>Add dog</h1>
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

        <input type="submit" value="Add dog" className="btn" />
      </form>
    </Layout>
  )
}
