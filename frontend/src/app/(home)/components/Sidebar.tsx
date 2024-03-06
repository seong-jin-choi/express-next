'use client'

import styled, { css, keyframes } from 'styled-components'
import NextImage from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const SidebarWrap = styled.div`
  height: auto;
  width: 100%;
  @media (min-width: 1920px) {
    position: static;
    min-width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: 300px;
  }
`
const Layout = styled.div`
  padding-left: 40px;
  padding-right: 4px;
`
const TitleWrap = styled(Layout)`
  background-color: #17171c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 12px;
  padding-right: 12px;
  @media (min-width: 1920px) {
    padding-left: 40px;
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom: solid 1px #212124;
  }
`

const MenuButton = styled.button`
  display: block;
  @media (min-width: 1920px) {
    display: none;
  }
`
const FlagWrap = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
`

const LogoContainer = styled.div`
  width: auto;
  display: flex;
  @media (min-width: 1920px) {
    width: 100%;
    justify-content: space-between;
  }
`
const LogoWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`
const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
`
const NavItemsWrap = styled.div``
const NavItemsLable = styled.h2`
  font-size: 20px;
  font-weight: 700;
`
interface INav {
  $isOpened: boolean | null
}
const openKeyframe = keyframes`
  from {
    transform: translateX(-260px);
  }

  to {
    transform: translateX(0px);
  }
`

const closeKeyframe = keyframes`
  from {
    transform: translateX(0px);
  }

  to {
    transform: translateX(-260px);
  }
`

const closeAnimation = css`
  animation: 0.2s ${closeKeyframe} ease-in forwards;
`
const openAnimation = css`
  animation: 0.2s ${openKeyframe} ease-in forwards;
`

const Nav = styled.nav<INav>`
  position: absolute;
  display: flex;
  background-color: #17171c;
  padding-bottom: 71px;
  flex-direction: column;
  padding-left: 34px;
  padding-top: 20px;
  padding-right: 14px;
  gap: 59px;
  height: calc(100% - 80px);
  width: 260px;
  transform: translateX(-260px);
  ${({ $isOpened }) => {
    if ($isOpened === true) {
      return openAnimation
    } else if ($isOpened === false) {
      return closeAnimation
    }
  }}

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    outline: none;
    background: #17171c;
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
    border: 3px solid rgba(0, 0, 0, 0.8);
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: #8e8e8e;
      transition: background 0.5s ease;
    }
  }
  @media (min-width: 1920px) {
    position: static;
    padding-left: 40px;
    width: 100%;
    transform: translateX(0px);
    animation: none;
  }
`
const NavLinksWrap = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 23px;
`
const NavLink = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.8;
  &:hover {
    opacity: 0.6;
  }
`
interface IBackprop {
  $isOpened: boolean | null
}
const fadeinKeyframe = keyframes`
  from {
    opacity: 0.0;
  }

  to {
    background-color: #000000;
    opacity: 0.6;
  }
`
const fadeinAnimation = css`
  animation: 0.2s ${fadeinKeyframe} ease-in forwards;
`
const Backprop = styled.div<IBackprop>`
  position: absolute;
  width: 100%;
  height: calc(100% - 80px);
  ${({ $isOpened }) => $isOpened && fadeinAnimation};
  display: ${({ $isOpened }) => ($isOpened ? 'block' : 'none')};
  @media (min-width: 1920px) {
    display: none;
    padding-top: 0px;
  }
`
export default function () {
  const [isMenuOpened, setIsMenuOpened] = useState<null | boolean>(null)
  const handleSlideMenu = () => {
    setIsMenuOpened(prev => !prev)
  }

  useEffect(() => {
    window.addEventListener('resize', () => setIsMenuOpened(false))

    return () => {
      window.removeEventListener('resize', () => setIsMenuOpened(false))
    }
  }, [])

  return (
    <SidebarWrap>
      <TitleWrap>
        <LogoContainer style={{ display: 'flex' }}>
          <LogoWrap>
            <NextImage src={'/logo.png'} width={52} height={52} alt={'로고'} />
            <Link href={'/'}>
              <Title>뚜비트</Title>
            </Link>
          </LogoWrap>
          <FlagWrap>
            <NextImage src={'/flag_ko.png'} width={30} height={20} alt={'로고'} />
            <NextImage src={'/flag_uk.png'} width={30} height={20} alt={'로고'} />
          </FlagWrap>
        </LogoContainer>

        <MenuButton onClick={handleSlideMenu}>
          <NextImage src={isMenuOpened ? '/close_icon.png' : '/menu_icon.png'} width={30} height={30} alt={'로고'} />
        </MenuButton>
      </TitleWrap>
      <Backprop $isOpened={isMenuOpened} onClick={() => setIsMenuOpened(false)} />
      <Nav $isOpened={isMenuOpened}>
        <NavItemsWrap>
          <NavItemsLable>Main</NavItemsLable>
          <NavLinksWrap>
            <li>
              <NavLink href={'#'}>공지사항</NavLink>
            </li>
            <li>
              <NavLink href={'#'}>트레이딩 비법</NavLink>
            </li>
            <li>
              <NavLink href={'#'}>전문 트레이너 기고문</NavLink>
            </li>
            <li>
              <NavLink href={'#'}>자유게시판</NavLink>
            </li>
          </NavLinksWrap>
        </NavItemsWrap>
        <NavItemsWrap>
          <NavItemsLable>Community</NavItemsLable>
          <NavLinksWrap>
            <li>
              <NavLink href={'#'}>뚜비트 무료 공부방</NavLink>
            </li>
            <li>
              <NavLink href={'#'}>카카오톡 단톡방</NavLink>
            </li>
            <li>
              <NavLink href={'#'}>트레이딩 유튜브 링크</NavLink>
            </li>
          </NavLinksWrap>
        </NavItemsWrap>
        <NavItemsWrap>
          <NavItemsLable>Link</NavItemsLable>
          <NavLinksWrap>
            <li>
              <NavLink href={'#'}>선물 거래소 비교</NavLink>
            </li>
            <li>
              <NavLink href={'#'}>그레이스케일 매집</NavLink>
            </li>
            <li>
              <NavLink href={'#'}>청산앱</NavLink>
            </li>
            <li>
              <NavLink href={'#'}>BTC 현물 ETF 현장</NavLink>
            </li>
            <li>
              <NavLink href={'#'}>BTC 시장 Cycle</NavLink>
            </li>
            <li>
              <NavLink href={'#'}>Abram Chart</NavLink>
            </li>
            <li>
              <NavLink href={'#'}>AI Chart</NavLink>
            </li>
            <li>
              <NavLink href={'#'}>Van der Pope</NavLink>
            </li>
          </NavLinksWrap>
        </NavItemsWrap>
      </Nav>
    </SidebarWrap>
  )
}
