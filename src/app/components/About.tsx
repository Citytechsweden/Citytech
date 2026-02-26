import { Target, Award, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Kundfokuserad Approach",
    description:
      "Vi prioriterar att förstå dina affärsmål och levererar lösningar som driver verkliga resultat.",
  },
  {
    icon: Award,
    title: "Bevisad Excellens",
    description:
      "Prisbelönt utvecklingsteam med meritlista av framgångsrika projekt inom olika branscher.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Talangfulla utvecklare, designers och strateger dedikerade till att förverkliga din vision.",
  },
  {
    icon: Clock,
    title: "Punktlig Leverans",
    description:
      "Vi respekterar deadlines och säkerställer att ditt projekt levereras i tid utan att kompromissa med kvaliteten.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            Varför Välja <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AppDev</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Vi är inte bara utvecklare – vi är dina partner i digital innovation, engagerade i att förvandla dina idéer till exceptionella applikationer.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 sm:p-16 border border-blue-100 shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-900">
              Vår Mission
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Att ge företag av alla storlekar innovativa digitala lösningar som driver tillväxt, förbättrar användarupplevelser och skapar bestående värde. Vi tror på teknikens kraft att transformera industrier och förbättra liv.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-10 pt-10 border-t border-gray-300">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                12+
              </div>
              <div className="text-gray-600 font-medium">Års Erfarenhet</div>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                35+
              </div>
              <div className="text-gray-600 font-medium">Länder Serverade</div>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                20+
              </div>
              <div className="text-gray-600 font-medium">Branschpriser</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}