import styles from '../styles/Showcase.module.css'

export default function Showcase() {
  return (
    <div className={styles.showcase}>
      <h1>Pet Adoption Platform</h1>
      <h2>A place where all pet friends meet up</h2>
      <button className="btn">Get Started</button>
    </div>
  )
}
