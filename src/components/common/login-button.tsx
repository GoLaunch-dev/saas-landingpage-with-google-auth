'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { createNewBrowserClient } from '@/utils/supabase/client'

interface LoginButtonProps {
  nextUrl?: string
}

const LoginButton: React.FC<LoginButtonProps> = ({
  nextUrl
}) => {
  const supabase = createNewBrowserClient()
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${
          nextUrl ?? ''
        }`
      }
    })
  }

  return (
    <Button
      onClick={handleLogin}
      variant={'outline'}
      className={cn('right-4 top-4 md:right-8 md:top-8')}
    >
      <img
        src="/google.svg"
        alt="Google Logo"
        className="w-6 h-6 mr-2"
      />
      Continue with Google
    </Button>
  )
}

export default LoginButton
