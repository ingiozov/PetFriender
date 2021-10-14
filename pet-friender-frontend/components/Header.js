import Link from 'next/link'
import { useContext } from 'react'
import { Icon, Button } from 'semantic-ui-react'
import Search from './Search'
import AuthContext from '../context/AuthContext'
import styles from '../styles/Header.module.css'

export default function Header() {
  const { user, logout } = useContext(AuthContext)

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
          {user ? (
            // If logged in
            <>
              <li>
                <Link href="/dogs/add">Add dog</Link>
              </li>
              <li>
                <Link href="/account/dashboard">Dashboard</Link>
              </li>
              <li>
                <Button onClick={() => logout()}>
                  <Icon name="sign out" /> Logout
                </Button>
              </li>
            </>
          ) : (
            // If logged out
            <>
              <li>
                <Icon name="sign in" />
                <Link href="/account/login">Log In</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}
