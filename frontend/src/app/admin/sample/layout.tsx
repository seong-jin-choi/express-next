'use client'

import UserLayout from 'src/layouts/UserLayout'

export default async function ({ children }: { children: React.ReactNode }) {
  return <UserLayout>{children}</UserLayout>
}
