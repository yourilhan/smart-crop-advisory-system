"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { VoiceInput } from "@/components/voice-input"
import { MessageSquare, Star, Send, CheckCircle } from "lucide-react"

export default function FeedbackPage() {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const emojis = [
    { value: 1, emoji: "😡", label: "Very Poor" },
    { value: 2, emoji: "🙁", label: "Poor" },
    { value: 3, emoji: "😐", label: "Average" },
    { value: 4, emoji: "🙂", label: "Good" },
    { value: 5, emoji: "😃", label: "Excellent" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!rating) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1500)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setRating(0)
    setComment("")
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 py-12 px-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your feedback helps us improve our services for the farming community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleReset}
                variant="outline"
                className="glass border-white/30 hover:bg-white/20 bg-transparent"
              >
                Submit Another Feedback
              </Button>
              <Button
                onClick={() => (window.location.href = "/")}
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">Feedback</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Help us improve our Smart Crop Advisory System by sharing your experience
          </p>
        </div>

        {/* Feedback Form */}
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Rating */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">How would you rate our service?</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-2xl mx-auto">
                {emojis.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setRating(item.value)}
                    className={`flex flex-col items-center p-4 sm:p-6 rounded-xl transition-all duration-300 min-h-[100px] sm:min-h-[120px] ${
                      rating === item.value
                        ? "bg-white/30 border-2 border-teal-400 scale-105 sm:scale-110"
                        : "bg-white/10 border border-white/20 hover:bg-white/20 active:scale-95"
                    }`}
                  >
                    <span className="text-3xl sm:text-4xl mb-2">{item.emoji}</span>
                    <span className="text-xs sm:text-sm font-medium text-center">{item.label}</span>
                  </button>
                ))}
              </div>

              {rating > 0 && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{rating} out of 5 stars</p>
                </div>
              )}
            </div>

            {/* Comments */}
            <div className="space-y-3">
              <Label htmlFor="comment" className="text-lg font-semibold">
                Additional Comments (Optional)
              </Label>
              <div className="space-y-3 sm:space-y-0 sm:flex sm:gap-3">
                <Textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell us about your experience, suggestions for improvement, or any issues you encountered..."
                  className="glass border-white/30 min-h-[120px] flex-1"
                />
                <VoiceInput onTranscript={(text) => setComment(text)} className="sm:self-start sm:mt-2" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !rating}
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-12 py-4 text-lg rounded-xl shadow-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                {isLoading ? "Sending..." : "Send Feedback"}
              </Button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Your feedback is valuable to us and helps improve our services for farmers across India.
          </p>
        </div>
      </div>
    </div>
  )
}
