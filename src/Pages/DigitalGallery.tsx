import React from 'react';
import { Link } from 'react-router-dom';
import { digitalArt } from '../data/artworks';
import { ExternalLink } from 'lucide-react';

const DigitalGallery = () => {
  return (
    <main className="min-h-screen bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
          Digital Art Gallery
        </h2>
        <div className="h-1 w-24 bg-blue-700 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {digitalArt.map((artwork) => (
            <Link
              key={artwork.id}
              to={`/digital-gallery/${artwork.id}`}
              className="group relative h-80 bg-slate-900 rounded-lg overflow-hidden border border-slate-800 hover:border-blue-700 transition-all duration-300 hover:scale-105"
            >
              <img
                src={artwork.mainImage}
                alt={artwork.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg mb-1">{artwork.title}</h3>
                <p className="text-gray-300 text-sm mb-3">
                  {artwork.year} · {artwork.technique}
                </p>
                {artwork.shopLink && (
                  <a
                    href={artwork.shopLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm transition-colors duration-200"
                  >
                    Shop by Link
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DigitalGallery;
