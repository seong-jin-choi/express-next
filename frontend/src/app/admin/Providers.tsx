'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Toaster } from 'react-hot-toast'
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ key: 'css' }}>
      <ThemeComponent>
        <body>
          {children}
          <ReactHotToast>
            <Toaster position={'bottom-center'} toastOptions={{ className: 'react-hot-toast' }} />
          </ReactHotToast>
        </body>
      </ThemeComponent>
    </AppRouterCacheProvider>
  )
}
