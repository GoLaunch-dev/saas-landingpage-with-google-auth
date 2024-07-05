'use client'
import Link from 'next/link'
import Typography from '@components/ui/typography'
import { type User } from '@supabase/supabase-js'

interface FooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  user: User | null
}

export function Footer({ className, user }: FooterProps) {
  const ctaText = user?.id
    ? 'Go to your dashboard'
    : 'Get Started'
  const ctaLocation = user?.id ? '/dashboard' : '/login'
  return (
    <footer className="flex h-12 items-center justify-center w-full border-t p-4">
      <div className="w-full max-w-[1280px] md:px-8 px-4 flex place-content-center">
        <div className="gap-x-11 md:flex flex-1 hidden">
          <Link
            href="/"
            className="pointer flex items-center"
          >
            <img src="/logo.svg" className="mr-3" />
            <Typography className="!text-white !text-base font-medium ">
              {`{{siteName}}`}
            </Typography>
          </Link>
        </div>
        <div className="flex max-w-fit items-center gap-x-4">
          <Link
            href={ctaLocation}
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              {ctaText}
            </Typography>
          </Link>
          <Link
            href="/terms-of-service"
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              Terms of service
            </Typography>
          </Link>
          <Link
            href="/privacy-policy"
            className="pointer block w-fit"
          >
            <Typography variant="p">
              Privacy Policy
            </Typography>
          </Link>
        </div>
      </div>
    </footer>
  )
}
