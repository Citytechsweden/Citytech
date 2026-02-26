import { Shield, Cloud } from "lucide-react";

export function Technologies() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 rounded-2xl bg-yellow-500 flex items-center justify-center shadow-2xl relative">
              <Shield size={150} className="text-blue-400/60 absolute" />
              <Shield size={90} className="text-blue-400 relative z-10" />
            </div>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
            Framtidssäker <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skalbarhet</span>
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-300 leading-relaxed">
            Vi använder modulär arkitektur som gör att din plattform kan växa från 10 till 10 000 användare utan prestandaförlust. Din investering är byggd för att hålla över tid.
          </p>
        </div>
      </div>
    </section>
  );
}