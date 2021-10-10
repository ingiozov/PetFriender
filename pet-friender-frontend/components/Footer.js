import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; PetFriender</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  )
}