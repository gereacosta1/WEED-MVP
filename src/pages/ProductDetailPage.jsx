import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Shield, Leaf } from 'lucide-react';
import AddToCartButton from '../components/product/AddToCartButton';
import { formatPrice } from '../utils/price';
import productsData from '../data/products.json';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const foundProduct = productsData.find(p => p.slug === slug);
      setProduct(foundProduct);
      if (foundProduct) {
        setSelectedImage(foundProduct.images.primary);
      }
      setLoading(false);
    }, 300);
  }, [slug]);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const getBadgeColor = (badge) => {
    switch (badge.toLowerCase()) {
      case 'indica': return 'bg-purple';
      case 'sativa': return 'bg-warning';
      case 'hybrid': return 'bg-info';
      default: return 'bg-success';
    }
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1));
    setQuantity(value);
  };

  return (
    <div className="container py-4">
      <div className="mb-4">
        <Link to="/shop" className="btn btn-outline-secondary">
          <ArrowLeft size={18} className="me-2" />
          Back to Shop
        </Link>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          {/* Image Gallery */}
          <div className="sticky-top" style={{ top: '100px' }}>
            <div className="mb-3">
              <img
                src={selectedImage}
                alt={product.name}
                className="img-fluid rounded-3 shadow-sm w-100"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>
            <div className="row g-2">
              <div className="col-6">
                <img
                  src={product.images.primary}
                  alt={`${product.name} - Primary`}
                  className={`img-fluid rounded-2 cursor-pointer border ${selectedImage === product.images.primary ? 'border-success border-3' : 'border-light'}`}
                  style={{ height: '100px', objectFit: 'cover', cursor: 'pointer' }}
                  onClick={() => setSelectedImage(product.images.primary)}
                />
              </div>
              <div className="col-6">
                <img
                  src={product.images.hover}
                  alt={`${product.name} - Alternate`}
                  className={`img-fluid rounded-2 cursor-pointer border ${selectedImage === product.images.hover ? 'border-success border-3' : 'border-light'}`}
                  style={{ height: '100px', objectFit: 'cover', cursor: 'pointer' }}
                  onClick={() => setSelectedImage(product.images.hover)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          {/* Product Info */}
          <div className="mb-3">
            {product.badges.map((badge, index) => (
              <span 
                key={index} 
                className={`badge ${getBadgeColor(badge)} me-2 text-white`}
              >
                {badge}
              </span>
            ))}
          </div>

          <h1 className="display-6 fw-bold mb-3">{product.name}</h1>
          <p className="text-muted mb-4">{product.shortDescription}</p>

          {/* Key Stats */}
          <div className="row g-3 mb-4">
            <div className="col-4">
              <div className="bg-success bg-opacity-10 p-3 rounded-3 text-center">
                <div className="fw-bold text-success">{product.thcaPercent}%</div>
                <small className="text-muted">THCA</small>
              </div>
            </div>
            <div className="col-4">
              <div className="bg-info bg-opacity-10 p-3 rounded-3 text-center">
                <div className="fw-bold text-info">{product.weight}</div>
                <small className="text-muted">Weight</small>
              </div>
            </div>
            <div className="col-4">
              <div className="bg-warning bg-opacity-10 p-3 rounded-3 text-center">
                <div className="fw-bold text-warning">{product.stock}</div>
                <small className="text-muted">In Stock</small>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-4">
            <span className="display-5 fw-bold text-success">
              {formatPrice(product.price)}
            </span>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="row g-3 mb-4">
            <div className="col-4">
              <label htmlFor="quantity" className="form-label fw-bold">Quantity</label>
              <input
                type="number"
                id="quantity"
                className="form-control"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <div className="col-8 d-flex align-items-end">
              <AddToCartButton 
                product={product}
                quantity={quantity}
                className="w-100"
                disabled={product.stock === 0}
              />
            </div>
          </div>

          {/* Lab Results */}
          <div className="mb-4">
            <a 
              href={product.labResultsUrl} 
              className="btn btn-outline-success"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Shield size={18} className="me-2" />
              View Lab Results
              <ExternalLink size={16} className="ms-2" />
            </a>
          </div>

          {/* Stock Status */}
          <div className="alert alert-info mb-4">
            <Leaf className="me-2" size={18} />
            {product.stock > 0 ? (
              <>
                <strong>In Stock!</strong> {product.stock} units available
              </>
            ) : (
              <>
                <strong>Out of Stock</strong> - Check back soon
              </>
            )}
          </div>

          {/* Description */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Description</h5>
            <p className="text-muted">{product.description}</p>
          </div>

          {/* Category */}
          <div className="mb-4">
            <h6 className="fw-bold mb-2">Category</h6>
            <span className="badge bg-light text-dark">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;