import { AlertTriangle } from "lucide-react"

export function ProblemStatement() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="flex items-center mb-6">
            <AlertTriangle className="h-8 w-8 text-destructive mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">Problem Statement</h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Farmers often depend on guesswork and local shopkeepers for crop decisions. This leads to poor yield, high
            input costs, and environmental harm. Language barriers and low digital literacy further limit access to
            reliable agri-tech resources.
          </p>
        </div>
      </div>
    </section>
  )
}
