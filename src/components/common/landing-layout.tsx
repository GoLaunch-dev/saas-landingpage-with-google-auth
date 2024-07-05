import React from 'react'
import { Header } from '@components/common/header'
import { Footer } from '@components/common/footer'
import { createServersideClient } from '@/utils/supabase/server'

interface LandingLayoutProps {
  children: React.ReactNode
}

const LandingLayout: React.FC<LandingLayoutProps> = async ({
  children
}) => {
  const supabase = createServersideClient()

  const { data } = await supabase.auth.getUser()
  const { user } = data

  return (
    <>
      <Header user={user} />
      <div className="flex flex-1 justify-center w-full">
        <div className="flex w-full max-w-[1280px] h-full">
          {children}
        </div>
      </div>
      <Footer user={user} />
    </>
  )
}

export default LandingLayout
