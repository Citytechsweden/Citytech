import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Tack för ditt meddelande! Vi återkommer till dig snart.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            Låt Oss <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Koppla Ihop</span>
          </h2>
          <p className="text-xl text-gray-600">
            Redo att starta ditt nästa projekt? Hör av dig så skapar vi något fantastiskt tillsammans.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 sm:p-12 text-white h-full shadow-2xl bg-[rgba(15,192,56,0)]">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Kontakta Oss
              </h3>
              <p className="text-blue-100 mb-10 text-lg leading-relaxed">
                Har du ett projekt i åtanke? Vi är här för att hjälpa till att förverkliga dina idéer. Kontakta oss via någon av kanalerna nedan.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={26} />
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-lg">Maila Oss</div>
                    <a
                      href="mailto:hello@appdev.com"
                      className="text-blue-100 hover:text-white transition-colors text-lg"
                    >
                      hello@appdev.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={26} />
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-lg">Ring Oss</div>
                    <a
                      href="tel:+1234567890"
                      className="text-blue-100 hover:text-white transition-colors text-lg"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={26} />
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-lg">Besök Oss</div>
                    <div className="text-blue-100 text-lg leading-relaxed">
                      Teknikgatan 123, Svit 100
                      <br />
                      Stockholm, Sverige 11234
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/20">
                <div className="text-sm text-blue-100 mb-3">Öppettider</div>
                <div className="font-semibold text-lg mb-1">Måndag - Fredag: 09:00 - 18:00</div>
                <div className="text-blue-100">Helger: Efter Bokning</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-10 sm:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Fullständigt Namn *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Erik Svensson"
                  className="w-full h-14 text-lg rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  E-postadress *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="erik@exempel.se"
                  className="w-full h-14 text-lg rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Telefonnummer
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+46 70 123 45 67"
                  className="w-full h-14 text-lg rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Ditt Meddelande *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Berätta om ditt projekt..."
                  rows={6}
                  className="w-full text-lg rounded-xl resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-[rgb(204,233,18)]"
              >
                Skicka Meddelande
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}