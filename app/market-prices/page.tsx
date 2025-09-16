"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { VoiceInput } from "@/components/voice-input"
import { AudioPlayer } from "@/components/audio-player"
import { TrendingUp, TrendingDown, MapPin, Search } from "lucide-react"

interface MarketPrice {
  crop: string
  variety: string
  market: string
  price: number
  unit: string
  change: number
  trend: "up" | "down" | "stable"
  lastUpdated: string
}

export default function MarketPricesPage() {
  const [selectedCrop, setSelectedCrop] = useState("")
  const [location, setLocation] = useState("")
  const [prices, setPrices] = useState<MarketPrice[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const crops = [
    "Wheat",
    "Rice",
    "Cotton",
    "Sugarcane",
    "Maize",
    "Bajra",
    "Jowar",
    "Mustard",
    "Groundnut",
    "Soybean",
    "Onion",
    "Potato",
    "Tomato",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedCrop || !location) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setPrices([
        {
          crop: selectedCrop,
          variety: "Common",
          market: `${location} Mandi`,
          price: 2850,
          unit: "per quintal",
          change: 5.2,
          trend: "up",
          lastUpdated: "2 hours ago",
        },
        {
          crop: selectedCrop,
          variety: "Premium",
          market: `${location} Wholesale`,
          price: 3100,
          unit: "per quintal",
          change: 3.8,
          trend: "up",
          lastUpdated: "1 hour ago",
        },
        {
          crop: selectedCrop,
          variety: "Grade A",
          market: "Regional Market",
          price: 2750,
          unit: "per quintal",
          change: -1.2,
          trend: "down",
          lastUpdated: "3 hours ago",
        },
        {
          crop: selectedCrop,
          variety: "Organic",
          market: "Specialty Market",
          price: 3500,
          unit: "per quintal",
          change: 8.5,
          trend: "up",
          lastUpdated: "4 hours ago",
        },
      ])
      setIsLoading(false)
    }, 2000)
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-600" />
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded-full" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600 bg-green-50"
      case "down":
        return "text-red-600 bg-red-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const pricesSummary =
    prices.length > 0
      ? `Market prices for ${selectedCrop} in ${location}: ${prices.map((p) => `${p.variety} variety at ${p.price} rupees ${p.unit}`).join(", ")}`
      : ""

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">Market Prices</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get real-time market prices for your crops to make informed selling decisions
          </p>
        </div>

        {/* Search Form */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Crop Selection */}
              <div className="space-y-3">
                <Label htmlFor="crop" className="text-lg font-semibold">
                  Select Crop
                </Label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                    <SelectTrigger className="glass border-white/30 flex-1">
                      <SelectValue placeholder="Choose a crop" />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-white/30">
                      {crops.map((crop) => (
                        <SelectItem key={crop} value={crop}>
                          {crop}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <VoiceInput onTranscript={(text) => setSelectedCrop(text)} />
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
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter market location"
                      className="glass border-white/30 pl-10"
                    />
                  </div>
                  <VoiceInput onTranscript={(text) => setLocation(text)} />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !selectedCrop || !location}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 sm:px-12 py-4 text-lg rounded-xl shadow-lg w-full sm:w-auto"
              >
                <Search className="w-5 h-5 mr-2" />
                {isLoading ? "Loading..." : "Check Prices"}
              </Button>
            </div>
          </form>
        </div>

        {/* Price Results */}
        {prices.length > 0 && (
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold">Current Market Prices</h2>
              <AudioPlayer text={pricesSummary} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
              {prices.map((price, index) => (
                <div key={index} className="glass-card rounded-xl p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold truncate">{price.crop}</h3>
                      <p className="text-sm text-muted-foreground truncate">
                        {price.variety} • {price.market}
                      </p>
                    </div>
                    <div
                      className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2 ${getTrendColor(price.trend)}`}
                    >
                      {getTrendIcon(price.trend)}
                      {price.change > 0 ? "+" : ""}
                      {price.change}%
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-xl sm:text-2xl font-bold">₹{price.price.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{price.unit}</p>
                  </div>

                  <p className="text-xs text-muted-foreground">Last updated: {price.lastUpdated}</p>
                </div>
              ))}
            </div>

            {/* Market Insights */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="text-lg font-semibold mb-2 text-blue-900">Market Insights</h3>
              <p className="text-sm sm:text-base text-blue-800">
                {selectedCrop} prices are showing an upward trend in {location}. Consider selling premium varieties for
                better returns. Organic produce commands a 25-30% premium in specialty markets.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
