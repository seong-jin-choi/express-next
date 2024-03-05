'use client'

import { styled } from 'styled-components'
import Sidebar from '../components/Sidebar'

const PageLayout = styled.div`
  display: block;
  position: relative;
  @media (min-width: 1920px) {
    display: flex;
    flex-direction: row;
  }
`
const Backprop = styled.div`
  padding-top: 80px; // 헤더의 높이와 같음
  @media (min-width: 1920px) {
    padding-top: 0px;
  }
`

const SideBarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayout>
      <Sidebar />
      <Backprop>{children}</Backprop>
    </PageLayout>
  )
}

export default SideBarLayout
