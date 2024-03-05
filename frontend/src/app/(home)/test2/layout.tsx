export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div>5</div>
        {children}
      </body>
    </html>
  )
}
