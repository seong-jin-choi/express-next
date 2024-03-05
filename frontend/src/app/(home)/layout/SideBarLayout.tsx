'use client'

import { styled } from 'styled-components'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'

const PageLayout = styled.div`
  display: block;
  position: relative;
  @media (min-width: 1920px) {
    display: flex;
    flex-direction: row;
  }
`
interface IBackprop {
  $isOpened: boolean
}
const Backprop = styled.div<IBackprop>`
  padding-top: 80px; // 헤더의 높이와 같음
  height: 100vh;
  background-color: ${({ $isOpened }) => ($isOpened ? '#0000008a' : 'none')};
  transition: background-color 0.2s ease-in-out;
  @media (min-width: 1920px) {
    padding-top: 0px;
  }
`

const SideBarLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const handleSlideMenu = () => {
    setIsMenuOpened(prev => !prev)
  }

  return (
    <PageLayout>
      <Sidebar isMenuOpened={isMenuOpened} handleSlideMenu={handleSlideMenu} />
      <Backprop $isOpened={isMenuOpened}>{children}</Backprop>
    </PageLayout>
  )
}

export default SideBarLayout
