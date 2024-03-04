'use client'

import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

// MUI Theme 설정 커스텀 파일
const MuiThemeProvider = ({ children }: React.PropsWithChildren) => {
  const theme = createTheme({
    typography: {
      fontFamily: "'Pretendard' ,sans-serif"
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider
