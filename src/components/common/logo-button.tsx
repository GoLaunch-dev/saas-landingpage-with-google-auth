import React from 'react'
import Link from 'next/link'

const LogoButton: React.FC = () => {
  return (
    <Link href="/">
      <div className="relative z-20 flex items-center text-lg font-medium p-4 mb-4">
        <img src="/logo.svg" className="mr-3" alt="Logo" />
        {`{{siteName}}`}
      </div>
    </Link>
  )
}

export default LogoButton
