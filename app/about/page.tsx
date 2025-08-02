"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, Heart, Star, MessageCircle, Users, Award, Sparkles } from "lucide-react"
import { Layout } from "@/components/layout"
import { ContactModal } from "@/components/contact-modal"
import Image from "next/image"

export default function AboutPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const values = [
    {
      icon: Heart,
      title: "Handcrafted with Love",
      description: "Every nail art piece is carefully crafted by hand with attention to the smallest details.",
    },
    {
      icon: Crown,
      title: "Excessive Glamour",
      description: "We believe in creating designs that make you feel like royalty with unmatched elegance.",
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Using only the finest materials and techniques to ensure long-lasting beauty.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction and happiness are at the heart of everything we do.",
    },
  ]

  const achievements = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Unique Designs" },
    { number: "28", label: "States Delivered" },
    { number: "2", label: "Passionate Founders" },
  ]

  return (
    <Layout currentPage="/about">
      <div className="bg-gradient-to-b from-white to-[#f7d1d8]/20">
        <div className="py-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <Crown className="w-16 h-16 text-[#d87ca0]" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b2c3d] mb-6">About HouseofVenova</h1>
              <p className="text-xl md:text-2xl text-[#d87ca0] font-medium mb-4">
                Excessive Glamour, Handcrafted with Love
              </p>
              <p className="text-lg text-[#3b2c3d]/70 max-w-3xl mx-auto">
                Founded by two passionate women who believe that every woman deserves to feel glamorous and confident.
                We create premium press-on nails that combine artistry, quality, and convenience.
              </p>
            </div>

            {/* Founders Story */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#3b2c3d] mb-6">Our Story</h2>
                  <div className="space-y-4 text-[#3b2c3d]/80">
                    <p>
                      HouseofVenova was born from a simple belief: every woman deserves to feel beautiful and confident.
                      As two friends who shared a passion for nail art and entrepreneurship, we noticed a gap in the
                      market for high-quality, handcrafted press-on nails in India.
                    </p>
                    <p>
                      What started as a hobby of creating nail art for friends and family quickly grew into something
                      bigger. We realized that many women wanted gorgeous nails but didn&apos;t have the time for salon
                      visits or the skills for DIY nail art. That&apos;s when we decided to create HouseofVenova.
                    </p>
                    <p>
                      Today, we&apos;re proud to serve customers across India, delivering &ldquo;excessive glamour&rdquo; right to their
                      doorstep. Each design is still handcrafted with the same love and attention to detail that we put
                      into our very first creations.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="HouseofVenova Founders"
                    width={500}
                    height={400}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-[#d87ca0] text-white p-4 rounded-xl shadow-lg">
                    <Sparkles className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#3b2c3d] mb-4">Our Values</h2>
                <p className="text-lg text-[#3b2c3d]/70">The principles that guide everything we do</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="text-center border-[#d87ca0]/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-[#f7d1d8]/30 rounded-full flex items-center justify-center">
                          <value.icon className="w-8 h-8 text-[#d87ca0]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-[#3b2c3d] mb-3">{value.title}</h3>
                      <p className="text-[#3b2c3d]/70 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-16 bg-gradient-to-r from-[#d87ca0] to-[#c66b8f] text-white rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey So Far</h2>
                <p className="text-lg opacity-90">Milestones that make us proud</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">{achievement.number}</div>
                    <div className="text-sm md:text-base opacity-90">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Our Mission"
                    width={500}
                    height={400}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                    <Award className="w-8 h-8 text-[#d87ca0]" />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#3b2c3d] mb-6">Our Mission</h2>
                  <div className="space-y-4 text-[#3b2c3d]/80">
                    <p>
                      To make premium nail art accessible to every woman in India. We believe that beauty should not be
                      limited by location, time constraints, or skill level.
                    </p>
                    <p>
                      Our mission is to empower women to express their personality and style through our handcrafted
                      nail art, delivered with convenience and care to their doorstep.
                    </p>
                    <p>
                      We&apos;re committed to using sustainable practices, supporting local artisans, and building a
                      community of confident, glamorous women across the country.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button
                      size="lg"
                      className="bg-[#d87ca0] hover:bg-[#c66b8f] text-white"
                      onClick={() => setIsContactModalOpen(true)}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Join Our Journey
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mb-16 bg-[#f7d1d8]/10 rounded-2xl p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#3b2c3d] mb-4">How We Create Magic</h2>
                <p className="text-lg text-[#3b2c3d]/70">Our meticulous process ensures every nail art is perfect</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Design & Conceptualize",
                    description: "We sketch and plan each design, considering trends, seasons, and customer feedback.",
                  },
                  {
                    step: "02",
                    title: "Handcraft with Love",
                    description: "Each nail is carefully crafted by hand using premium materials and techniques.",
                  },
                  {
                    step: "03",
                    title: "Quality Check & Deliver",
                    description: "Every set undergoes rigorous quality checks before being packaged and shipped.",
                  },
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-[#d87ca0] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold text-[#3b2c3d] mb-3">{process.title}</h3>
                    <p className="text-[#3b2c3d]/70">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3b2c3d] mb-4">Ready to Experience the Magic?</h2>
              <p className="text-lg text-[#3b2c3d]/70 mb-8 max-w-2xl mx-auto">
                Join thousands of happy customers who have discovered the joy of HouseofVenova nail art. Let us create
                something beautiful for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#d87ca0] hover:bg-[#c66b8f] text-white px-8"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#d87ca0] text-[#d87ca0] hover:bg-[#d87ca0] hover:text-white px-8 bg-transparent"
                  onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </Layout>
  )
}
