import { TrendingUp, Leaf } from "lucide-react"

export function ImpactSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Why This Matters</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-3xl p-8">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-10 w-10 text-primary mr-4" />
              <h3 className="text-2xl font-bold text-card-foreground">Productivity & Livelihoods</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Helps farmers increase yields and lower costs through data-driven insights and personalized
              recommendations.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <div className="flex items-center mb-4">
              <Leaf className="h-10 w-10 text-secondary mr-4" />
              <h3 className="text-2xl font-bold text-card-foreground">Sustainability</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Promotes eco-friendly, data-driven farming practices that protect the environment for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
