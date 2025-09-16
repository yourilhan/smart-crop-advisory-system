import { Users, UserCheck, Building, Heart, Rocket } from "lucide-react"

const beneficiaries = [
  { icon: Users, title: "Farmers", description: "Direct crop guidance and support" },
  { icon: UserCheck, title: "Extension Officers", description: "Enhanced advisory capabilities" },
  { icon: Building, title: "Government", description: "Policy insights and data" },
  { icon: Heart, title: "NGOs", description: "Community development programs" },
  { icon: Rocket, title: "Agri-tech Startups", description: "Innovation partnerships" },
]

export function BeneficiariesSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Who Benefits</h2>

        <div className="flex overflow-x-auto gap-6 pb-4">
          {beneficiaries.map((beneficiary, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 min-w-[280px] flex-shrink-0">
              <div className="text-center">
                <beneficiary.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-2">{beneficiary.title}</h3>
                <p className="text-muted-foreground text-sm">{beneficiary.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
