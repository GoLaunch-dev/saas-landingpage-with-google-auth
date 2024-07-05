import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import { TooltipProvider } from '@/components/ui/tooltip'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `{{tagLine}}`,
  description: `{{tagLineDescription}}`,
  openGraph: {
    images: '/opengraph-image.png'
  },
  twitter: {
    card: 'summary_large_image',
    title: `{{tagLine}}`,
    description: `{{tagLineDescription}}`,
    images: ['https://i.imgur.com/ZpMv5eH.png']
  }
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased"
    >
      <Analytics />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <main
              className={`flex min-h-screen h-screen flex-col ${inter.className}`}
            >
              {children}
            </main>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
