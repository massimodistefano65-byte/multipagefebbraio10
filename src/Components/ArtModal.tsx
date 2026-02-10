import React from 'react';
import { Artwork } from '../data/artworks';

interface ArtModalProps {
  artwork: Artwork;
  activeImageIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onThumbClick: (index: number) => void;
  likes: number;
  onLike: () => void;
}

const ArtModal: React.FC<ArtModalProps> = ({
  artwork,
  activeImageIndex,
  onClose,
  onPrev,
  onNext,
  onThumbClick,
  likes,
  onLike
}) => {
  const currentImage = artwork.detailImages?.[activeImageIndex] || artwork.mainImage;
  const thumbs = artwork.detailImages?.length 
    ? artwork.detailImages 
    : [artwork.mainImage];

  return (
    <div className="art-modal-backdrop" onClick={onClose}>
      <div className="art-modal" onClick={(e) => e.stopPropagation()}>
        <button className="art-modal-close" type="button" onClick={onClose}>
          ×
        </button>

        <div className="art-modal-main">
          <button className="art-modal-nav" type="button" onClick={onPrev}>
            ‹
          </button>

          <div className="art-modal-image-wrapper">
            <img
              src={currentImage}
              alt={artwork.title}
              className="art-modal-image"
            />
          </div>

          <button className="art-modal-nav" type="button" onClick={onNext}>
            ›
          </button>
        </div>

        <div className="art-modal-info">
          <div className="art-modal-title-row">
            <h3 className="art-modal-title">{artwork.title}</h3>
            <button
              type="button"
              className={`art-like-button ${likes > 0 ? 'is-active' : ''}`}
              onClick={onLike}
            >
              <i className="fa-regular fa-heart" />
              <span>{likes}</span>
            </button>
          </div>

          {(artwork.technique || artwork.dimensions || artwork.year) && (
            <p className="art-modal-meta">
              {artwork.year && `${artwork.year} · `}
              {artwork.technique}
              {artwork.dimensions && ` · ${artwork.dimensions}`}
            </p>
          )}

          {artwork.description && (
            <p className="art-modal-description">
              {artwork.description}
            </p>
          )}

          {artwork.shopLink && artwork.shopLink.trim() !== '' && (
            <a
              href={artwork.shopLink}
              target="_blank"
              rel="noreferrer"
              className="art-shop-button"
            >
              Shop / Buy via link
            </a>
          )}
        </div>

        <div className="art-modal-thumbs">
          {thumbs.map((img, index) => (
            <button
              key={img}
              type="button"
              className={`art-modal-thumb-button ${index === activeImageIndex ? 'is-active' : ''}`}
              onClick={() => onThumbClick(index)}
            >
              <img
                src={img}
                alt={`${artwork.title} dettaglio ${index + 1}`}
                className="art-modal-thumb-image"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtModal;
