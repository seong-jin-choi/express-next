import StyledComponentsRegistry from '@/src/lib/registry'
import GlobalStyle from './GlobalStyle'
import SideBarLayout from './layout/SideBarLayout'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <SideBarLayout>{children}</SideBarLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
