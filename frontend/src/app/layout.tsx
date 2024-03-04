import StyledComponentsRegistry from '@/src/lib/registry'
import '../../styles/globals.css'
import MuiThemeProvider from '../lib/muiThemeProvider'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <MuiThemeProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </MuiThemeProvider>
      </body>
    </html>
  )
}
