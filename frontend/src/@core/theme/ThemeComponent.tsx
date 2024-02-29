// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'

// ** Theme Config
import themeConfig from 'src/configs/themeConfig'

// ** Theme
import themeOptions from './ThemeOptions'

// ** Global Styles
import GlobalStyling from './globalStyles'

// ** Types Import

import { Settings } from '../context/settingsContext'

interface Props {
  children: ReactNode
}

const ThemeComponent = ({ children }: Props) => {
  // ** Props
  const initialSettings: Settings = {
    themeColor: 'primary',
    mode: themeConfig.mode,
    skin: themeConfig.skin,
    footer: themeConfig.footer,
    layout: themeConfig.layout,
    lastLayout: themeConfig.layout,
    direction: themeConfig.direction,
    navHidden: themeConfig.navHidden,
    appBarBlur: themeConfig.appBarBlur,
    navCollapsed: themeConfig.navCollapsed,
    contentWidth: themeConfig.contentWidth,
    toastPosition: themeConfig.toastPosition,
    verticalNavToggleType: themeConfig.verticalNavToggleType,
    appBar: themeConfig.layout === 'horizontal' && themeConfig.appBar === 'hidden' ? 'fixed' : themeConfig.appBar
  }
  let theme = createTheme(themeOptions(initialSettings, 'light'))

  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  )
}

export default ThemeComponent
