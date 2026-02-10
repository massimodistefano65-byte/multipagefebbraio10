import { useState, useEffect, useRef } from "react";
import { Award, Calendar, MapPin } from "lucide-react";

function Bio() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const exhibitions = [
    { year: "2024", title: "Visioni Cosmiche", location: "Galleria d'Arte Moderna, Milano" },
    { year: "2023", title: "L'Universo Interiore", location: "Biennale di Venezia" },
    { year: "2022", title: "Oltre il Visibile", location: "Palazzo Reale, Torino" },
    { year: "2021", title: "Dimensioni Parallele", location: "MAXXI, Roma" }
  ];

  return (
    <main>
      <section
        ref={sectionRef}
        id="bio"
        className="py-24 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Massimo Di Stefano"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-neutral-900 mb-4">Bio</h2>
                <div className="w-20 h-1 bg-neutral-900 mb-6"></div>
              </div>

              <p className="text-neutral-700 leading-relaxed">
                Massimo Di Stefano è un artista visuale italiano nato a Milano nel 1975.
                La sua ricerca artistica esplora le dimensioni cosmiche e spirituali
                attraverso la pittura, la fotografia e l&apos;arte digitale.
              </p>

              <p className="text-neutral-700 leading-relaxed">
                Il suo lavoro si distingue per l&apos;uso audace del colore e la capacità
                di evocare spazi infiniti e dimensioni oltre il visibile. Le sue opere
                sono state esposte in gallerie e musei internazionali.
              </p>

              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <Award size={24} />
                  Dichiarazione Artistica
                </h3>
                <p className="text-neutral-700 italic leading-relaxed border-l-4 border-neutral-300 pl-4">
                  &quot;L&apos;arte è un ponte tra il visibile e l&apos;invisibile, un viaggio
                  nell&apos;infinito che inizia con un singolo tratto di pennello.
                  Attraverso le mie opere, cerco di catturare l&apos;essenza del cosmo
                  e la profondità dell&apos;anima umana.&quot;
                </p>
              </div>
            </div>
          </div>

          <div
            className={`mt-20 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Mostre Principali
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exhibitions.map((exhibition, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold">
                        {exhibition.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                        {exhibition.title}
                      </h4>
                      <div className="flex items-center gap-2 text-neutral-600">
                        <MapPin size={16} />
                        <span className="text-sm">{exhibition.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`mt-16 bg-gradient-to-r from-neutral-900 to-neutral-700 text-white p-8 rounded-lg transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <Calendar className="mx-auto mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-2">Formazione</h3>
              <p className="text-neutral-200">
                Accademia di Belle Arti di Brera, Milano (1995-2000)
              </p>
              <p className="text-neutral-200">
                Master in Arte Contemporanea, Royal College of Art, London (2002-2004)
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Bio;
