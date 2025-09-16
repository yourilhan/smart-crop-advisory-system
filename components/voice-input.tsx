"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mic, MicOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface VoiceInputProps {
  onTranscript?: (text: string) => void
  className?: string
}

export function VoiceInput({ onTranscript, className }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false)

  const handleVoiceInput = () => {
    if (isListening) {
      setIsListening(false)
      // Stop voice recognition
      return
    }

    setIsListening(true)
    // Simulate voice input for demo
    setTimeout(() => {
      setIsListening(false)
      onTranscript?.("Voice input detected")
    }, 2000)
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleVoiceInput}
      className={cn(
        "glass-card hover:bg-white/20 transition-all duration-300 rounded-full p-2",
        isListening && "bg-red-500/20 border-red-400/50",
        className,
      )}
    >
      {isListening ? <MicOff className="w-4 h-4 text-red-500" /> : <Mic className="w-4 h-4" />}
    </Button>
  )
}
