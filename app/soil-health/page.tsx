"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VoiceInput } from "@/components/voice-input"
import { AudioPlayer } from "@/components/audio-player"
import { TestTube, Upload, Leaf } from "lucide-react"

export default function SoilHealthPage() {
  const [manualData, setManualData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
  })
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [recommendation, setRecommendation] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setRecommendation(
        `Based on your soil analysis (N: ${manualData.nitrogen}, P: ${manualData.phosphorus}, K: ${manualData.potassium}), we recommend applying organic compost at 2-3 tons per hectare. Consider adding rock phosphate for phosphorus deficiency and use neem cake as a natural fertilizer. Apply bio-fertilizers containing nitrogen-fixing bacteria for sustainable soil health improvement.`,
      )
      setIsLoading(false)
    }, 2000)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const handleUploadSubmit = async () => {
    if (!uploadedFile) return
    setIsLoading(true)

    setTimeout(() => {
      setRecommendation(
        `Your soil test report has been analyzed. The soil shows moderate fertility with good organic matter content. We recommend balanced NPK fertilizer application with emphasis on organic amendments. Consider crop rotation with legumes and regular addition of farmyard manure for long-term soil health.`,
      )
      setIsLoading(false)
    }, 2000)
  }

  const handleVoiceInput = (field: string, text: string) => {
    setManualData((prev) => ({ ...prev, [field]: text }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <TestTube className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">Soil Health & Fertilizer Guidance</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Analyze your soil composition and get personalized fertilizer recommendations
          </p>
        </div>

        {/* Form Tabs */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 mb-8">
          <Tabs defaultValue="manual" className="w-full">
            <TabsList className="grid w-full grid-cols-2 glass-card mb-6 sm:mb-8">
              <TabsTrigger value="manual" className="data-[state=active]:bg-white/20 text-sm sm:text-base">
                Manual Entry
              </TabsTrigger>
              <TabsTrigger value="upload" className="data-[state=active]:bg-white/20 text-sm sm:text-base">
                Upload Report
              </TabsTrigger>
            </TabsList>

            <TabsContent value="manual" className="mt-6 sm:mt-8">
              <form onSubmit={handleManualSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Nitrogen */}
                  <div className="space-y-3">
                    <Label htmlFor="nitrogen" className="text-lg font-semibold">
                      Nitrogen (N) %
                    </Label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        id="nitrogen"
                        type="number"
                        step="0.01"
                        value={manualData.nitrogen}
                        onChange={(e) => setManualData((prev) => ({ ...prev, nitrogen: e.target.value }))}
                        placeholder="0.00"
                        className="glass border-white/30 flex-1"
                      />
                      <VoiceInput onTranscript={(text) => handleVoiceInput("nitrogen", text)} />
                    </div>
                  </div>

                  {/* Phosphorus */}
                  <div className="space-y-3">
                    <Label htmlFor="phosphorus" className="text-lg font-semibold">
                      Phosphorus (P) %
                    </Label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        id="phosphorus"
                        type="number"
                        step="0.01"
                        value={manualData.phosphorus}
                        onChange={(e) => setManualData((prev) => ({ ...prev, phosphorus: e.target.value }))}
                        placeholder="0.00"
                        className="glass border-white/30 flex-1"
                      />
                      <VoiceInput onTranscript={(text) => handleVoiceInput("phosphorus", text)} />
                    </div>
                  </div>

                  {/* Potassium */}
                  <div className="space-y-3">
                    <Label htmlFor="potassium" className="text-lg font-semibold">
                      Potassium (K) %
                    </Label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        id="potassium"
                        type="number"
                        step="0.01"
                        value={manualData.potassium}
                        onChange={(e) => setManualData((prev) => ({ ...prev, potassium: e.target.value }))}
                        placeholder="0.00"
                        className="glass border-white/30 flex-1"
                      />
                      <VoiceInput onTranscript={(text) => handleVoiceInput("potassium", text)} />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading || !manualData.nitrogen || !manualData.phosphorus || !manualData.potassium}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 sm:px-12 py-4 text-lg rounded-xl shadow-lg w-full sm:w-auto"
                  >
                    {isLoading ? "Analyzing..." : "Check Soil Health"}
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="upload" className="mt-6 sm:mt-8">
              <div className="space-y-6 sm:space-y-8">
                {/* File Upload */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Upload Soil Test Report</Label>
                  <div className="border-2 border-dashed border-white/30 rounded-xl p-6 sm:p-8 text-center glass">
                    <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-base sm:text-lg font-medium">Drop your soil test report here</p>
                      <p className="text-sm sm:text-base text-muted-foreground">or click to browse files</p>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload">
                        <Button
                          variant="outline"
                          className="glass border-white/30 hover:bg-white/20 mt-4 bg-transparent"
                          asChild
                        >
                          <span>Choose File</span>
                        </Button>
                      </label>
                    </div>
                  </div>
                  {uploadedFile && (
                    <p className="text-sm text-muted-foreground text-center">Selected: {uploadedFile.name}</p>
                  )}
                </div>

                <div className="text-center">
                  <Button
                    onClick={handleUploadSubmit}
                    size="lg"
                    disabled={isLoading || !uploadedFile}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 sm:px-12 py-4 text-lg rounded-xl shadow-lg w-full sm:w-auto"
                  >
                    {isLoading ? "Analyzing..." : "Analyze Report"}
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Results */}
        {recommendation && (
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Leaf className="w-6 h-6 text-green-600" />
                Fertilizer Recommendation
              </h2>
              <AudioPlayer text={recommendation} />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">{recommendation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
