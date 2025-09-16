"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { VoiceInput } from "@/components/voice-input"
import { AudioPlayer } from "@/components/audio-player"
import { Bug, Upload, Camera, AlertCircle, CheckCircle } from "lucide-react"

interface DetectionResult {
  pest: string
  confidence: number
  description: string
  treatment: string
  organicAlternatives: string[]
  severity: "low" | "medium" | "high"
}

export default function PestDetectionPage() {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [description, setDescription] = useState("")
  const [result, setResult] = useState<DetectionResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedImage(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!uploadedImage) return

    setIsLoading(true)

    // Simulate AI analysis
    setTimeout(() => {
      setResult({
        pest: "Aphids (Aphis gossypii)",
        confidence: 92,
        description:
          "Cotton aphids detected on leaf surfaces. These small, soft-bodied insects feed on plant sap and can cause yellowing, curling, and stunted growth.",
        treatment:
          "Apply neem oil spray (2-3ml per liter of water) during early morning or evening. Repeat every 7-10 days. For severe infestations, use insecticidal soap or introduce beneficial insects like ladybugs.",
        organicAlternatives: [
          "Neem oil spray (2-3ml/L water)",
          "Insecticidal soap solution",
          "Beneficial insects (ladybugs, lacewings)",
          "Garlic and chili pepper spray",
          "Reflective mulch to deter aphids",
        ],
        severity: "medium",
      })
      setIsLoading(false)
    }, 3000)
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200"
      case "medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200"
      case "low":
        return "text-green-600 bg-green-50 border-green-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <AlertCircle className="w-5 h-5" />
      case "medium":
        return <AlertCircle className="w-5 h-5" />
      case "low":
        return <CheckCircle className="w-5 h-5" />
      default:
        return <AlertCircle className="w-5 h-5" />
    }
  }

  const resultSummary = result
    ? `Pest detected: ${result.pest} with ${result.confidence}% confidence. ${result.description} Treatment: ${result.treatment}`
    : ""

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
              <Bug className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">Pest & Disease Detection</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Upload crop photos for instant AI-powered pest and disease identification
          </p>
        </div>

        {/* Upload Form */}
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Image Upload */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Upload Crop Photo</Label>
              <div className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center glass">
                {imagePreview ? (
                  <div className="space-y-4">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Uploaded crop"
                      className="max-w-full max-h-64 mx-auto rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground">{uploadedImage?.name}</p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setUploadedImage(null)
                        setImagePreview(null)
                      }}
                      className="glass border-white/30 hover:bg-white/20"
                    >
                      Change Image
                    </Button>
                  </div>
                ) : (
                  <>
                    <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-lg font-medium">Drop your crop photo here</p>
                      <p className="text-muted-foreground">or click to browse files</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload">
                        <Button
                          variant="outline"
                          className="glass border-white/30 hover:bg-white/20 mt-4 bg-transparent"
                          asChild
                        >
                          <span>
                            <Upload className="w-4 h-4 mr-2" />
                            Choose Photo
                          </span>
                        </Button>
                      </label>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Optional Description */}
            <div className="space-y-3">
              <Label htmlFor="description" className="text-lg font-semibold">
                Additional Description (Optional)
              </Label>
              <div className="flex gap-3">
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe any symptoms you've noticed (e.g., yellowing leaves, spots, wilting...)"
                  className="glass border-white/30 min-h-[100px]"
                />
                <VoiceInput onTranscript={(text) => setDescription(text)} className="self-start mt-2" />
              </div>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !uploadedImage}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-12 py-4 text-lg rounded-xl shadow-lg"
              >
                {isLoading ? "Analyzing..." : "Detect Problem"}
              </Button>
            </div>
          </form>
        </div>

        {/* Results */}
        {result && (
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Detection Results</h2>
              <AudioPlayer text={resultSummary} />
            </div>

            <div className="space-y-6">
              {/* Detection Summary */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/20">
                <div>
                  <h3 className="text-xl font-semibold">{result.pest}</h3>
                  <p className="text-muted-foreground">Confidence: {result.confidence}%</p>
                </div>
                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getSeverityColor(result.severity)}`}
                >
                  {getSeverityIcon(result.severity)}
                  <span className="font-medium capitalize">{result.severity} Severity</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-foreground leading-relaxed">{result.description}</p>
              </div>

              {/* Treatment */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Recommended Treatment</h3>
                <p className="text-foreground leading-relaxed">{result.treatment}</p>
              </div>

              {/* Organic Alternatives */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Organic Treatment Options</h3>
                <ul className="space-y-2">
                  {result.organicAlternatives.map((alternative, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{alternative}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
