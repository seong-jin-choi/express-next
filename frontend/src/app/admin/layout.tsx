import Provider from './Providers'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Provider>{children}</Provider>
    </html>
  )
}
