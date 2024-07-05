/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import LoginButton from '@/components/common/login-button'

interface UserAuthFormProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({
  className,
  ...props
}: UserAuthFormProps) {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div
          className="relative flex justify-center text-xs flex-col align-center
            uppercase"
        >
          <div className="grid gap-2">
            <LoginButton nextUrl="/dashboard" />
          </div>
        </div>
      </div>
    </div>
  )
}
