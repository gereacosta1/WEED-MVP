import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice, calculateTax, calculateTotal } from '../utils/price';
import { validateEmail, validateZip, validateRequired, validateAge, validateTerms } from '../utils/validators';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'FL',
    zip: '',
    ageConfirm: false,
    termsAccepted: false
  });

  const subtotal = getCartTotal();
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal);

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateRequired(formData.firstName)) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!validateRequired(formData.lastName)) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!validateRequired(formData.email)) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!validateRequired(formData.phone)) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!validateRequired(formData.address)) {
      newErrors.address = 'Address is required';
    }
    
    if (!validateRequired(formData.city)) {
      newErrors.city = 'City is required';
    }
    
    if (!validateRequired(formData.zip)) {
      newErrors.zip = 'ZIP code is required';
    } else if (!validateZip(formData.zip)) {
      newErrors.zip = 'Please enter a valid 5-digit ZIP code';
    }
    
    if (!validateAge(formData.ageConfirm)) {
      newErrors.ageConfirm = 'You must confirm you are 21 or older';
    }
    
    if (!validateTerms(formData.termsAccepted)) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simulate processing time
    setTimeout(() => {
      const orderData = {
        orderId: `THCA-${Date.now()}`,
        items: cart,
        customer: formData,
        totals: { subtotal, tax, total },
        timestamp: new Date().toISOString()
      };

      // Store order data for success page
      localStorage.setItem('lastOrder', JSON.stringify(orderData));
      
      // Clear cart
      clearCart();
      
      // Navigate to success page
      navigate('/success');
    }, 2000);
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-8">
          <h1 className="display-6 fw-bold mb-4">Checkout</h1>
          
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Personal Information</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Delivery Address</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>
                
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="city" className="form-label">
                      City *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                    {errors.city && (
                      <div className="invalid-feedback">{errors.city}</div>
                    )}
                  </div>
                  
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <select
                      className="form-select"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      disabled
                    >
                      <option value="FL">Florida</option>
                    </select>
                  </div>
                  
                  <div className="col-md-4 mb-3">
                    <label htmlFor="zip" className="form-label">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="12345"
                    />
                    {errors.zip && (
                      <div className="invalid-feedback">{errors.zip}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Requirements */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Legal Requirements</h5>
              </div>
              <div className="card-body">
                <div className="form-check mb-3">
                  <input
                    className={`form-check-input ${errors.ageConfirm ? 'is-invalid' : ''}`}
                    type="checkbox"
                    id="ageConfirm"
                    name="ageConfirm"
                    checked={formData.ageConfirm}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="ageConfirm">
                    <Shield className="me-2" size={16} />
                    I confirm that I am 21 years of age or older *
                  </label>
                  {errors.ageConfirm && (
                    <div className="invalid-feedback d-block">{errors.ageConfirm}</div>
                  )}
                </div>
                
                <div className="form-check mb-3">
                  <input
                    className={`form-check-input ${errors.termsAccepted ? 'is-invalid' : ''}`}
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="termsAccepted">
                    I accept the <a href="/legal" target="_blank">Terms and Conditions</a> *
                  </label>
                  {errors.termsAccepted && (
                    <div className="invalid-feedback d-block">{errors.termsAccepted}</div>
                  )}
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="btn btn-success btn-lg w-100"
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" />
                  Processing Order...
                </>
              ) : (
                <>
                  <CreditCard className="me-2" size={20} />
                  Complete Order (Mock Checkout)
                </>
              )}
            </button>
          </form>
        </div>
        
        <div className="col-lg-4">
          <div className="card shadow-sm sticky-top" style={{ top: '100px' }}>
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              {cart.map((item) => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <small className="fw-bold">{item.name}</small>
                    <br />
                    <small className="text-muted">Qty: {item.quantity}</small>
                  </div>
                  <small className="fw-bold">
                    {formatPrice(item.price * item.quantity)}
                  </small>
                </div>
              ))}
              
              <hr />
              
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
              
              <div className="alert alert-warning">
                <small>
                  <strong>Demo Checkout:</strong> No actual payment will be processed. 
                  This is a demonstration of the checkout flow.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;