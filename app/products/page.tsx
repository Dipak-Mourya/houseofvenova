"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, MessageCircle, Filter, Heart } from "lucide-react"
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

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const categories = ["All", "Premium", "Luxury", "Classic", "Bridal", "Custom"]

  const products: Product[] = [
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
    {
      id: 5,
      name: "Pearl Princess",
      image: "/placeholder.svg?height=300&width=300",
      category: "Luxury",
      description: "Lustrous pearls with royal white base",
    },
    {
      id: 6,
      name: "Vintage Lace",
      image: "/placeholder.svg?height=300&width=300",
      category: "Premium",
      description: "Intricate lace patterns with vintage charm",
    },
    {
      id: 7,
      name: "Bridal Bliss",
      image: "/placeholder.svg?height=300&width=300",
      category: "Bridal",
      description: "Perfect for your special day",
    },
    {
      id: 8,
      name: "Midnight Glamour",
      image: "/placeholder.svg?height=300&width=300",
      category: "Luxury",
      description: "Sophisticated black with gold details",
    },
    {
      id: 9,
      name: "Floral Fantasy",
      image: "/placeholder.svg?height=300&width=300",
      category: "Classic",
      description: "Beautiful floral patterns in vibrant colors",
    },
    {
      id: 10,
      name: "Crystal Dreams",
      image: "/placeholder.svg?height=300&width=300",
      category: "Premium",
      description: "Dreamy crystals with ethereal finish",
    },
    {
      id: 11,
      name: "Sunset Ombre",
      image: "/placeholder.svg?height=300&width=300",
      category: "Classic",
      description: "Gradient sunset colors with smooth transition",
    },
    {
      id: 12,
      name: "Royal Crown",
      image: "/placeholder.svg?height=300&width=300",
      category: "Luxury",
      description: "Majestic crown designs fit for royalty",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleContactClick = (product: Product) => {
    setSelectedProduct(product)
    setIsContactModalOpen(true)
  }

  return (
    <Layout currentPage="/products">
      <div className="bg-gradient-to-b from-white to-[#f7d1d8]/20">
        <div className="py-16">
          <div className="container mx-auto px-4">
            {/* Header - Mobile Responsive */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b2c3d] mb-4">
                Our Complete Collection
              </h1>
              <p className="text-base md:text-lg text-[#3b2c3d]/70 max-w-2xl mx-auto px-4">
                Explore our entire range of handcrafted press-on nails. Each design is a masterpiece created with love
                and attention to detail.
              </p>
            </div>

            {/* Search and Filter - Mobile Responsive */}
            <div className="mb-8 md:mb-12">
              <div className="flex flex-col gap-4 items-stretch md:flex-row md:items-center md:justify-between">
                <div className="relative flex-1 max-w-md mx-auto md:mx-0">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#d87ca0] w-5 h-5" />
                  <Input
                    placeholder="Search designs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-[#d87ca0]/30 focus:border-[#d87ca0] focus:ring-[#d87ca0]/20"
                  />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  <Filter className="w-5 h-5 text-[#d87ca0] flex-shrink-0" />
                  <div className="flex gap-2 min-w-max">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={
                          selectedCategory === category
                            ? "bg-[#d87ca0] hover:bg-[#c66b8f] text-white text-xs whitespace-nowrap"
                            : "border-[#d87ca0] text-[#d87ca0] hover:bg-[#d87ca0] hover:text-white text-xs whitespace-nowrap"
                        }
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid - Mobile Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
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

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">💅</div>
                <h3 className="text-2xl font-semibold text-[#3b2c3d] mb-2">No designs found</h3>
                <p className="text-[#3b2c3d]/70 mb-6">Try adjusting your search or filter criteria</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  className="bg-[#d87ca0] hover:bg-[#c66b8f] text-white"
                >
                  Clear Filters
                </Button>
              </div>
            )}
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
