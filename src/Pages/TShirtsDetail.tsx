import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tshirts } from '../data/artworks';
import { ChevronLeft, ChevronRight, X, ArrowLeft, ExternalLink } from 'lucide-react';

const TShirtsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = tshirts.find(a => a.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [id]);

  if (!artwork) {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Opera non trovata</h1>
          <Link to="/tshirts-gallery" className="text-blue-400 hover:text-blue-300">
            Torna alla galleria
          </Link>
        </div>
      </main>
    );
  }

  const totalImages = artwork.detailImages?.length || 1;
  const currentImage = artwork.detailImages?.[currentImageIndex] || artwork.mainImage;

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + totalImages) % totalImages);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % totalImages);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalImages]);

  return (
    <main className="min-h-screen bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/tshirts-gallery"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Torna alla galleria
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative bg-slate-900 rounded-lg overflow-hidden border border-slate-800">
              <img
                src={currentImage}
                alt={artwork.title}
                className="w-full h-auto max-h-96 object-contain"
              />

              {totalImages > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors hidden md:block"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={48} />
                  </button>

                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors hidden md:block"
                    aria-label="Next image"
                  >
                    <ChevronRight size={48} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded text-white text-sm">
                    {currentImageIndex + 1} / {totalImages}
                  </div>
                </>
              )}
            </div>

            {totalImages > 1 && (
              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {Array.from({ length: totalImages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-16 h-16 rounded border-2 transition-all ${
                      idx === currentImageIndex
                        ? 'border-blue-700'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <img
                      src={artwork.detailImages?.[idx] || artwork.mainImage}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h1 className="text-3xl font-bold text-white mb-4">{artwork.title}</h1>

              <div className="space-y-4 mb-6">
                {artwork.year && (
                  <div>
                    <p className="text-gray-400 text-sm">Anno</p>
                    <p className="text-white font-semibold">{artwork.year}</p>
                  </div>
                )}

                {artwork.technique && (
                  <div>
                    <p className="text-gray-400 text-sm">Tecnica</p>
                    <p className="text-white font-semibold">{artwork.technique}</p>
                  </div>
                )}

                {artwork.dimensions && (
                  <div>
                    <p className="text-gray-400 text-sm">Dimensioni</p>
                    <p className="text-white font-semibold">{artwork.dimensions}</p>
                  </div>
                )}
              </div>

              {artwork.description && (
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-2">Descrizione</p>
                  <p className="text-white text-sm leading-6">{artwork.description}</p>
                </div>
              )}

              {artwork.shopLink && (
                <a
                  href={artwork.shopLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center bg-blue-700 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  Shop by Link
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TShirtsDetail;
