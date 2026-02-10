import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DigitalArt = () => {
  return (
    <main className="min-h-screen bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          Digital Art
        </h1>
        <div className="h-1 w-24 bg-blue-700 mx-auto mb-8"></div>

        <p className="text-gray-300 text-lg leading-8 mb-12">
          Esplorazioni digitali della serie Ancient Trace, dove tecnologia e materia organica si incontrano.
          Questi lavori rappresentano un dialogo tra la tradizione pittorica e le possibilità innovative
          della elaborazione digitale, creando stratificazioni visive che evocano memorie sedimentate nel tempo.
        </p>

        <Link
          to="/digital-gallery"
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:gap-5 group"
        >
          Sfoglia Galleria
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </main>
  );
};

export default DigitalArt;

