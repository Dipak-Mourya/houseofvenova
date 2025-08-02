"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Instagram, Heart, MessageCircle, Share, Play } from "lucide-react"
import Link from "next/link"

export default function SocialPage() {
  const socialPosts = [
    {
      id: 1,
      type: "image",
      image: "/placeholder.svg?height=400&width=400",
      caption:
        "✨ Royal Rose Collection - Because every queen deserves to shine! 👑 #HouseofVenova #NailArt #LuxuryNails",
      likes: 245,
      comments: 18,
      date: "2 days ago",
    },
    {
      id: 2,
      type: "video",
      image: "/placeholder.svg?height=400&width=400",
      caption: "Watch the magic happen! ✨ Our Diamond Elegance set coming to life 💎 #NailArtProcess #BehindTheScenes",
      likes: 389,
      comments: 32,
      date: "3 days ago",
    },
    {
      id: 3,
      type: "image",
      image: "/placeholder.svg?height=400&width=400",
      caption:
        "Customer love! 💕 @priya_sharma showing off her Blush Butterfly nails perfectly! Thank you for choosing us! 🦋",
      likes: 156,
      comments: 24,
      date: "5 days ago",
    },
    {
      id: 4,
      type: "video",
      image: "/placeholder.svg?height=400&width=400",
      caption: "Tutorial Tuesday! 📚 How to apply press-on nails like a pro. Save this post for later! 💅",
      likes: 512,
      comments: 67,
      date: "1 week ago",
    },
    {
      id: 5,
      type: "image",
      image: "/placeholder.svg?height=400&width=400",
      caption:
        "Bridal dreams come true! 👰✨ Our Bridal Bliss collection is perfect for your special day 💍 #BridalNails",
      likes: 298,
      comments: 41,
      date: "1 week ago",
    },
    {
      id: 6,
      type: "video",
      image: "/placeholder.svg?height=400&width=400",
      caption: "From sketch to reality! 🎨 The creative process behind our Golden Goddess design ✨ #DesignProcess",
      likes: 423,
      comments: 29,
      date: "1 week ago",
    },
    {
      id: 7,
      type: "image",
      image: "/placeholder.svg?height=400&width=400",
      caption:
        "Festival ready! 🪔 Our Diwali special collection brings the sparkle to your celebrations ✨ #DiwaliNails",
      likes: 367,
      comments: 52,
      date: "2 weeks ago",
    },
    {
      id: 8,
      type: "video",
      image: "/placeholder.svg?height=400&width=400",
      caption: "Transformation Tuesday! 🔄 From simple to stunning in minutes! Which look do you prefer? 💅",
      likes: 445,
      comments: 38,
      date: "2 weeks ago",
    },
    {
      id: 9,
      type: "image",
      image: "/placeholder.svg?height=400&width=400",
      caption: "Flat lay perfection! 📸 Our Pearl Princess collection styled with luxury accessories 💎 #FlatLay",
      likes: 189,
      comments: 15,
      date: "2 weeks ago",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      handle: "@priya_beauty",
      text: "Absolutely in love with my HouseofVenova nails! The quality is incredible and they last for weeks. Best investment ever! 💕",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Anita Desai",
      handle: "@anita_style",
      text: "Got so many compliments on my bridal nails! HouseofVenova made my wedding day even more special. Thank you! 👰✨",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Kavya Patel",
      handle: "@kavya_glam",
      text: "The custom design service is amazing! They brought my vision to life perfectly. Highly recommend! 🎨💅",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f7d1d8]/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-[#d87ca0]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Crown className="w-8 h-8 text-[#d87ca0]" />
              <span className="text-2xl font-bold text-[#3b2c3d]">HouseofVenova</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#3b2c3d] hover:text-[#d87ca0] transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-[#3b2c3d] hover:text-[#d87ca0] transition-colors">
                Products
              </Link>
              <Link href="/products/bestsellers" className="text-[#3b2c3d] hover:text-[#d87ca0] transition-colors">
                Best Sellers
              </Link>
              <Link href="/products/offers" className="text-[#3b2c3d] hover:text-[#d87ca0] transition-colors">
                Offers
              </Link>
              <Link href="/about" className="text-[#3b2c3d] hover:text-[#d87ca0] transition-colors">
                About
              </Link>
              <Link href="/blogs" className="text-[#3b2c3d] hover:text-[#d87ca0] transition-colors">
                Blogs
              </Link>
              <Link href="/social" className="text-[#d87ca0] font-semibold">
                Social
              </Link>
            </div>
            <Link href="/">
              <Button className="bg-[#d87ca0] hover:bg-[#c66b8f] text-white">Book Now</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Instagram className="w-12 h-12 text-[#d87ca0] mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-[#3b2c3d]">Social Gallery</h1>
              <Instagram className="w-12 h-12 text-[#d87ca0] ml-4" />
            </div>
            <p className="text-lg text-[#3b2c3d]/70 max-w-2xl mx-auto mb-8">
              Follow our journey on social media! Get inspired by our latest creations, behind-the-scenes moments, and
              happy customers showing off their gorgeous nails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://instagram.com/houseofvenova" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-[#d87ca0] to-[#c66b8f] text-white px-8">
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow on Instagram
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-[#d87ca0] text-[#d87ca0] hover:bg-[#d87ca0] hover:text-white px-8 bg-transparent"
              >
                <Share className="w-5 h-5 mr-2" />
                Share Our Page
              </Button>
            </div>
          </div>

          {/* Social Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-white rounded-lg p-6 shadow-sm border border-[#d87ca0]/20">
              <div className="text-3xl font-bold text-[#d87ca0] mb-2">15K+</div>
              <div className="text-[#3b2c3d]/70">Followers</div>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-sm border border-[#d87ca0]/20">
              <div className="text-3xl font-bold text-[#d87ca0] mb-2">500+</div>
              <div className="text-[#3b2c3d]/70">Posts</div>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-sm border border-[#d87ca0]/20">
              <div className="text-3xl font-bold text-[#d87ca0] mb-2">50K+</div>
              <div className="text-[#3b2c3d]/70">Likes</div>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-sm border border-[#d87ca0]/20">
              <div className="text-3xl font-bold text-[#d87ca0] mb-2">1K+</div>
              <div className="text-[#3b2c3d]/70">Comments</div>
            </div>
          </div>

          {/* Social Feed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {socialPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 border-[#d87ca0]/20 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt="Social media post"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.type === "video" && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-[#d87ca0] ml-1" />
                      </div>
                    </div>
                  )}
                  <Badge className="absolute top-4 left-4 bg-[#d87ca0] text-white capitalize">{post.type}</Badge>
                </div>
                <CardContent className="p-4">
                  <p className="text-[#3b2c3d] text-sm mb-4 line-clamp-3">{post.caption}</p>
                  <div className="flex items-center justify-between text-sm text-[#3b2c3d]/60">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1 text-red-500" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1 text-[#d87ca0]" />
                        {post.comments}
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Customer Testimonials */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#3b2c3d] mb-4">What Our Customers Say</h2>
              <p className="text-lg text-[#3b2c3d]/70 max-w-2xl mx-auto">
                Real reviews from real customers who love their HouseofVenova experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 border-[#d87ca0]/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold text-[#3b2c3d]">{testimonial.name}</div>
                        <div className="text-sm text-[#d87ca0]">{testimonial.handle}</div>
                      </div>
                    </div>
                    <p className="text-[#3b2c3d]/80 italic">{testimonial.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* User Generated Content */}
          <div className="bg-gradient-to-r from-[#f7d1d8]/30 to-white rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#3b2c3d] mb-4">Share Your HouseofVenova Moment</h2>
              <p className="text-lg text-[#3b2c3d]/70 max-w-2xl mx-auto">
                Tag us @houseofvenova and use #HouseofVenovaNails to be featured on our page! We love seeing how you
                style your gorgeous nails.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center bg-[#d87ca0]/10 px-6 py-3 rounded-full mb-6">
                <Instagram className="w-5 h-5 text-[#d87ca0] mr-2" />
                <span className="text-[#3b2c3d] font-semibold">#HouseofVenovaNails</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=200&query=customer nail art photo ${i}`}
                      alt={`Customer photo ${i}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#3b2c3d] mb-4">Ready to Create Your Own Moment?</h2>
            <p className="text-lg text-[#3b2c3d]/70 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made HouseofVenova their go-to choice for luxury nail art.
              Your perfect nails are just a click away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-[#d87ca0] hover:bg-[#c66b8f] text-white px-8">
                  <Crown className="w-5 h-5 mr-2" />
                  Shop Now
                </Button>
              </Link>
              <a href="https://instagram.com/houseofvenova" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#d87ca0] text-[#d87ca0] hover:bg-[#d87ca0] hover:text-white px-8 bg-transparent"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
