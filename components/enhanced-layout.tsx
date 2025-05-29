import type React from "react"
import EnhancedHeader from "./enhanced-header"
import { Footer } from "./footer"

interface LayoutProps {
  children: React.ReactNode
}

const EnhancedLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <EnhancedHeader />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default EnhancedLayout
