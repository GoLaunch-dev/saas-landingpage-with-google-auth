'use client'
import * as React from 'react'
import { Plus, User, LogOut } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Nav } from '@/components/ui/nav'
import { TooltipProvider } from '@/components/ui/tooltip'
import LogoButton from '@components/common/logo-button'
import { createNewBrowserClient } from '@/utils/supabase/client'

interface MailProps {
  defaultCollapsed?: boolean
  navCollapsedSize?: number
}

export function Sidebar({
  defaultCollapsed = false
}: MailProps) {
  const supabase = createNewBrowserClient()
  const handleLogin = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }
  // TODO: Replace this with ShadCN's sidebar once it's released lol
  return (
    <TooltipProvider delayDuration={0}>
      <div
        className="border-r min-h-full h-full bg-sidebar flex flex-col
          min-w-[225px]"
      >
        <LogoButton />
        <Nav
          isCollapsed={defaultCollapsed}
          links={[
            {
              title: 'Dashboard',
              icon: Plus,
              path: '/dashboard'
            }
          ]}
        />
        <Separator />
        <Nav
          isCollapsed={defaultCollapsed}
          links={[
            {
              title: 'Profile',
              icon: User,
              path: '/profile'
            }
          ]}
        />
        <div className="flex-1" />
        <Nav
          isCollapsed={defaultCollapsed}
          links={[
            {
              title: 'Logout',
              icon: LogOut,
              onClick: handleLogin
            }
          ]}
        />
      </div>
    </TooltipProvider>
  )
}
