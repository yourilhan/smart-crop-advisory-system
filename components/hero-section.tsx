import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Leaf } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/indian-farmer-standing-in-green-field-at-sunrise-w.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-black/30 border border-white/20 rounded-3xl p-8 md:p-12 mx-auto max-w-3xl shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="h-12 w-12 text-green-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-balance text-white drop-shadow-lg">
              Smart Crop Advisory System
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-white/95 mb-8 text-pretty leading-relaxed drop-shadow-md">
            AI-powered, multilingual crop insights for farmers
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/crop-advisory">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg border-0"
              >
                Get Advisory
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-md bg-white/40 border-2 border-white/60 text-gray-900 hover:bg-white/50 hover:text-gray-800 px-8 py-4 text-lg rounded-xl shadow-lg font-semibold"
            >
              Explore Features
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/90 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
