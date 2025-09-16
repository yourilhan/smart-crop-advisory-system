import { Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-900/90 to-green-950/95 text-white py-16 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-8 bg-white/10 border-white/20">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Project Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-white">Smart Crop Advisory System</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Empowering farmers with AI-driven insights for better crop management, soil health monitoring, and
                sustainable agricultural practices.
              </p>
              <div className="space-y-2 text-sm text-white/70">
                <p>
                  <strong>Problem Statement ID:</strong> 25010
                </p>
                <p>
                  <strong>Category:</strong> Software, Agriculture, FoodTech & Rural Development
                </p>
                <p>
                  <strong>Organization:</strong> Government of Punjab
                </p>
                <p>
                  <strong>Department:</strong> Department of Higher Education
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Features</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="/crop-advisory" className="hover:text-white transition-colors">
                    Crop Advisory
                  </a>
                </li>
                <li>
                  <a href="/soil-health" className="hover:text-white transition-colors">
                    Soil Health
                  </a>
                </li>
                <li>
                  <a href="/weather" className="hover:text-white transition-colors">
                    Weather Alerts
                  </a>
                </li>
                <li>
                  <a href="/pest-detection" className="hover:text-white transition-colors">
                    Pest Detection
                  </a>
                </li>
                <li>
                  <a href="/market-prices" className="hover:text-white transition-colors">
                    Market Prices
                  </a>
                </li>
                <li>
                  <a href="/feedback" className="hover:text-white transition-colors">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">support@cropadvisory.gov.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91-172-XXXXXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Punjab, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © 2024 Smart Crop Advisory System. Built for farmers, by innovators.
              </p>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                  Documentation <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
