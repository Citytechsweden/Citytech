import {
  Network,
  Smartphone,
  Zap,
  Target,
} from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations";

export function Services() {
  const { language } = useLanguage();

  const services = [
    {
      icon: Network,
      title: translations.services.digitalAndPhysicalInfrastructure.title[language],
      description:
        translations.services.digitalAndPhysicalInfrastructure.description[language],
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-500/10 to-cyan-600/10",
    },
    {
      icon: Smartphone,
      title: translations.services.customPlatforms.title[language],
      description:
        translations.services.customPlatforms.description[language],
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-500/10 to-pink-600/10",
    },
    {
      icon: Zap,
      title: translations.services.intelligentLogicAndAutomation.title[language],
      description:
        translations.services.intelligentLogicAndAutomation.description[language],
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-500/10 to-emerald-600/10",
    },
    {
      icon: Target,
      title: translations.services.conceptAndDigitalStrategy.title[language],
      description:
        translations.services.conceptAndDigitalStrategy.description[language],
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-500/10 to-red-600/10",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            {translations.services.title[language]}
          </h2>
          <p className="text-xl text-gray-600">
            {translations.services.subtitle[language]}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}