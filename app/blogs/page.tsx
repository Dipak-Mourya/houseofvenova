"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, User, ArrowRight, Heart, Sparkles, X } from "lucide-react"
import Image from "next/image"
import { Layout } from "@/components/layout"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  author: string
  readTime: string
}

export default function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false)

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "10 Essential Nail Care Tips for Healthy, Beautiful Nails",
      excerpt:
        "Discover the secrets to maintaining healthy nails that serve as the perfect canvas for stunning nail art. From proper hydration to cuticle care...",
      content: `
        <div class="prose max-w-none">
          <p>Having healthy, beautiful nails is the foundation of any stunning nail art. Whether you're planning to get press-on nails or want to maintain your natural nails, these essential tips will help you achieve the perfect canvas for your nail art dreams.</p>
          
          <h3>1. Keep Your Nails Clean and Dry</h3>
          <p>The first step to healthy nails is maintaining proper hygiene. Clean your nails regularly with a soft brush and mild soap. Make sure to dry them thoroughly, especially after washing dishes or swimming, as prolonged moisture exposure can lead to fungal infections.</p>
          
          <h3>2. Moisturize Your Cuticles Daily</h3>
          <p>Your cuticles need love too! Apply cuticle oil or a rich hand cream daily to keep them soft and prevent painful hangnails. Healthy cuticles create a clean, professional look that enhances any nail design.</p>
          
          <h3>3. File in One Direction</h3>
          <p>Always file your nails in one direction, from the outer edge toward the center. This prevents splitting and creates a smoother edge. Use a fine-grit file for the best results.</p>
          
          <h3>4. Don't Use Your Nails as Tools</h3>
          <p>Resist the urge to use your nails to open cans, scrape off stickers, or perform other tasks. This can cause chips, breaks, and weaken your nail structure.</p>
          
          <h3>5. Wear Gloves When Cleaning</h3>
          <p>Harsh chemicals in cleaning products can damage your nails and cuticles. Always wear rubber gloves when cleaning or doing dishes to protect your hands and nails.</p>
          
          <p>Following these simple tips will ensure your nails are always ready for your next HouseofVenova press-on nail application!</p>
        </div>
      `,
      image: "/placeholder.svg?height=300&width=400",
      category: "Nail Care",
      date: "December 15, 2024",
      author: "Priya",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Bridal Nail Art Trends 2024: What's Hot This Wedding Season",
      excerpt:
        "From classic French tips with a twist to intricate henna-inspired designs, explore the most popular bridal nail art trends that are making waves...",
      content: `
        <div class="prose max-w-none">
          <p>Wedding season is upon us, and what better way to celebrate than with stunning bridal nail art? This year, the trends are all about elegance, sophistication, and a touch of personal flair. Let's dive into the hottest bridal nail art trends of 2024.</p>
          
          <h3>1. Classic French Tips with a Twist</h3>
          <p>The classic French manicure is getting a modern makeover. Instead of the traditional white tip, brides are opting for subtle variations like rose gold, champagne, or even a delicate glitter gradient. This adds a touch of glamour while maintaining the timeless elegance of the French tip.</p>
          
          <h3>2. Intricate Henna-Inspired Designs</h3>
          <p>For brides looking to incorporate cultural elements into their wedding look, henna-inspired nail art is a beautiful choice. These intricate designs can be created with fine brushes or stencils, using white or metallic polishes for a stunning effect.</p>
          
          <h3>3. Floral Accents</h3>
          <p>Floral nail art is always a popular choice for weddings, and this year is no exception. Delicate floral accents can be painted directly onto the nails or created with nail stickers or decals. Soft pastel colors like blush pink, lavender, and baby blue are perfect for a romantic bridal look.</p>
          
          <h3>4. Embellishments and Crystals</h3>
          <p>Add some sparkle to your bridal nails with embellishments and crystals. Tiny rhinestones, pearls, or even micro-beads can be used to create eye-catching designs. Consider adding a single crystal to each nail for a subtle touch of glamour, or go all out with a fully embellished accent nail.</p>
          
          <h3>5. Minimalist Nail Art</h3>
          <p>For the modern bride who prefers a more understated look, minimalist nail art is the way to go. Simple geometric designs, delicate lines, or even a single dot of color can create a chic and sophisticated effect. Nude or neutral polishes are the perfect base for minimalist nail art.</p>
          
          <p>No matter what your personal style, there's a bridal nail art trend that's perfect for you. Get inspired and create a wedding day look that's as unique and beautiful as you are!</p>
        </div>
      `,
      image: "/placeholder.svg?height=300&width=400",
      category: "Trends",
      date: "December 10, 2024",
      author: "Ananya",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "The Art of Press-On Nails: Why They're Taking Over",
      excerpt:
        "Press-on nails have evolved from a quick fix to a luxury beauty statement. Learn why celebrities and beauty enthusiasts are choosing press-ons...",
      content: `
        <div class="prose max-w-none">
          <p>Press-on nails have come a long way from being a last-minute fix. Today, they're a luxury beauty statement embraced by celebrities and beauty enthusiasts alike. Let's explore why press-on nails are taking over the beauty world.</p>
          
          <h3>1. Convenience and Speed</h3>
          <p>One of the biggest advantages of press-on nails is their convenience. Applying them takes just minutes, making them perfect for busy individuals who want a quick and easy way to elevate their look. No more spending hours at the salon – with press-ons, you can achieve salon-quality nails in the comfort of your own home.</p>
          
          <h3>2. Cost-Effectiveness</h3>
          <p>Compared to regular salon visits, press-on nails are incredibly cost-effective. A set of high-quality press-ons can cost a fraction of what you'd pay for a professional manicure, and you can reuse them multiple times with proper care.</p>
          
          <h3>3. Variety of Designs</h3>
          <p>Press-on nails offer an endless variety of designs, from classic French tips to bold and trendy patterns. Whether you're looking for a subtle everyday look or a statement-making design for a special occasion, you're sure to find press-ons that suit your style.</p>
          
          <h3>4. Damage-Free</h3>
          <p>Unlike acrylics or gel nails, press-ons don't require harsh chemicals or filing, which means they won't damage your natural nails. This makes them a great option for people who want to avoid the potential damage associated with other types of nail enhancements.</p>
          
          <h3>5. Reusability</h3>
          <p>With proper care, press-on nails can be reused multiple times. Simply remove them carefully, clean them with alcohol, and store them in a safe place. This makes them a sustainable and eco-friendly option compared to disposable nail enhancements.</p>
          
          <p>From their convenience and cost-effectiveness to their variety of designs and damage-free application, it's no wonder press-on nails are taking over the beauty world. Try them out and experience the magic for yourself!</p>
        </div>
      `,
      image: "/placeholder.svg?height=300&width=400",
      category: "Education",
      date: "December 5, 2024",
      author: "Priya",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Festival Nail Art: Celebrating Indian Traditions",
      excerpt:
        "Dive into the rich world of festival-inspired nail art. From Diwali gold to Holi colors, discover how to incorporate traditional elements...",
      content: `
        <div class="prose max-w-none">
          <p>India is a land of vibrant festivals, each with its own unique traditions and colors. What better way to celebrate these festivals than with stunning nail art inspired by Indian traditions? Let's explore some festive nail art ideas that capture the essence of India's rich culture.</p>
          
          <h3>1. Diwali Gold</h3>
          <p>Diwali, the festival of lights, is all about shimmer and shine. Gold nail polish is a must-have for Diwali nail art. You can create intricate designs with gold glitter, foil, or even paint traditional motifs like diyas (lamps) and rangoli patterns.</p>
          
          <h3>2. Holi Colors</h3>
          <p>Holi, the festival of colors, is a celebration of joy and happiness. Capture the spirit of Holi with vibrant and playful nail art. Use a variety of bright colors like pink, blue, green, and yellow to create a colorful splatter effect or paint each nail a different color.</p>
          
          <h3>3. Mehndi Designs</h3>
          <p>Mehndi, or henna, is an integral part of Indian weddings and festivals. Recreate the intricate patterns of mehndi on your nails with fine brushes or stencils. Use dark brown or black nail polish for an authentic look.</p>
          
          <h3>4. Traditional Motifs</h3>
          <p>Incorporate traditional Indian motifs like paisleys, peacocks, and lotus flowers into your nail art. These motifs can be painted with fine brushes or created with nail stickers or decals. Use metallic colors like gold and silver for a touch of glamour.</p>
          
          <h3>5. Bollywood Glam</h3>
          <p>Bollywood is a major influence on Indian fashion and beauty. Get inspired by Bollywood glam and create nail art that's bold, sparkly, and over-the-top. Use glitter, rhinestones, and vibrant colors to create a show-stopping look.</p>
          
          <p>From Diwali gold to Holi colors, there are endless possibilities for festival-inspired nail art. Get creative and celebrate Indian traditions with stunning nail designs!</p>
        </div>
      `,
      image: "/placeholder.svg?height=300&width=400",
      category: "Cultural",
      date: "November 28, 2024",
      author: "Ananya",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "DIY Nail Art: Simple Techniques for Stunning Results",
      excerpt:
        "Master the basics of nail art with these easy-to-follow techniques. Perfect for beginners who want to create beautiful designs at home...",
      content: `
        <div class="prose max-w-none">
          <p>Nail art doesn't have to be complicated or expensive. With a few simple techniques and tools, you can create stunning nail designs at home. Let's explore some easy DIY nail art techniques that are perfect for beginners.</p>
          
          <h3>1. Polka Dots</h3>
          <p>Polka dots are a classic and easy nail art design. Simply use a dotting tool or the end of a bobby pin to create dots on your nails. You can use different colors and sizes of dots for a fun and playful look.</p>
          
          <h3>2. Stripes</h3>
          <p>Stripes are another easy nail art design that can be created with striping tape or a thin brush. You can create vertical, horizontal, or diagonal stripes in different colors for a bold and graphic look.</p>
          
          <h3>3. Gradient Nails</h3>
          <p>Gradient nails are a beautiful and trendy nail art design that can be created with a sponge. Simply apply different colors of nail polish to a sponge and dab it onto your nails to create a gradient effect.</p>
          
          <h3>4. Marble Nails</h3>
          <p>Marble nails are a unique and eye-catching nail art design that can be created with water. Simply drop different colors of nail polish into a cup of water and swirl them together with a toothpick. Then, dip your nails into the water to transfer the marble design.</p>
          
          <h3>5. Stamping</h3>
          <p>Stamping is a quick and easy way to create intricate nail art designs. Simply apply nail polish to a stamping plate, scrape off the excess with a scraper, and transfer the design to your nails with a stamper.</p>
          
          <p>With these simple DIY nail art techniques, you can create stunning nail designs at home without breaking the bank. Get creative and experiment with different colors and designs to find your signature nail art style!</p>
        </div>
      `,
      image: "/placeholder.svg?height=300&width=400",
      category: "Tutorial",
      date: "November 20, 2024",
      author: "Priya",
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "Color Psychology in Nail Art: What Your Nails Say About You",
      excerpt:
        "Explore the fascinating world of color psychology and how your nail color choices reflect your personality, mood, and style preferences...",
      content: `
        <div class="prose max-w-none">
          <p>Did you know that your nail color choices can reveal a lot about your personality, mood, and style preferences? Color psychology is the study of how colors affect human behavior, and it can be applied to nail art to understand the messages you're sending with your manicure. Let's explore the fascinating world of color psychology in nail art.</p>
          
          <h3>1. Red</h3>
          <p>Red is a bold and passionate color that represents energy, excitement, and confidence. If you're wearing red nail polish, you're likely outgoing, adventurous, and not afraid to make a statement.</p>
          
          <h3>2. Blue</h3>
          <p>Blue is a calming and serene color that represents peace, tranquility, and stability. If you're wearing blue nail polish, you're likely calm, collected, and trustworthy.</p>
          
          <h3>3. Yellow</h3>
          <p>Yellow is a cheerful and optimistic color that represents happiness, creativity, and intelligence. If you're wearing yellow nail polish, you're likely energetic, playful, and full of ideas.</p>
          
          <h3>4. Green</h3>
          <p>Green is a natural and refreshing color that represents growth, harmony, and balance. If you're wearing green nail polish, you're likely down-to-earth, compassionate, and environmentally conscious.</p>
          
          <h3>5. Pink</h3>
          <p>Pink is a feminine and romantic color that represents love, kindness, and compassion. If you're wearing pink nail polish, you're likely sweet, gentle, and nurturing.</p>
          
          <p>From red to pink, your nail color choices can reveal a lot about your personality and mood. Pay attention to the colors you're drawn to and consider the messages you're sending with your manicure!</p>
        </div>
      `,
      image: "/placeholder.svg?height=300&width=400",
      category: "Psychology",
      date: "November 15, 2024",
      author: "Ananya",
      readTime: "6 min read",
    },
    {
      id: 7,
      title: "Seasonal Nail Art: Transitioning Your Look Through the Year",
      excerpt:
        "Learn how to adapt your nail art to match the seasons. From spring florals to winter metallics, discover the perfect looks for every time of year...",
      content: `
        <div class="prose max-w-none">
          <p>Just like your wardrobe, your nail art can be adapted to match the changing seasons. From spring florals to winter metallics, let's explore the perfect nail art looks for every time of year.</p>
          
          <h3>1. Spring Florals</h3>
          <p>Spring is the season of blooming flowers, so why not incorporate floral designs into your nail art? Use pastel colors like pink, lavender, and baby blue to create delicate floral patterns on your nails. You can paint the flowers with fine brushes or use nail stickers or decals.</p>
          
          <h3>2. Summer Brights</h3>
          <p>Summer is the season of sunshine and bright colors, so go bold with your nail art! Use vibrant colors like yellow, orange, and turquoise to create fun and playful designs on your nails. You can try geometric patterns, tropical motifs, or even a simple coat of bright nail polish.</p>
          
          <h3>3. Autumn Hues</h3>
          <p>Autumn is the season of warm and earthy tones, so incorporate these colors into your nail art. Use shades like burgundy, olive green, and mustard yellow to create cozy and sophisticated designs on your nails. You can try leaf patterns, plaid designs, or even a simple coat of matte nail polish.</p>
          
          <h3>4. Winter Metallics</h3>
          <p>Winter is the season of sparkle and shine, so go metallic with your nail art! Use shades like gold, silver, and bronze to create glamorous and festive designs on your nails. You can try glitter accents, foil designs, or even a simple coat of metallic nail polish.</p>
          
          <p>From spring florals to winter metallics, there are endless possibilities for seasonal nail art. Get inspired by the changing seasons and create nail art looks that are perfect for every time of year!</p>
        </div>
      `,
      image: "/placeholder.svg?height=300&width=400",
      category: "Seasonal",
      date: "November 8, 2024",
      author: "Priya",
      readTime: "7 min read",
    },
    {
      id: 8,
      title: "The Business of Beauty: Starting Your Own Nail Art Brand",
      excerpt:
        "Thinking of starting your own nail art business? Get insights from our founders on building a successful beauty brand from the ground up...",
      content: `
        <div class="prose max-w-none">
          <p>Are you passionate about nail art and dream of starting your own beauty brand? Our founders share their insights on building a successful nail art business from the ground up.</p>
          
          <h3>1. Define Your Brand</h3>
          <p>The first step in starting any business is to define your brand. What makes your nail art brand unique? What are your values? Who is your target audience? Answer these questions to create a strong brand identity that will resonate with your customers.</p>
          
          <h3>2. Create a Business Plan</h3>
          <p>A business plan is essential for any startup. It outlines your business goals, strategies, and financial projections. Use your business plan to secure funding, attract investors, and stay on track as you grow your business.</p>
          
          <h3>3. Build an Online Presence</h3>
          <p>In today's digital age, an online presence is crucial for any business. Create a website and social media accounts to showcase your nail art designs, connect with your customers, and build your brand. Use high-quality photos and videos to capture the attention of your audience.</p>
          
          <h3>4. Network with Influencers</h3>
          <p>Influencer marketing can be a powerful tool for promoting your nail art brand. Reach out to beauty influencers and offer them free products or services in exchange for reviews and promotions. This can help you reach a wider audience and build credibility for your brand.</p>
          
          <h3>5. Provide Excellent Customer Service</h3>
          <p>Customer service is key to building a loyal customer base. Respond to customer inquiries promptly, address any concerns or complaints, and go above and beyond to exceed customer expectations. Happy customers are more likely to become repeat customers and recommend your brand to others.</p>
          
          <p>From defining your brand to providing excellent customer service, there are many factors to consider when starting your own nail art business. Follow these tips to build a successful beauty brand from the ground up!</p>
        </div>
      `,
      image: "/placeholder.svg?height=300&width=400",
      category: "Business",
      date: "October 30, 2024",
      author: "Priya & Ananya",
      readTime: "12 min read",
    },
    {
      id: 9,
      title: "Nail Art for Special Occasions: Making Every Moment Memorable",
      excerpt:
        "From birthdays to anniversaries, learn how to choose the perfect nail art for life's special moments. Make every celebration more glamorous...",
      content: `
        <div class="prose max-w-none">
          <p>Life is full of special moments, and what better way to celebrate them than with stunning nail art? From birthdays to anniversaries, let's explore how to choose the perfect nail art for life's special occasions.</p>
          
          <h3>1. Birthdays</h3>
          <p>Birthdays are a time to celebrate and have fun, so go bold with your nail art! Use bright colors, glitter, and playful designs to create a festive look. You can try balloon patterns, confetti designs, or even a simple coat of sparkly nail polish.</p>
          
          <h3>2. Anniversaries</h3>
          <p>Anniversaries are a time to celebrate love and commitment, so go romantic with your nail art! Use soft colors like pink, lavender, and gold to create elegant and sophisticated designs. You can try floral patterns, heart designs, or even a simple coat of shimmery nail polish.</p>
          
          <h3>3. Holidays</h3>
          <p>Holidays are a time to celebrate traditions and customs, so incorporate these elements into your nail art! Use holiday-themed colors and designs to create festive looks. You can try Christmas tree patterns, Halloween ghost designs, or even a simple coat of holiday-themed nail polish.</p>
          
          <h3>4. Weddings</h3>
          <p>Weddings are a time to celebrate love and new beginnings, so go elegant and sophisticated with your nail art! Use soft colors like white, ivory, and silver to create timeless and classic designs. You can try French tips, lace patterns, or even a simple coat of nude nail polish.</p>
          
          <h3>5. Graduations</h3>
          <p>Graduations are a time to celebrate achievements and accomplishments, so go proud and confident with your nail art! Use school colors and graduation-themed designs to create a celebratory look. You can try graduation cap patterns, diploma designs, or even a simple coat of school-spirited nail polish.</p>
          
          <p>From birthdays to anniversaries, there are endless possibilities for nail art for special occasions. Get inspired and make every moment memorable with stunning nail designs!</p>
        </div>
      `,
      image: "/placeholder.svg?height=300&width=400",
      category: "Occasions",
      date: "October 25, 2024",
      author: "Ananya",
      readTime: "5 min read",
    },
  ]

  const handleReadMore = (blog: BlogPost) => {
    setSelectedBlog(blog)
    setIsBlogModalOpen(true)
  }

  const BlogModal = () => (
    <Dialog open={isBlogModalOpen} onOpenChange={setIsBlogModalOpen}>
      <DialogContent className="w-[95vw] max-w-4xl mx-auto bg-white max-h-[90vh] overflow-y-auto">
        {selectedBlog && (
          <>
            <DialogHeader className="sticky top-0 bg-white z-10 pb-4 border-b">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <Badge variant="outline" className="border-[#d87ca0] text-[#d87ca0] mb-2">
                    {selectedBlog.category}
                  </Badge>
                  <DialogTitle className="text-xl md:text-2xl text-[#3b2c3d] text-left leading-tight">
                    {selectedBlog.title}
                  </DialogTitle>
                  <div className="flex items-center space-x-4 text-sm text-[#3b2c3d]/60 mt-2">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {selectedBlog.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {selectedBlog.date}
                    </div>
                    <span>{selectedBlog.readTime}</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsBlogModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-[#3b2c3d]" />
                </button>
              </div>
            </DialogHeader>

            <div className="mt-6">
              <Image
                src={selectedBlog.image || "/placeholder.svg"}
                alt={selectedBlog.title}
                width={800}
                height={400}
                className="w-full h-48 md:h-64 object-cover rounded-lg mb-6"
              />

              <div
                className="prose prose-lg max-w-none text-[#3b2c3d] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />

              <div className="mt-8 pt-6 border-t border-[#d87ca0]/20">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-[#3b2c3d] font-semibold">Enjoyed this article?</p>
                    <p className="text-[#3b2c3d]/70 text-sm">Share it with your friends!</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#d87ca0] text-[#d87ca0] hover:bg-[#d87ca0] hover:text-white bg-transparent"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Like
                    </Button>
                    <Button size="sm" className="bg-[#d87ca0] hover:bg-[#c66b8f] text-white">
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )

  return (
    <Layout currentPage="/blogs">
      <div className="bg-gradient-to-b from-white to-[#f7d1d8]/20">
        <div className="py-16">
          <div className="container mx-auto px-4">
            {/* Header - Mobile Responsive */}
            <div className="text-center mb-12 md:mb-16">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-[#d87ca0] mr-3 md:mr-4" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b2c3d]">Beauty Blog</h1>
                <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-[#d87ca0] ml-3 md:ml-4" />
              </div>
              <p className="text-base md:text-lg text-[#3b2c3d]/70 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
                Discover the latest trends, tips, and insights from the world of nail art. Our experts share their
                knowledge to help you achieve stunning results.
              </p>
            </div>

            {/* Blog Grid - Mobile Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 border-[#d87ca0]/20 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-[#d87ca0] text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-[#3b2c3d] mb-3 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-[#3b2c3d]/70 mb-4 text-sm line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3 text-xs text-[#3b2c3d]/60">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date.split(",")[0]}
                        </div>
                      </div>
                      <span className="text-xs text-[#d87ca0] font-medium">{post.readTime}</span>
                    </div>
                    <Button
                      onClick={() => handleReadMore(post)}
                      variant="outline"
                      className="w-full border-[#d87ca0] text-[#d87ca0] hover:bg-[#d87ca0] hover:text-white bg-transparent text-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <BlogModal />
      </div>
    </Layout>
  )
}
