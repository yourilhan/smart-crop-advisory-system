import { BarChart3, TrendingUp } from "lucide-react"

export function DataSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">The Facts</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-3xl p-8 text-center">
            <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4" />
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">86%</div>
            <p className="text-lg text-muted-foreground">of Indian farmers are small or marginal</p>
          </div>

          <div className="glass-card rounded-3xl p-8 text-center">
            <TrendingUp className="h-16 w-16 text-secondary mx-auto mb-4" />
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">20-30%</div>
            <p className="text-lg text-muted-foreground">yield boost possible with ICT-based advisories</p>
          </div>
        </div>
      </div>
    </section>
  )
}
