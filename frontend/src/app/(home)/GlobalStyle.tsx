'use client'

import { pretendard } from '@/src/fonts'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        font-family: ${pretendard.style.fontFamily};
    }
`

export default function () {
  return <GlobalStyle />
}
