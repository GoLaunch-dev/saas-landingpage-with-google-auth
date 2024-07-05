/* eslint-disable @typescript-eslint/no-misused-promises */
import Link from 'next/link'
import { UserAuthForm } from '@/app/login/user-auth-form'
import LogoButton from '@/components/common/logo-button'

export default function AuthenticationPage() {
  return (
    <div>
      <div
        className="container relative h-screen flex-col items-center
          justify-center sm:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
      >
        {/* the gray thing on the left side */}
        <div
          className="relative hidden h-full flex-col bg-muted p-10 text-white
            lg:flex dark:border-r"
        >
          <div className="absolute inset-0 bg-zinc-900" />
          <LogoButton />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                {`"I hate the overhead involved in launching a
                new SaaS. It takes 2 days just to get auth,
                payments, and a landing page together. I
                want to focus on validating my ideas and
                building cool features that solves people's
                problems " `}
              </p>
              <footer className="text-sm">
                - Me, probably
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="absolute sm:hidden flex">
          <LogoButton />
        </div>
        <div className="lg:p-8 w-full flex h-full ">
          <div
            className="mx-auto flex w-full flex-col justify-center space-y-6
              sm:w-[350px]"
          >
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Launch your SaaS without the overhead
              </h1>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                href="/terms-of-service"
                target="_blank"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy-policy"
                target="_blank"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
