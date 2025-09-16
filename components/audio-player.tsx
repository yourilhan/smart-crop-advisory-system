"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"

interface AudioPlayerProps {
  text: string
  className?: string
}

export function AudioPlayer({ text, className }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (isPlaying) {
      setIsPlaying(false)
      // Stop audio
      return
    }

    setIsPlaying(true)
    // Simulate audio playback for demo
    setTimeout(() => {
      setIsPlaying(false)
    }, 3000)
  }

  return (
    <Button
      onClick={handlePlay}
      variant="outline"
      size="sm"
      className={`glass-card hover:bg-white/20 transition-all duration-300 ${className}`}
    >
      {isPlaying ? <VolumeX className="w-4 h-4 mr-2" /> : <Volume2 className="w-4 h-4 mr-2" />}
      {isPlaying ? "Playing..." : "🔊 Listen"}
    </Button>
  )
}
