'use client'

import BlankLayout from 'src/@core/layouts/BlankLayout'

export default async function ({ children }: { children: React.ReactNode }) {
  return <BlankLayout>{children}</BlankLayout>
}