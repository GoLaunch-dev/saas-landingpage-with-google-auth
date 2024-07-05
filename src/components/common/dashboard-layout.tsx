import React from 'react'
import { Sidebar } from '@components/ui/sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children
}) => {
  return (
    <div className="flex flex-1 justify-center w-full h-full">
      <div className="sticky left-0">
        <Sidebar navCollapsedSize={300} />
      </div>
      <div className="flex justify-center w-full">
        <div
          className="flex flex-col w-full max-w-[1280px] py-24 px-16
            overflow-y-auto"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
