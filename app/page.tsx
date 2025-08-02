"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Star, MessageCircle, Instagram, ArrowRight, Sparkles, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Layout } from "@/components/layout"
import { ContactModal } from "@/components/contact-modal"

interface Product {
  id: number
  name: string
  image: string
  category: string
  description: string
}

interface BestSellerProduct {
  id: number
  name: string
  image: string
  rating: number
  reviews: number
  description: string
}

interface Offer {
  id: number
  title: string
  description: string
  image: string
  badge: string
}

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | BestSellerProduct | null>(null)

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Royal Rose Collection",
      image: "/placeholder.svg?height=300&width=300",
      category: "Premium",
      description: "Elegant rose patterns with gold accents",
    },
    {
      id: 2,
      name: "Diamond Elegance Set",
      image: "/placeholder.svg?height=300&width=300",
      category: "Luxury",
      description: "Sparkling crystals and diamond-like finish",
    },
    {
      id: 3,
      name: "Golden Goddess",
      image: "/placeholder.svg?height=300&width=300",
      category: "Premium",
      description: "Shimmering gold with goddess-inspired motifs",
    },
    {
      id: 4,
      name: "Blush Butterfly",
      image: "/placeholder.svg?height=300&width=300",
      category: "Classic",
      description: "Delicate butterfly patterns in soft pink",
    },
  ]

  const bestSellers: BestSellerProduct[] = [
    {
      id: 5,
      name: "Pearl Princess",
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviews: 127,
      description: "Lustrous pearls with royal white base",
    },
    {
      id: 6,
      name: "Vintage Lace",
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviews: 98,
      description: "Intricate lace patterns with vintage charm",
    },
    {
      id: 7,
      name: "Midnight Glamour",
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviews: 156,
      description: "Sophisticated black with gold details",
    },
  ]

  const offers: Offer[] = [
    {
      id: 1,
      title: "Bridal Package",
      description: "Complete bridal nail set with matching designs for bride and bridesmaids",
      image: "/placeholder.svg?height=200&width=300",
      badge: "Most Popular",
    },
    {
      id: 2,
      title: "Bulk Orders",
      description: "Special pricing for orders of 10+ sets. Perfect for events and parties",
      image: "/placeholder.svg?height=200&width=300",
      badge: "Best Value",
    },
  ]

  const handleContactClick = (product: Product | BestSellerProduct) => {
    setSelectedProduct(product)
    setIsContactModalOpen(true)
  }

  return (
    <Layout currentPage="/">
      <div className="bg-gradient-to-b from-white to-[#f7d1d8]/20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7d1d8]/30 to-[#d87ca0]/20"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Crown className="w-16 h-16 text-[#d87ca0]" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#3b2c3d] mb-6">
              House<span className="text-[#d87ca0]">of</span>Venova
            </h1>
            <p className="text-xl md:text-2xl text-[#3b2c3d]/80 mb-4 font-medium">
              Excessive Glamour, Handcrafted with Love
            </p>
            <p className="text-lg text-[#3b2c3d]/70 mb-8">by Two Women</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#d87ca0] hover:bg-[#c66b8f] text-white px-8 py-3 text-lg"
                onClick={() => setIsContactModalOpen(true)}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Book a Session
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#d87ca0] text-[#d87ca0] hover:bg-[#d87ca0] hover:text-white px-8 py-3 text-lg bg-transparent"
                asChild
              >
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3b2c3d] mb-4">Featured Designs</h2>
              <p className="text-lg text-[#3b2c3d]/70 max-w-2xl mx-auto">
                Discover our handcrafted press-on nails, each design a masterpiece created with love and attention to
                detail.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 border-[#d87ca0]/20 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={256}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#d87ca0] text-white">{product.category}</Badge>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#3b2c3d] mb-2">{product.name}</h3>
                    <p className="text-[#3b2c3d]/70 mb-4 text-sm">{product.description}</p>
                    <Button
                      className="w-full bg-[#d87ca0] hover:bg-[#c66b8f] text-white"
                      onClick={() => handleContactClick(product)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact / Book
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-[#d87ca0] text-[#d87ca0] hover:bg-[#d87ca0] hover:text-white bg-transparent"
                asChild
              >
                <Link href="/products">
                  View All Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Best Sellers Preview */}
        <section className="py-16 bg-[#f7d1d8]/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3b2c3d] mb-4">Customer Favorites</h2>
              <p className="text-lg text-[#3b2c3d]/70">Our most loved designs with rave reviews</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {bestSellers.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 border-[#d87ca0]/20 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={256}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                        <span className="text-xs text-gray-600">({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#3b2c3d] mb-2">{product.name}</h3>
                    <p className="text-[#3b2c3d]/70 mb-4 text-sm">{product.description}</p>
                    <Button
                      className="w-full bg-[#d87ca0] hover:bg-[#c66b8f] text-white"
                      onClick={() => handleContactClick(product)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact / Book
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-[#d87ca0] text-[#d87ca0] hover:bg-[#d87ca0] hover:text-white bg-transparent"
                asChild
              >
                <Link href="/products/bestsellers">
                  View All Best Sellers
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Offers Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3b2c3d] mb-4">Special Offers</h2>
              <p className="text-lg text-[#3b2c3d]/70">Exclusive packages and bulk order deals</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {offers.map((offer) => (
                <Card
                  key={offer.id}
                  className="group hover:shadow-xl transition-all duration-300 border-[#d87ca0]/20 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={offer.image || "/placeholder.svg"}
                      alt={offer.title}
                      width={300}
                      height={192}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#d87ca0] text-white">{offer.badge}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#3b2c3d] mb-2">{offer.title}</h3>
                    <p className="text-[#3b2c3d]/70 mb-4">{offer.description}</p>
                    <Button
                      className="w-full bg-[#d87ca0] hover:bg-[#c66b8f] text-white"
                      onClick={() => setIsContactModalOpen(true)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Get Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-[#d87ca0] text-[#d87ca0] hover:bg-[#d87ca0] hover:text-white bg-transparent"
                asChild
              >
                <Link href="/products/offers">
                  View All Offers
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Social Reels Section */}
        <section className="py-16 bg-[#f7d1d8]/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3b2c3d] mb-4">Follow Our Journey</h2>
              <p className="text-lg text-[#3b2c3d]/70">See our latest creations and happy customers</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-[#d87ca0]/20 to-[#f7d1d8]/40 rounded-lg flex items-center justify-center group hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <Instagram className="w-12 h-12 text-[#d87ca0] group-hover:scale-110 transition-transform duration-300" />
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-[#d87ca0] text-[#d87ca0] hover:bg-[#d87ca0] hover:text-white bg-transparent"
                asChild
              >
                <Link href="/social">
                  <Instagram className="w-5 h-5 mr-2" />
                  Visit Our Instagram
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3b2c3d] mb-4">Ready to Get Glamorous?</h2>
              <p className="text-lg text-[#3b2c3d]/70 mb-8">
                Book your consultation today and let us create the perfect nail art for you. Pan-India delivery
                available!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#d87ca0] hover:bg-[#c66b8f] text-white px-8"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#d87ca0] text-[#d87ca0] hover:bg-[#d87ca0] hover:text-white px-8 bg-transparent"
                  onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false)
          setSelectedProduct(null)
        }}
        selectedProduct={selectedProduct}
      />
    </Layout>
  )
}
