import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice, calculateTax, calculateTotal } from '../utils/price';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();
  
  const subtotal = getCartTotal();
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal);

  if (cart.length === 0) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="mb-4">
              <ShoppingBag size={64} className="text-muted" />
            </div>
            <h2 className="fw-bold mb-3">Your Cart is Empty</h2>
            <p className="text-muted mb-4">
              Discover our premium THCA products and start shopping!
            </p>
            <Link to="/shop" className="btn btn-success btn-lg">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-8">
          <h1 className="display-6 fw-bold mb-4">Shopping Cart</h1>
          
          <div className="card shadow-sm">
            <div className="card-body">
              {cart.map((item) => (
                <div key={item.id} className="row align-items-center py-3 border-bottom">
                  <div className="col-md-2">
                    <img
                      src={item.images.primary}
                      alt={item.name}
                      className="img-fluid rounded-3"
                      style={{ height: '80px', objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div className="col-md-4">
                    <h6 className="fw-bold mb-1">{item.name}</h6>
                    <p className="text-muted small mb-1">{item.shortDescription}</p>
                    <div className="d-flex gap-1">
                      {item.badges.map((badge, index) => (
                        <span key={index} className="badge bg-light text-dark small">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="col-md-2 text-center">
                    <div className="fw-bold text-success">
                      {formatPrice(item.price)}
                    </div>
                    <small className="text-muted">{item.weight}</small>
                  </div>
                  
                  <div className="col-md-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="mx-3 fw-bold">{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="col-md-1 text-center">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
            <Link to="/shop" className="btn btn-outline-secondary">
              ← Continue Shopping
            </Link>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card shadow-sm sticky-top" style={{ top: '100px' }}>
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (7%):</span>
                <span>{formatPrice(tax)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong className="text-success">{formatPrice(total)}</strong>
              </div>
              
              <Link to="/checkout" className="btn btn-success w-100 mb-3">
                Proceed to Checkout
              </Link>
              
              <div className="text-center">
                <small className="text-muted">
                  Secure checkout • 21+ required • Florida only
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;