import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TShirts = () => {
  return (
    <main className="min-h-screen bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          T-Shirt
        </h1>
        <div className="h-1 w-24 bg-blue-700 mx-auto mb-8"></div>

        <p className="text-gray-300 text-lg leading-8 mb-12">
          Indossa l'arte. La collezione di T-shirt propone i motivi iconici della serie Ancient Trace
          su cotone di qualità, permettendoti di portare con te la poesia della materia e della memoria.
          Ogni pezzo è una dichiarazione di stile consapevole e apprezzamento per l'estetica contemporanea.
        </p>

        <Link
          to="/tshirts-gallery"
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:gap-5 group"
        >
          Sfoglia Galleria
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </main>
  );
};

export default TShirts;

