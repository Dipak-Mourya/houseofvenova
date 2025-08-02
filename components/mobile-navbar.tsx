"use client"

import { useState } from "react"
import { Crown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MobileNavbarProps {
  currentPage?: string
  onBookNowClick?: () => void
}

export function MobileNavbar({ currentPage = "", onBookNowClick }: MobileNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/products/bestsellers", label: "Best Sellers" },
    { href: "/products/offers", label: "Offers" },
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/social", label: "Social" },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full bg-white backdrop-blur-sm z-50 border-b border-[#d87ca0]/20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Crown className="w-8 h-8 text-[#d87ca0]" />
              <span className="text-xl md:text-2xl font-bold text-[#3b2c3d]">HouseofVenova</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    currentPage === link.href ? "text-[#d87ca0] font-semibold" : "text-[#3b2c3d] hover:text-[#d87ca0]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={onBookNowClick}
                className="bg-[#d87ca0] hover:bg-[#c66b8f] text-white text-sm md:text-base px-4 md:px-6"
              >
                Book Now
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#3b2c3d] hover:text-[#d87ca0] transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay and Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Dark Backdrop - Higher z-index and solid background */}
          <div className="fixed inset-0 bg-black/60 z-[60] lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />

          {/* Sidebar Menu - Even higher z-index and solid white background */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-[70] lg:hidden transform transition-transform duration-300 shadow-2xl border-l border-[#d87ca0]/10">
            <div className="p-6 h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <Crown className="w-6 h-6 text-[#d87ca0]" />
                  <span className="text-xl font-bold text-[#3b2c3d]">HouseofVenova</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#3b2c3d] hover:text-[#d87ca0] transition-colors rounded-full hover:bg-[#f7d1d8]/20"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-4 px-4 rounded-lg transition-colors text-base font-medium ${
                      currentPage === link.href
                        ? "text-[#d87ca0] bg-[#f7d1d8]/30 font-semibold border-l-4 border-[#d87ca0]"
                        : "text-[#3b2c3d] hover:text-[#d87ca0] hover:bg-[#f7d1d8]/20"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-[#d87ca0]/20">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onBookNowClick?.()
                  }}
                  className="w-full bg-[#d87ca0] hover:bg-[#c66b8f] text-white py-3 text-base font-medium"
                >
                  Book Your Session
                </Button>

                <div className="mt-4 text-center">
                  <p className="text-sm text-[#3b2c3d]/60">Excessive Glamour, Handcrafted with Love</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
