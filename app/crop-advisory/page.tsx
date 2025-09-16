"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { VoiceInput } from "@/components/voice-input"
import { AudioPlayer } from "@/components/audio-player"
import { Sprout, MapPin } from "lucide-react"

export default function CropAdvisoryPage() {
  const [formData, setFormData] = useState({
    soilType: "",
    cropHistory: "",
    desiredCrop: "",
    location: "",
  })
  const [advisory, setAdvisory] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setAdvisory(
        `Based on your ${formData.soilType} soil and location in ${formData.location}, we recommend planting ${formData.desiredCrop} during the optimal season. Consider crop rotation with legumes to improve soil nitrogen levels. Apply organic compost 2 weeks before planting and ensure proper drainage for best results.`,
      )
      setIsLoading(false)
    }, 2000)
  }

  const handleVoiceInput = (field: string, text: string) => {
    setFormData((prev) => ({ ...prev, [field]: text }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <Sprout className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">AI-Powered Crop Advisory</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get personalized crop recommendations based on your soil, climate, and farming history
          </p>
        </div>

        {/* Form */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Soil Type */}
              <div className="space-y-3">
                <Label htmlFor="soilType" className="text-lg font-semibold">
                  Soil Type
                </Label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Select
                    value={formData.soilType}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, soilType: value }))}
                  >
                    <SelectTrigger className="glass border-white/30 flex-1">
                      <SelectValue placeholder="Select soil type" />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-white/30">
                      <SelectItem value="clay">Clay Soil</SelectItem>
                      <SelectItem value="sandy">Sandy Soil</SelectItem>
                      <SelectItem value="loamy">Loamy Soil</SelectItem>
                      <SelectItem value="silt">Silt Soil</SelectItem>
                      <SelectItem value="peaty">Peaty Soil</SelectItem>
                    </SelectContent>
                  </Select>
                  <VoiceInput onTranscript={(text) => handleVoiceInput("soilType", text)} />
                </div>
              </div>

              {/* Crop History */}
              <div className="space-y-3">
                <Label htmlFor="cropHistory" className="text-lg font-semibold">
                  Previous Crop
                </Label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    id="cropHistory"
                    value={formData.cropHistory}
                    onChange={(e) => setFormData((prev) => ({ ...prev, cropHistory: e.target.value }))}
                    placeholder="e.g., Wheat, Rice, Cotton"
                    className="glass border-white/30 flex-1"
                  />
                  <VoiceInput onTranscript={(text) => handleVoiceInput("cropHistory", text)} />
                </div>
              </div>

              {/* Desired Crop */}
              <div className="space-y-3">
                <Label htmlFor="desiredCrop" className="text-lg font-semibold">
                  Desired Crop
                </Label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    id="desiredCrop"
                    value={formData.desiredCrop}
                    onChange={(e) => setFormData((prev) => ({ ...prev, desiredCrop: e.target.value }))}
                    placeholder="e.g., Tomato, Corn, Sugarcane"
                    className="glass border-white/30 flex-1"
                  />
                  <VoiceInput onTranscript={(text) => handleVoiceInput("desiredCrop", text)} />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-3">
                <Label htmlFor="location" className="text-lg font-semibold">
                  Location
                </Label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                      placeholder="e.g., Punjab, Haryana, UP"
                      className="glass border-white/30 pl-10"
                    />
                  </div>
                  <VoiceInput onTranscript={(text) => handleVoiceInput("location", text)} />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !formData.soilType || !formData.desiredCrop || !formData.location}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 sm:px-12 py-4 text-lg rounded-xl shadow-lg w-full sm:w-auto"
              >
                {isLoading ? "Analyzing..." : "Get Advisory"}
              </Button>
            </div>
          </form>
        </div>

        {/* Results */}
        {advisory && (
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold">Your Crop Advisory</h2>
              <AudioPlayer text={advisory} />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">{advisory}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
