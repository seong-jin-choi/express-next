import StyledComponentsRegistry from '@/src/lib/registry'
import '../../styles/globals.css'
import { pretendard } from '../fonts'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={pretendard.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
