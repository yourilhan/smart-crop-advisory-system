import { Brain, Droplets, CloudRain, Bug, DollarSign, Mic } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Advisory",
    description: "Real-time, multilingual crop guidance",
  },
  {
    icon: Droplets,
    title: "Soil Health",
    description: "Fertilizer & soil management recommendations",
  },
  {
    icon: CloudRain,
    title: "Weather Alerts",
    description: "Predictive insights based on location",
  },
  {
    icon: Bug,
    title: "Pest Detection",
    description: "Upload crop images for pest/disease diagnosis",
  },
  {
    icon: DollarSign,
    title: "Market Prices",
    description: "Stay updated with real-time market trends",
  },
  {
    icon: Mic,
    title: "Voice Support",
    description: "Accessible for low-literate users",
  },
]

export function OutcomesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">What the Solution Offers</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-bold text-card-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
