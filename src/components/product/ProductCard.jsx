import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/price';

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.images.primary);
  const [isHovering, setIsHovering] = useState(false);

  // Preload de la imagen hover para evitar parpadeo
  useEffect(() => {
    if (product?.images?.hover) {
      const img = new Image();
      img.src = product.images.hover;
    }
  }, [product]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (product?.images?.hover) setCurrentImage(product.images.hover);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentImage(product.images.primary);
  };

  // Fallback si hay error cargando la imagen
  const handleError = (e) => {
    if (currentImage !== product.images.primary) {
      setCurrentImage(product.images.primary);
    }
  };

  const getBadgeClass = (badge) => {
    switch (badge.toLowerCase()) {
      case 'indica':
        return 'bg-primary';               // azul
      case 'sativa':
        return 'bg-warning text-dark';     // amarillo
      case 'hybrid':
        return 'bg-info text-dark';        // celeste
      default:
        return 'bg-success';               // verde
    }
  };

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm border-0 product-card">
        <Link to={`/product/${product.slug}`} className="text-decoration-none">
          <div
            className="position-relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ height: '250px' }}
          >
            <img
              src={currentImage}
              alt={product.name}
              className="card-img-top h-100 object-fit-cover"
              style={{
                transition: 'transform 0.3s ease-in-out, opacity 0.2s ease-in-out',
                transform: isHovering ? 'scale(1.05)' : 'scale(1)',
                opacity: 1
              }}
              loading="lazy"
              onError={handleError}
            />

            <div className="position-absolute top-0 start-0 p-2">
              <span className="badge bg-dark bg-opacity-75 text-white">
                {product.thcaPercent}% THCA
              </span>
            </div>

            <div className="position-absolute bottom-0 start-0 p-2">
              {product.badges.map((badge, i) => (
                <span key={i} className={`badge ${getBadgeClass(badge)} me-1`}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Link>

        <div className="card-body d-flex flex-column">
          <Link to={`/product/${product.slug}`} className="text-decoration-none text-dark">
            <h6 className="card-title fw-bold mb-2">{product.name}</h6>
          </Link>

          <p className="card-text text-muted small flex-grow-1 mb-2">
            {product.shortDescription}
          </p>

          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span className="h5 mb-0 text-success fw-bold">
              {formatPrice(product.price)}
            </span>
            <small className="text-muted">{product.weight}</small>
          </div>

          <div className="mt-2">
            <small className="text-muted">
              {product.stock > 0 ? (
                <span className="text-success">✓ In Stock ({product.stock})</span>
              ) : (
                <span className="text-danger">Out of Stock</span>
              )}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
