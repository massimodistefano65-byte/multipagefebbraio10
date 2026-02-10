import React, { useState } from 'react';
import { Artwork } from '../data/artworks';
import ArtModal from './ArtModal';

interface ArtworksGridProps {
  items: Artwork[];
  title: string;
  subtitle: string;
}

const ArtworksGrid: React.FC<ArtworksGridProps> = ({ items, title, subtitle }) => {
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [likes, setLikes] = useState<Record<string, number>>({});

  const openModal = (artwork: Artwork) => {
    setActiveArtwork(artwork);
    setActiveImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveArtwork(null);
    setActiveImageIndex(0);
    document.body.style.overflow = '';
  };

  const showPrevImage = () => {
    if (!activeArtwork) return;
    const total = activeArtwork.detailImages?.length || 1;
    setActiveImageIndex((prev) => (prev - 1 + total) % total);
  };

  const showNextImage = () => {
    if (!activeArtwork) return;
    const total = activeArtwork.detailImages?.length || 1;
    setActiveImageIndex((prev) => (prev + 1) % total);
  };

  const handleThumbClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleLike = () => {
    if (!activeArtwork) return;
    const key = `${activeArtwork.title}-${activeArtwork.id}`;
    setLikes((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1,
    }));
  };

  const getLikesForArtwork = (artwork: Artwork | null) => {
    if (!artwork) return 0;
    const key = `${artwork.title}-${artwork.id}`;
    return likes[key] || 0;
  };

  return (
    <>
      <section className="art-section">
        <h2>{title}</h2>
        <p className="art-section-subtitle">{subtitle}</p>
        <div className="art-grid">
          {items.map((item) => (
            <button
              key={item.id}
              className="art-card"
              type="button"
              onClick={() => openModal(item)}
            >
              <div className="art-card-image-wrapper">
                <img
                  src={item.mainImage}
                  alt={item.title}
                  className="art-card-image"
                />
                <div className="art-card-overlay">
                  <div className="art-card-overlay-inner">
                    <h3 className="art-card-title">{item.title}</h3>
                    {(item.year || item.technique) && (
                      <p className="art-card-meta">
                        {item.year && `${item.year}`}
                        {item.year && item.technique && ' · '}
                        {item.technique}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeArtwork && (
        <ArtModal
          artwork={activeArtwork}
          activeImageIndex={activeImageIndex}
          onClose={closeModal}
          onPrev={showPrevImage}
          onNext={showNextImage}
          onThumbClick={handleThumbClick}
          likes={getLikesForArtwork(activeArtwork)}
          onLike={handleLike}
        />
      )}
    </>
  );
};

export default ArtworksGrid;
