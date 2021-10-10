import styles from '../styles/Showcase.module.css'

export default function Showcase() {
  return (
    <div className={styles.showcase}>
      <h1>Get Personalized Pet Matches</h1>
      <h2>
        Answer a few quick questions to see your perfect matches on PetFriender.
      </h2>
      <button className="btn">Get Started</button>
    </div>
  )
}
