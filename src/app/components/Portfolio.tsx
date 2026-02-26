import { ExternalLink } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const projects = [
  {
    title: "FitTrack Pro",
    category: "Hälsa & Fitness",
    description:
      "En omfattande träningsapp med personliga träningsplaner och näringsuppföljning.",
    image:
      "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?w=800&q=80",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "ShopEase",
    category: "E-handel",
    description:
      "Modern e-handelsplattform med AI-drivna produktrekommendationer och smidig kassa.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React", "Stripe", "AWS"],
  },
  {
    title: "TeamSync",
    category: "Produktivitet",
    description:
      "Realtidssamarbetsplattform för distansteam med videokonferens och uppgiftshantering.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    tags: ["Flutter", "Firebase", "WebRTC"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Case studie</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Från koncept till verklighet – utforska de tekniska lösningar och arkitekturer vi har utvecklat för att driva morgondagens digitala tjänster.
          </p>
          <a href="/case-study">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Läs mer här
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}