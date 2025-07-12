import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import AboutBatara from './components/AboutBatara';
import Gallery from './components/Gallery';
import Sustainability from './components/Sustainability';
import LocationSection from './components/Location';
import Testimonials from './components/Testimonials';
import FutureProjects from './components/FutureProjects';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';

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
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <>
      <Navbar />
      <div className="font-sans text-gray-800 antialiased" id="top">
        {/* Intro Section - Brand Identity */}
        <section className="bg-gradient-brown text-white text-center tierra-alma-container">
          <div className="container px-6 mx-auto">
            <h1 className="text-3xl md:text-4xl">Bienvenidos a Tierra & Alma</h1>
            <p className="max-w-xl mx-auto text-lg opacity-90">
              Un puente entre proyectos cafetaleros sostenibles y consumidores conscientes.</p>
          </div>
        </section>

        {/* About Tierra & Alma */}
        <About />

        {/* Hero Section */}
        <Hero
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          subscribed={subscribed}
          error={error}
        />

        {/* About Batará Section */}
        <AboutBatara />

        {/* Gallery Section */}
        <Gallery />

        {/* Sustainability and Birds Section */}
        <Sustainability />

        {/* Ubicación */}
        <LocationSection LocationIcon={LocationIcon} />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Future Projects Section */}
        <FutureProjects CoffeeIcon={CoffeeIcon} StoreIcon={StoreIcon} TreeIcon={TreeIcon} />

        {/* Call to Action */}
        <Subscribe
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          subscribed={subscribed}
          error={error}
        />

        {/* Footer */}
        <Footer />
      </div>
    </>
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