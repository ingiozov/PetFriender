import Link from 'next/link'
import Search from './Search'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header>
      <nav className={styles.header}>
        <ul>
          <li>
            <Link href="/">
              <a className={styles.logo}>PetFriender</a>
            </Link>
          </li>
          <li>
            <Link href="/dogs">
              <a>Find a Dog</a>
            </Link>
          </li>
          <li>
            <Link href="/cats">
              <a>Find a Cat</a>
            </Link>
          </li>
        </ul>

        <Search />

        <ul>
          <li>
            <Link href="/login">Log In</Link>
          </li>
          <li>
            <Link href="/register">Sign Up</Link>
          </li>
          <li>
            <Link href="/dogs/add">Add dog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
