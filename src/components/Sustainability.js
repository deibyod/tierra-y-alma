import React from 'react';
import styles from './Sustainability.module.scss';

export default function Sustainability() {
  return (
    <section id="sustainability" className="bg-amber-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-10">Aves, biodiversidad y sostenibilidad</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src="https://picsum.photos/id/1012/600/400" alt="Aves en el cultivo" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-800">Hogar para las aves</h3>
            <p className="text-gray-600">La plantación ofrece refugio a múltiples especies aviares gracias al sombrío natural.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src="https://picsum.photos/id/1011/600/400" alt="Árboles nativos" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-800">Árboles nativos</h3>
            <p className="text-gray-600">Cultivamos bajo árboles autóctonos, preservando el ecosistema local y fomentando la biodiversidad.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src="https://picsum.photos/id/1014/600/400" alt="Economía local" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-800">Economía campesina</h3>
            <p className="text-gray-600">Apoyamos comunidades locales, fortaleciendo la economía rural y respetando la cultura cafetera.</p>
          </div>
        </div>
      </div>
    </section>
  );
}