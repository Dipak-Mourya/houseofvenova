"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, X } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  selectedProduct?: {
    id: number
    name: string
    image: string
    description: string
  } | null
}

interface FormData {
  name: string
  phone: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  message?: string
}

export function ContactModal({ isOpen, onClose, selectedProduct }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      })
      setErrors({})
      setIsSubmitting(false)
    }
  }, [isOpen])

  // Set default message when product is selected
  useEffect(() => {
    if (selectedProduct && isOpen) {
      setFormData((prev) => ({
        ...prev,
        message: `Hi! I'm interested in the "${selectedProduct.name}" design. Please provide more details about availability and booking.`,
      }))
    }
  }, [selectedProduct, isOpen])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const composeMessage = () => {
    const productInfo = selectedProduct ? `Product: ${selectedProduct.name}\n` : ""
    return `Hi HouseofVenova!

${productInfo}Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message: ${formData.message}

Looking forward to hearing from you!`
  }

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return

    setIsSubmitting(true)
    const message = composeMessage()
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`

    setTimeout(() => {
      window.open(whatsappUrl, "_blank")
      setIsSubmitting(false)
      onClose()
    }, 500)
  }

  const handleEmailSubmit = () => {
    if (!validateForm()) return

    setIsSubmitting(true)
    const subject = selectedProduct ? `Inquiry about ${selectedProduct.name}` : "Nail Art Consultation Inquiry"
    const body = composeMessage()
    const mailtoUrl = `mailto:hello@houseofvenova.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setTimeout(() => {
      window.location.href = mailtoUrl
      setIsSubmitting(false)
      onClose()
    }, 500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white mx-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-[#3b2c3d] text-lg">
              {selectedProduct ? `Book ${selectedProduct.name}` : "Book Your Glamour Session"}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-6 w-6 p-0 text-[#3b2c3d] hover:text-[#d87ca0]"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {selectedProduct && (
            <div className="text-center mb-4 p-4 bg-[#f7d1d8]/20 rounded-lg">
              <img
                src={selectedProduct.image || "/placeholder.svg"}
                alt={selectedProduct.name}
                className="w-20 h-20 object-cover rounded-lg mx-auto mb-2"
              />
              <p className="text-sm text-[#3b2c3d]/70">{selectedProduct.description}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <Input
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`border-[#d87ca0]/30 focus:border-[#d87ca0] focus:ring-[#d87ca0]/20 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <Input
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={`border-[#d87ca0]/30 focus:border-[#d87ca0] focus:ring-[#d87ca0]/20 ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <Input
                placeholder="Email Address *"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`border-[#d87ca0]/30 focus:border-[#d87ca0] focus:ring-[#d87ca0]/20 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <Textarea
                placeholder="Your message or special requirements *"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={4}
                className={`border-[#d87ca0]/30 focus:border-[#d87ca0] focus:ring-[#d87ca0]/20 resize-none ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={handleWhatsAppSubmit}
              disabled={isSubmitting}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {isSubmitting ? "Sending..." : "WhatsApp"}
            </Button>
            <Button
              onClick={handleEmailSubmit}
              disabled={isSubmitting}
              variant="outline"
              className="flex-1 border-[#d87ca0] text-[#d87ca0] hover:bg-[#d87ca0] hover:text-white bg-transparent"
            >
              <Mail className="w-4 h-4 mr-2" />
              {isSubmitting ? "Sending..." : "Email"}
            </Button>
          </div>

          <p className="text-xs text-[#3b2c3d]/60 text-center">
            * All fields are required. We'll respond within 24 hours.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
