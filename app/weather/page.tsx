"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { VoiceInput } from "@/components/voice-input"
import { AudioPlayer } from "@/components/audio-player"
import { CloudRain, Sun, Cloud, AlertTriangle, MapPin, Locate } from "lucide-react"

interface WeatherData {
  location: string
  current: {
    temp: number
    condition: string
    icon: string
    humidity: number
    windSpeed: number
  }
  forecast: Array<{
    day: string
    high: number
    low: number
    condition: string
    icon: string
    precipitation: number
  }>
  alerts: Array<{
    type: string
    message: string
    severity: "low" | "medium" | "high"
  }>
}

export default function WeatherPage() {
  const [location, setLocation] = useState("")
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!location) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setWeatherData({
        location: location,
        current: {
          temp: 28,
          condition: "Partly Cloudy",
          icon: "partly-cloudy",
          humidity: 65,
          windSpeed: 12,
        },
        forecast: [
          { day: "Today", high: 32, low: 24, condition: "Sunny", icon: "sunny", precipitation: 0 },
          { day: "Tomorrow", high: 29, low: 22, condition: "Cloudy", icon: "cloudy", precipitation: 20 },
          { day: "Wed", high: 26, low: 20, condition: "Rainy", icon: "rainy", precipitation: 80 },
          { day: "Thu", high: 30, low: 23, condition: "Partly Cloudy", icon: "partly-cloudy", precipitation: 10 },
          { day: "Fri", high: 33, low: 25, condition: "Sunny", icon: "sunny", precipitation: 0 },
          { day: "Sat", high: 31, low: 24, condition: "Thunderstorm", icon: "thunderstorm", precipitation: 90 },
          { day: "Sun", high: 28, low: 21, condition: "Cloudy", icon: "cloudy", precipitation: 30 },
        ],
        alerts: [
          {
            type: "Heavy Rain Warning",
            message:
              "Heavy rainfall expected on Wednesday. Consider postponing field activities and ensure proper drainage.",
            severity: "high",
          },
          {
            type: "Pest Alert",
            message:
              "High humidity conditions may increase aphid activity. Monitor crops closely and consider preventive measures.",
            severity: "medium",
          },
        ],
      })
      setIsLoading(false)
    }, 2000)
  }

  const handleAutoDetect = () => {
    setLocation("Punjab, India")
  }

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return <Sun className="w-8 h-8 text-yellow-500" />
      case "cloudy":
        return <Cloud className="w-8 h-8 text-gray-500" />
      case "rainy":
        return <CloudRain className="w-8 h-8 text-blue-500" />
      case "partly-cloudy":
        return <Cloud className="w-8 h-8 text-gray-400" />
      case "thunderstorm":
        return <CloudRain className="w-8 h-8 text-purple-500" />
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "border-red-400 bg-red-50"
      case "medium":
        return "border-yellow-400 bg-yellow-50"
      case "low":
        return "border-green-400 bg-green-50"
      default:
        return "border-gray-400 bg-gray-50"
    }
  }

  const weatherSummary = weatherData
    ? `Current weather in ${weatherData.location}: ${weatherData.current.condition}, ${weatherData.current.temp}°C. ${weatherData.alerts.length > 0 ? "Weather alerts: " + weatherData.alerts.map((alert) => alert.message).join(" ") : "No weather alerts."}`
    : ""

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <CloudRain className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">Weather Insights for Farmers</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get real-time weather forecasts and agricultural alerts for your location
          </p>
        </div>

        {/* Location Input */}
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Enter your location (e.g., Punjab, India)"
                    className="glass border-white/30 pl-10"
                  />
                </div>
                <div className="flex gap-3">
                  <VoiceInput onTranscript={(text) => setLocation(text)} />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleAutoDetect}
                    className="glass border-white/30 hover:bg-white/20 bg-transparent whitespace-nowrap"
                  >
                    <Locate className="w-4 h-4 sm:mr-2" />
                    <span className="hidden sm:inline">Auto-detect</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !location}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-4 text-lg rounded-xl shadow-lg"
              >
                {isLoading ? "Loading..." : "Get Weather Forecast"}
              </Button>
            </div>
          </form>
        </div>

        {/* Weather Results */}
        {weatherData && (
          <div className="space-y-8">
            {/* Current Weather */}
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Current Weather</h2>
                <AudioPlayer text={weatherSummary} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  {getWeatherIcon(weatherData.current.condition)}
                  <p className="text-3xl font-bold mt-2">{weatherData.current.temp}°C</p>
                  <p className="text-muted-foreground">{weatherData.current.condition}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Humidity</p>
                  <p className="text-2xl font-semibold">{weatherData.current.humidity}%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Wind Speed</p>
                  <p className="text-2xl font-semibold">{weatherData.current.windSpeed} km/h</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-lg font-semibold">{weatherData.location}</p>
                </div>
              </div>
            </div>

            {/* 7-Day Forecast */}
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6">7-Day Forecast</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="glass-card rounded-xl p-4 text-center">
                    <p className="font-semibold mb-2">{day.day}</p>
                    {getWeatherIcon(day.condition)}
                    <p className="text-sm text-muted-foreground mt-2">{day.condition}</p>
                    <div className="mt-2">
                      <p className="font-semibold">{day.high}°</p>
                      <p className="text-sm text-muted-foreground">{day.low}°</p>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">{day.precipitation}% rain</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Weather Alerts */}
            {weatherData.alerts.length > 0 && (
              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                  Weather & Pest Alerts
                </h2>
                <div className="space-y-4">
                  {weatherData.alerts.map((alert, index) => (
                    <div key={index} className={`border-l-4 p-4 rounded-lg ${getSeverityColor(alert.severity)}`}>
                      <h3 className="font-semibold text-lg mb-2">{alert.type}</h3>
                      <p className="text-foreground">{alert.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
