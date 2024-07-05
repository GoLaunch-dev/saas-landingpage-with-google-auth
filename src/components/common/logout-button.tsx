'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import {
  Button,
  buttonVariants
} from '@/components/ui/button'
import { createNewBrowserClient } from '@/utils/supabase/client'

interface LogoutButtonProps {
  nextUrl?: string
}

const Logoutbutton: React.FC<LogoutButtonProps> = ({
  nextUrl
}) => {
  const supabase = createNewBrowserClient()
  const handleLogin = async () => {
    await supabase.auth.signOut()
    window.location.href = nextUrl ?? '/'
  }

  return (
    <Button
      onClick={handleLogin}
      className={cn(
        buttonVariants({ variant: 'outline' }),
        'right-4 top-4 md:right-8 md:top-8'
      )}
    >
      Logout
    </Button>
  )
}

export default Logoutbutton
