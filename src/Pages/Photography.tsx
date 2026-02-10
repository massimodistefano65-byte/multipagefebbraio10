import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Photography = () => {
  return (
    <main className="min-h-screen bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          Fotografia
        </h1>
        <div className="h-1 w-24 bg-blue-700 mx-auto mb-8"></div>

        <p className="text-gray-300 text-lg leading-8 mb-12">
          Attraverso l'obiettivo, catturare i dettagli nascosti della serie Ancient Trace.
          La fotografia fine art diventa strumento di indagine, isolando trame e texture
          che rivelano la bellezza nella decadenza. Ogni scatto racconta la storia di superfici
          che custodiscono il passato nel presente.
        </p>

        <Link
          to="/photography-gallery"
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:gap-5 group"
        >
          Sfoglia Galleria
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </main>
  );
};

export default Photography;
