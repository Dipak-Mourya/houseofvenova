"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, Crown, Heart, Trophy } from "lucide-react"
import Image from "next/image"
import { Layout } from "@/components/layout"
import { ContactModal } from "@/components/contact-modal"

interface BestSellerProduct {
  id: number
  name: string
  image: string
  rating: number
  reviews: number
  description: string
  category: string
  rank: number
}

export default function BestSellersPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<BestSellerProduct | null>(null)

  const bestSellers: BestSellerProduct[] = [
    {
      id: 1,
      name: "Pearl Princess",
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviews: 127,
      description: "Lustrous pearls with royal white base",
      category: "Luxury",
      rank: 1,
    },
    {
      id: 2,
      name: "Vintage Lace",
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviews: 98,
      description: "Intricate lace patterns with vintage charm",
      category: "Premium",
      rank: 2,
    },
    {
      id: 3,
      name: "Midnight Glamour",
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      reviews: 156,
      description: "Sophisticated black with gold details",
      category: "Luxury",
      rank: 3,
    },
    {
      id: 4,
      name: "Royal Rose Collection",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 89,
      description: "Elegant rose patterns with gold accents",
      category: "Premium",
      rank: 4,
    },
    {
      id: 5,
      name: "Diamond Elegance Set",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 76,
      description: "Sparkling crystals and diamond-like finish",
      category: "Luxury",
      rank: 5,
    },
    {
      id: 6,
      name: "Golden Goddess",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 112,
      description: "Shimmering gold with goddess-inspired motifs",
      category: "Premium",
      rank: 6,
    },
  ]

  const handleContactClick = (product: BestSellerProduct) => {
    setSelectedProduct(product)
    setIsContactModalOpen(true)
  }

  return (
    <Layout currentPage="/products/bestsellers">
      <div className="bg-gradient-to-b from-white to-[#f7d1d8]/20">
        <div className="py-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <Trophy className="w-12 h-12 text-[#d87ca0]" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b2c3d] mb-4">Customer Favorites</h1>
              <p className="text-base md:text-lg text-[#3b2c3d]/70 max-w-2xl mx-auto px-4">
                Our most loved designs with rave reviews from customers across India. These are the nail arts that have
                won hearts and earned the highest ratings.
              </p>
            </div>

            {/* Best Sellers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {bestSellers.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 border-[#d87ca0]/20 overflow-hidden relative"
                >
                  {/* Rank Badge */}
                  {product.rank <= 3 && (
                    <div className="absolute top-4 left-4 z-10">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                          product.rank === 1 ? "bg-yellow-500" : product.rank === 2 ? "bg-gray-400" : "bg-amber-600"
                        }`}
                      >
                        {product.rank}
                      </div>
                    </div>
                  )}

                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={256}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-[#d87ca0] text-white">{product.category}</Badge>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center space-x-1 bg-white/95 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                        <span className="text-xs text-gray-600">({product.reviews})</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-[#3b2c3d]">{product.name}</h3>
                      {product.rank <= 3 && <Crown className="w-5 h-5 text-[#d87ca0]" />}
                    </div>
                    <p className="text-[#3b2c3d]/70 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-[#3b2c3d]/60">{product.reviews} reviews</span>
                    </div>
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

            {/* Customer Testimonials */}
            <div className="mt-16 bg-[#f7d1d8]/10 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3b2c3d] text-center mb-8">What Our Customers Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Priya Sharma",
                    review: "The Pearl Princess design is absolutely stunning! Perfect for my wedding.",
                    rating: 5,
                    design: "Pearl Princess",
                  },
                  {
                    name: "Ananya Gupta",
                    review: "Vintage Lace exceeded my expectations. The quality is amazing!",
                    rating: 5,
                    design: "Vintage Lace",
                  },
                  {
                    name: "Kavya Reddy",
                    review: "Midnight Glamour made me feel like a queen. Highly recommend!",
                    rating: 5,
                    design: "Midnight Glamour",
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-[#3b2c3d]/80 mb-3 italic">&ldquo;{testimonial.review}&rdquo;</p>
                    <div className="text-sm">
                      <p className="font-semibold text-[#3b2c3d]">{testimonial.name}</p>
                      <p className="text-[#3b2c3d]/60">Purchased: {testimonial.design}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-[#3b2c3d] mb-4">Ready to Join Our Happy Customers?</h3>
              <p className="text-[#3b2c3d]/70 mb-6">
                Book your consultation today and experience the HouseofVenova difference
              </p>
              <Button
                size="lg"
                className="bg-[#d87ca0] hover:bg-[#c66b8f] text-white px-8"
                onClick={() => setIsContactModalOpen(true)}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Your Session
              </Button>
            </div>
          </div>
        </div>
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
