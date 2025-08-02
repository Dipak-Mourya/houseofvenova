"use client"

import { Crown, Instagram, MessageCircle, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function StickyFooter() {
  return (
    <footer className="bg-gradient-to-r from-[#d87ca0] to-[#c66b8f] text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Crown className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold">HouseofVenova</span>
            </div>
            <p className="text-white/90 text-sm">
              Excessive Glamour, Handcrafted with Love by Two Women. Premium press-on nails delivered pan-India.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-white/90 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/products" className="block text-white/90 hover:text-white transition-colors text-sm">
                Products
              </Link>
              <Link
                href="/products/bestsellers"
                className="block text-white/90 hover:text-white transition-colors text-sm"
              >
                Best Sellers
              </Link>
              <Link href="/products/offers" className="block text-white/90 hover:text-white transition-colors text-sm">
                Offers
              </Link>
              <Link href="/about" className="block text-white/90 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link href="/blogs" className="block text-white/90 hover:text-white transition-colors text-sm">
                Blogs
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span className="text-white/90">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span className="text-white/90">hello@houseofvenova.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MessageCircle className="w-4 h-4" />
                <span className="text-white/90">WhatsApp Support</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-white/90 text-sm">Subscribe to get latest designs and offers</p>
            <div className="space-y-2">
              <Input
                placeholder="Your email address"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
              <Button className="w-full bg-white text-[#d87ca0] hover:bg-white/90">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/90 text-sm">
            © 2024 HouseofVenova. All rights reserved. | Pan-India Delivery Available
          </p>
        </div>
      </div>
    </footer>
  )
}
