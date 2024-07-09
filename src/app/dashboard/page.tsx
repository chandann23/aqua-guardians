import React from 'react'
import MobileNav from './_components/Mobile-Nav'
import Sidebar from './_components/Side-Bar'
import { getAuthSession } from '~/lib/auth'
import { AccessLevel } from '@prisma/client'


const page = async () => {
  const user = await getAuthSession()
  console.log(user?.user.access)
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="p-5">
        <MobileNav />
      </div>
    </div>
  )
}

export default page
