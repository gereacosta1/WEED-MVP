import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Toast from '../common/Toast';

const AddToCartButton = ({ product, quantity = 1, className = '', disabled = false }) => {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (disabled || product.stock === 0) return;

    setIsAdding(true);
    
    // Simulate a brief loading state
    setTimeout(() => {
      addToCart(product, quantity);
      setShowToast(true);
      setIsAdding(false);
    }, 300);
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        disabled={disabled || product.stock === 0 || isAdding}
        className={`btn btn-success d-flex align-items-center gap-2 ${className}`}
      >
        <ShoppingCart size={18} />
        {isAdding ? (
          <>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Adding...
          </>
        ) : (
          'Add to Cart'
        )}
      </button>

      <Toast
        message={`${product.name} added to cart!`}
        type="success"
        show={showToast}
        onHide={() => setShowToast(false)}
      />
    </>
  );
};

export default AddToCartButton;