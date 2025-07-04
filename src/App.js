import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor ingresa un correo electrónico válido');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000); // Reset message after 5s
  };

  return (
    <div className="font-sans text-gray-800 antialiased">
      {/* Intro Section - Brand Identity */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 py-16 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bienvenidos a Tierra & Alma</h2>
          <p className="max-w-xl mx-auto text-lg opacity-90">
            Un puente entre proyectos cafetaleros sostenibles y consumidores conscientes. 
            Café Batará es nuestro primer proyecto. Más están por venir.
          </p>
        </div>
      </section>

      {/* Hero Section with Full Width Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/id/1015/1920/1080 "
            alt="Café Batará - Cultivo sostenible"
            className="w-full h-full object-cover brightness-75 contrast-100"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Café Batará <br /> Tradición cafetera con alma.
          </h1>
          <p className="text-lg md:text-xl max-w-lg mx-auto mb-8">
            Un café amigable con las aves, cultivado bajo árboles nativos por familias caficultoras en Colombia.
          </p>
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-amber-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-md transition-colors shadow-md"
              >
                Suscribirme
              </button>
            </form>
          ) : (
            <p className="text-green-200 font-medium mt-4">¡Gracias por suscribirte! Te avisaremos pronto.</p>
          )}
          {error && <p className="text-red-200 text-sm mt-2">{error}</p>}
          <div className="mt-6 space-x-4">
            <a href="https://instagram.com/tierrayalma " target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              @tierrayalma
            </a>
            <span className="text-white opacity-70">·</span>
            <a href="https://instagram.com/batara.cafe " target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              @batara.cafe
            </a>
          </div>
        </div>
      </section>

      {/* About Tierra & Alma */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-6">¿Qué es Tierra & Alma?</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
            Somos una marca dedicada a conectar proyectos cafetaleros sostenibles con consumidores apasionados por el buen café y el impacto positivo.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="https://picsum.photos/id/1022/600/400 " alt="Equipo Tierra & Alma" className="rounded-lg shadow-md w-full transform transition-transform hover:scale-105 duration-300" />
            </div>
            <div className="max-w-xl mx-auto text-lg text-gray-700 space-y-6">
              <p>
                <strong>Tierra & Alma</strong> nace con el propósito de construir puentes entre productores rurales y personas que buscan autenticidad, calidad y significado en lo que consumen.
              </p>
              <p>
                Nuestro primer proyecto es <strong>Café Batará</strong>, pero no será el último. Buscamos seguir conectando historias auténticas, cultivos sostenibles y comunidades campesinas.
              </p>
              <p>
                En el futuro, queremos llevar esta filosofía a nuevas regiones, nuevos cafés y quizás abrir nuestras propias cafeterías donde contar estas historias mientras servimos una taza única.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Batará Section */}
      <section id="about" className="bg-amber-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-10">¿Qué es Café Batará?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img src="https://picsum.photos/id/1013/600/400 " alt="Café Colombia" className="rounded-lg shadow-md w-full transform transition-transform hover:scale-105 duration-300" />
            </div>
            <div className="order-1 md:order-2 max-w-xl mx-auto text-lg text-gray-700 space-y-6">
              <p>
                <strong>Café Batará</strong> es un arábigo de alta calidad cultivado en la Vereda La Unión, Fusagasugá, Cundinamarca, Colombia.
              </p>
              <p>
                Este proyecto nace de la tradición familiar cafetalera y el compromiso con la tierra y la vida silvestre.
              </p>
              <p>
                En <strong>Tierra & Alma</strong> trabajamos directamente con los productores para traer este café único a Chile, manteniendo su esencia intacta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-10">Descubre nuestro mundo cafetalero</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="https://picsum.photos/id/1016/600/400 " alt="Finca Cafetalera" className="rounded-lg shadow-md object-cover h-60 w-full transform transition-transform hover:scale-105 duration-300" />
            <img src="https://picsum.photos/id/1017/600/400 " alt="Proceso de cosecha" className="rounded-lg shadow-md object-cover h-60 w-full transform transition-transform hover:scale-105 duration-300" />
            <img src="https://picsum.photos/id/1018/600/400 " alt="Secado del café" className="rounded-lg shadow-md object-cover h-60 w-full transform transition-transform hover:scale-105 duration-300" />
            <img src="https://picsum.photos/id/1019/600/400 " alt="Preparación del grano" className="rounded-lg shadow-md object-cover h-60 w-full transform transition-transform hover:scale-105 duration-300" />
            <img src="https://picsum.photos/id/1020/600/400 " alt="Empaque sostenible" className="rounded-lg shadow-md object-cover h-60 w-full transform transition-transform hover:scale-105 duration-300" />
            <img src="https://picsum.photos/id/1021/600/400 " alt="Equipo trabajando" className="rounded-lg shadow-md object-cover h-60 w-full transform transition-transform hover:scale-105 duration-300" />
          </div>
        </div>
      </section>

      {/* Sustainability and Birds Section */}
      <section id="sustainability" className="bg-amber-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-10">Aves, biodiversidad y sostenibilidad</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src="https://picsum.photos/id/1012/600/400 " alt="Aves en el cultivo" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Hogar para las aves</h3>
              <p className="text-gray-600">La plantación ofrece refugio a múltiples especies aviares gracias al sombrío natural.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src="https://picsum.photos/id/1011/600/400 " alt="Árboles nativos" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Árboles nativos</h3>
              <p className="text-gray-600">Cultivamos bajo árboles autóctonos, preservando el ecosistema local y fomentando la biodiversidad.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src="https://picsum.photos/id/1014/600/400 " alt="Economía local" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Economía campesina</h3>
              <p className="text-gray-600">Apoyamos comunidades locales, fortaleciendo la economía rural y respetando la cultura cafetera.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Pin Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-6">Ubicación del cultivo</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
            El café se cultiva en Vereda La Unión, Fusagasugá, Cundinamarca, Colombia — corazón de la región cafetalera andina.
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
              <LocationIcon className="w-12 h-12 mx-auto text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vereda La Unión</h3>
              <p className="text-gray-600 mb-4">Fusagasugá, Cundinamarca, Colombia</p>
              <p className="text-sm text-gray-500 italic">Zona cafetalera Andina · Altitud: 1.600 msnm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-10">Lo que dicen quienes lo han probado</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="italic text-gray-600 mb-4">“El mejor aroma que he sentido en un café. Realmente limpio y vibrante.”</p>
              <p className="font-semibold text-amber-700">— Camila R., Fotógrafa viajera</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="italic text-gray-600 mb-4">“No solo amo el sabor, amo la historia detrás de cada taza.”</p>
              <p className="font-semibold text-amber-700">— Andrés L., Chef sostenible</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="italic text-gray-600 mb-4">“Me encanta saber que estoy ayudando a proteger la naturaleza mientras bebo café.”</p>
              <p className="font-semibold text-amber-700">— Valentina G., Consumidora responsable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-6">¿Hacia dónde vamos?</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
            Batará es solo el comienzo. En Tierra & Alma tenemos grandes planes que van más allá del café.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <CoffeeIcon className="w-12 h-12 mx-auto text-amber-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Más cafés sostenibles</h3>
              <p className="text-gray-600">Planeamos colaborar con más productores de diferentes regiones cafetaleras.</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <StoreIcon className="w-12 h-12 mx-auto text-amber-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Nuestra propia cafetería</h3>
              <p className="text-gray-600">Imaginamos espacios físicos donde servir café con historia y conexión real.</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <TreeIcon className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Impacto sostenible</h3>
              <p className="text-gray-600">Queremos ser un modelo de comercio justo y conservación ambiental.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="subscribe" className="bg-gradient-to-r from-amber-800 to-amber-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¡Suscríbete y forma parte del viaje!</h2>
          <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
            Recibe notificaciones cuando el café Batará esté disponible en Chile. Únete a nuestra comunidad y entérate de nuestros próximos pasos.
          </p>
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-amber-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-amber-800 font-medium rounded-md hover:bg-amber-50 transition-colors shadow-md"
              >
                Suscribirme
              </button>
            </form>
          ) : (
            <p className="text-white font-medium mt-4">¡Gracias por suscribirte! Te avisaremos pronto.</p>
          )}
          {error && <p className="text-red-200 text-sm mt-2">{error}</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl font-bold mb-2">Tierra & Alma</h2>
          <p className="text-gray-400 text-sm">Conexión natural, corazón campesino</p>
          <div className="mt-4 space-x-4">
            <a href="https://instagram.com/tierrayalma " target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              @tierrayalma
            </a>
            <span className="text-white opacity-70">·</span>
            <a href="https://instagram.com/batara.cafe " target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              @batara.cafe
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

// SVG Icons
function TreeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L5 7l-2 10 4-2 4 4 4-4 4 2-2-10z"></path>
      <path d="M12 2v18"></path>
    </svg>
  );
}

function BirdIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 7h.01M8 7h.01M21 12c0 1.5-3 3-7 3s-7-1.5-7-3M3 12c0 1.5 3 3 7 3s7-1.5 7-3"></path>
      <path d="M4.5 17.5L2 15l2.5-2.5M19.5 17.5L22 15l-2.5-2.5"></path>
    </svg>
  );
}

function PeopleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"></path>
    </svg>
  );
}

function LocationIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

function CoffeeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"></path>
      <line x1="6" y1="1" x2="6" y2="4"></line>
      <line x1="10" y1="1" x2="10" y2="4"></line>
      <line x1="14" y1="1" x2="14" y2="4"></line>
    </svg>
  );
}

function StoreIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h20l-2 9H4L2 3z"></path>
      <circle cx="12" cy="17" r="4"></circle>
    </svg>
  );
}