'use client'

import { styled } from 'styled-components'
import Sidebar from '../components/Sidebar'

const PageLayout = styled.div`
  display: block;
  @media (min-width: 1920px) {
    display: flex;
    flex-direction: row;
  }
`

const SideBarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayout>
      <Sidebar />
      {children}
    </PageLayout>
  )
}

export default SideBarLayout
