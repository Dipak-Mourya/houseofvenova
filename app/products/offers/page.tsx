"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Gift, Users, Calendar, Sparkles, Crown, LucideIcon } from "lucide-react"
import Image from "next/image"
import { Layout } from "@/components/layout"
import { ContactModal } from "@/components/contact-modal"

interface Offer {
  id: number
  title: string
  description: string
  image: string
  badge: string
  icon: LucideIcon
  features: string[]
  savings: string
  originalPrice?: string
  discountedPrice?: string
  validUntil: string
}

export default function OffersPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null)

  const offers: Offer[] = [
    {
      id: 1,
      title: "Bridal Package",
      description: "Complete bridal nail set with matching designs for bride and bridesmaids",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Most Popular",
      icon: Crown,
      features: [
        "Bride's custom design consultation",
        "Matching bridesmaid designs (up to 6)",
        "Free touch-up kit included",
        "Pan-India delivery",
        "24/7 support during wedding week",
      ],
      savings: "Save up to 40%",
      validUntil: "Valid until March 2024",
    },
    {
      id: 2,
      title: "Bulk Orders",
      description: "Special pricing for orders of 10+ sets. Perfect for events and parties",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Best Value",
      icon: Users,
      features: [
        "Minimum 10 sets required",
        "Mix and match designs",
        "Volume discount pricing",
        "Free shipping across India",
        "Dedicated account manager",
      ],
      savings: "Save up to 30%",
      validUntil: "Ongoing offer",
    },
    {
      id: 3,
      title: "Seasonal Collection",
      description: "Limited edition designs for festivals and special occasions",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Limited Time",
      icon: Calendar,
      features: [
        "Exclusive seasonal designs",
        "Festival-themed patterns",
        "Premium packaging included",
        "Early access to new collections",
        "Collector's certificate",
      ],
      savings: "Save 25%",
      validUntil: "Valid until January 2024",
    },
    {
      id: 4,
      title: "First-Time Customer",
      description: "Special welcome offer for new customers trying HouseofVenova",
      image: "/placeholder.svg?height=300&width=400",
      badge: "New Customer",
      icon: Gift,
      features: [
        "20% off first order",
        "Free consultation call",
        "Complimentary nail care kit",
        "Priority customer support",
        "Loyalty program enrollment",
      ],
      savings: "Save 20%",
      validUntil: "Valid for new customers",
    },
    {
      id: 5,
      title: "Premium Luxury Set",
      description: "Our most exclusive designs with premium materials and crystals",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Exclusive",
      icon: Sparkles,
      features: [
        "Hand-applied Swarovski crystals",
        "24k gold leaf accents",
        "Custom storage box",
        "Personal design consultation",
        "Lifetime touch-up guarantee",
      ],
      savings: "Exclusive pricing",
      validUntil: "Limited availability",
    },
    {
      id: 6,
      title: "Corporate Events",
      description: "Professional nail art services for corporate events and team building",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Corporate",
      icon: Users,
      features: [
        "On-site nail art services",
        "Professional team of artists",
        "Corporate branding options",
        "Group activity packages",
        "Invoice and GST billing",
      ],
      savings: "Custom pricing",
      validUntil: "Book in advance",
    },
  ]

  const handleContactClick = (offer: Offer) => {
    setSelectedOffer(offer)
    setIsContactModalOpen(true)
  }

  return (
    <Layout currentPage="/products/offers">
      <div className="bg-gradient-to-b from-white to-[#f7d1d8]/20">
        <div className="py-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <Gift className="w-12 h-12 text-[#d87ca0]" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b2c3d] mb-4">
                Special Offers & Packages
              </h1>
              <p className="text-base md:text-lg text-[#3b2c3d]/70 max-w-2xl mx-auto px-4">
                Discover our exclusive packages and special offers designed to give you the best value for your glamour
                needs. Limited time deals and bulk order discounts available.
              </p>
            </div>

            {/* Offers Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {offers.map((offer) => (
                <Card
                  key={offer.id}
                  className="group hover:shadow-xl transition-all duration-300 border-[#d87ca0]/20 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={offer.image || "/placeholder.svg"}
                      alt={offer.title}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#d87ca0] text-white">{offer.badge}</Badge>
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-[#d87ca0]">{offer.savings}</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <offer.icon className="w-6 h-6 text-[#d87ca0] mr-2" />
                      <h3 className="text-xl font-semibold text-[#3b2c3d]">{offer.title}</h3>
                    </div>
                    <p className="text-[#3b2c3d]/70 mb-4">{offer.description}</p>

                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-[#3b2c3d] text-sm">What&apos;s Included:</h4>
                      <ul className="space-y-1">
                        {offer.features.map((feature, index) => (
                          <li key={index} className="text-sm text-[#3b2c3d]/70 flex items-center">
                            <div className="w-1.5 h-1.5 bg-[#d87ca0] rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-4 p-3 bg-[#f7d1d8]/20 rounded-lg">
                      <span className="text-sm font-semibold text-[#d87ca0]">{offer.savings}</span>
                      <span className="text-xs text-[#3b2c3d]/60">{offer.validUntil}</span>
                    </div>

                    <Button
                      className="w-full bg-[#d87ca0] hover:bg-[#c66b8f] text-white"
                      onClick={() => handleContactClick(offer)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Get This Offer
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Special Announcement */}
            <div className="bg-gradient-to-r from-[#d87ca0] to-[#c66b8f] text-white rounded-2xl p-8 text-center mb-12">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Limited Time: Free Pan-India Delivery!</h2>
              <p className="text-lg mb-6 opacity-90">
                On all orders above ₹2000. No minimum quantity required. Valid until end of this month.
              </p>
              <Button
                size="lg"
                className="bg-white text-[#d87ca0] hover:bg-gray-100"
                onClick={() => setIsContactModalOpen(true)}
              >
                Claim Free Delivery
              </Button>
            </div>

            {/* FAQ Section */}
            <div className="bg-[#f7d1d8]/10 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3b2c3d] text-center mb-8">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question: "How do bulk order discounts work?",
                    answer: "Orders of 10+ sets get 20% off, 20+ sets get 25% off, and 50+ sets get 30% off.",
                  },
                  {
                    question: "Can I mix different designs in bulk orders?",
                    answer: "Yes! You can choose different designs for each set in your bulk order.",
                  },
                  {
                    question: "What's included in the bridal package?",
                    answer: "Custom bride design, matching bridesmaid sets, touch-up kit, and dedicated support.",
                  },
                  {
                    question: "How long are these offers valid?",
                    answer: "Offer validity varies. Check each offer for specific terms and expiration dates.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg">
                    <h3 className="font-semibold text-[#3b2c3d] mb-2">{faq.question}</h3>
                    <p className="text-[#3b2c3d]/70 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-[#3b2c3d] mb-4">Ready to Save on Your Glamour?</h3>
              <p className="text-[#3b2c3d]/70 mb-6">
                Contact us today to discuss which offer works best for your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#d87ca0] hover:bg-[#c66b8f] text-white px-8"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Discuss Offers
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
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false)
          setSelectedOffer(null)
        }}
        selectedProduct={selectedOffer ? {
          id: selectedOffer.id,
          name: selectedOffer.title,
          image: selectedOffer.image,
          description: selectedOffer.description
        } : null}
      />
    </Layout>
  )
}
