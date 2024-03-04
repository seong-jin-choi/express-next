import axios from 'axios'
import Provider from './Providers'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // await axios.post('http://localhost:8080/api/auth', {}, { withCredentials: true })

  return (
    <html lang='en'>
      <Provider>{children}</Provider>
    </html>
  )
}
