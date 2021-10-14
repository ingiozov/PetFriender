import { AuthProvider } from '../context/AuthContext'
import 'semantic-ui-css/semantic.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
