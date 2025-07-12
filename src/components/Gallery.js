import React from 'react';
import styles from './Gallery.module.scss';

export default function Gallery() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-10">Descubre nuestro mundo cafetalero</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://picsum.photos/id/1016/600/400" alt="Finca Cafetalera" className="rounded-lg shadow-md object-cover h-60 w-full transform transition-transform hover:scale-105 duration-300" />
          <img src="https://picsum.photos/id/1017/600/400" alt="Proceso de cosecha" className="rounded-lg shadow-md object-cover h-60 w-full transform transition-transform hover:scale-105 duration-300" />
          <img src="https://picsum.photos/id/1018/600/400" alt="Secado del café" className="rounded-lg shadow-md object-cover h-60 w-full transform transition-transform hover:scale-105 duration-300" />
          <img src="https://picsum.photos/id/1019/600/400" alt="Preparación del grano" className="rounded-lg shadow-md object-cover h-60 w-full transform transition-transform hover:scale-105 duration-300" />
          <img src="https://picsum.photos/id/1020/600/400" alt="Empaque sostenible" className="rounded-lg shadow-md object-cover h-60 w-full transform transition-transform hover:scale-105 duration-300" />
          <img src="https://picsum.photos/id/1021/600/400" alt="Equipo trabajando" className="rounded-lg shadow-md object-cover h-60 w-full transform transition-transform hover:scale-105 duration-300" />
        </div>
      </div>
    </section>
  );
}