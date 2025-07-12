import React from 'react';
import styles from './AboutBatara.module.scss';
import cafeColombiaImg from '../assets/batara/batara-1.jpeg';

export default function AboutBatara() {
  return (
    <section id="about" className="bg-amber-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-10">¿Qué es Café Batará?</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img
              src={cafeColombiaImg}
              alt="Café Colombia"
              className="rounded-lg shadow-md w-full transform transition-transform hover:scale-105 duration-300"
            />
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
  );
}