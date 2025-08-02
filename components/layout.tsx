"use client"

import type React from "react"
import { useState } from "react"
import { MobileNavbar } from "@/components/mobile-navbar"
import { StickyFooter } from "@/components/sticky-footer"
import { ContactModal } from "@/components/contact-modal"

interface LayoutProps {
  children: React.ReactNode
  currentPage?: string
}

export function Layout({ children, currentPage = "" }: LayoutProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <MobileNavbar currentPage={currentPage} onBookNowClick={() => setIsContactModalOpen(true)} />

      {/* Main Content Area - with proper spacing for fixed header */}
      <main className="flex-1 pt-20 pb-4">{children}</main>

      {/* Fixed Footer */}
      <StickyFooter />

      {/* Global Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
