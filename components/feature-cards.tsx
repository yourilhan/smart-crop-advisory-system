import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sprout, TestTube, CloudRain, Bug, TrendingUp, MessageSquare } from "lucide-react"

const features = [
  {
    icon: Sprout,
    title: "Crop Advisory",
    description:
      "Get AI-powered recommendations for crop selection, planting schedules, and farming techniques tailored to your soil and climate.",
    href: "/crop-advisory",
    gradient: "from-green-400 to-green-600",
  },
  {
    icon: TestTube,
    title: "Soil Health",
    description:
      "Analyze your soil composition and receive personalized fertilizer recommendations for optimal crop growth.",
    href: "/soil-health",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: CloudRain,
    title: "Weather Alerts",
    description:
      "Stay informed with real-time weather forecasts and alerts to protect your crops from adverse conditions.",
    href: "/weather",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: Bug,
    title: "Pest Detection",
    description: "Upload crop photos for instant pest and disease identification with treatment recommendations.",
    href: "/pest-detection",
    gradient: "from-red-400 to-red-600",
  },
  {
    icon: TrendingUp,
    title: "Market Prices",
    description: "Access current market prices for your crops to make informed selling decisions and maximize profits.",
    href: "/market-prices",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    icon: MessageSquare,
    title: "Feedback",
    description: "Share your experience and help us improve our services for the farming community.",
    href: "/feedback",
    gradient: "from-teal-400 to-teal-600",
  },
]

export function FeatureCards() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Comprehensive Farming Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our suite of AI-powered tools designed to help farmers make informed decisions and improve crop
            yields
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>

                <Link href={feature.href}>
                  <Button
                    variant="outline"
                    className="w-full glass border-white/30 hover:bg-white/20 transition-all duration-300 bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
