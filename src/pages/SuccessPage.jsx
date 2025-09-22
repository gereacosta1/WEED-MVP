import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { formatPrice } from '../utils/price';

const SuccessPage = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem('lastOrder');
    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder));
      // Clear the stored order after loading
      localStorage.removeItem('lastOrder');
    } else {
      // If no order data, redirect to cart
      navigate('/cart');
    }
  }, [navigate]);

  if (!orderData) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Success Header */}
          <div className="text-center mb-5">
            <div className="mb-4">
              <CheckCircle size={80} className="text-success" />
            </div>
            <h1 className="display-5 fw-bold text-success mb-3">
              Order Confirmed!
            </h1>
            <p className="lead text-muted">
              Thank you for your order. We'll send you a confirmation email shortly.
            </p>
          </div>

          {/* Order Summary Card */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-success text-white">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Order Summary</h5>
                <span className="badge bg-light text-dark">
                  {orderData.orderId}
                </span>
              </div>
            </div>
            <div className="card-body">
              {/* Customer Information */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <h6 className="fw-bold mb-2">Customer Information</h6>
                  <p className="mb-1">
                    {orderData.customer.firstName} {orderData.customer.lastName}
                  </p>
                  <p className="mb-1 text-muted">{orderData.customer.email}</p>
                  <p className="mb-0 text-muted">{orderData.customer.phone}</p>
                </div>
                <div className="col-md-6">
                  <h6 className="fw-bold mb-2">Delivery Address</h6>
                  <p className="mb-1">{orderData.customer.address}</p>
                  <p className="mb-0 text-muted">
                    {orderData.customer.city}, {orderData.customer.state} {orderData.customer.zip}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <h6 className="fw-bold mb-3">Order Items</h6>
              {orderData.items.map((item) => (
                <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                  <img
                    src={item.images.primary}
                    alt={item.name}
                    className="rounded me-3"
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{item.name}</h6>
                    <p className="text-muted mb-0 small">{item.shortDescription}</p>
                    <div className="d-flex gap-1 mt-1">
                      {item.badges.map((badge, index) => (
                        <span key={index} className="badge bg-light text-dark small">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="fw-bold">{formatPrice(item.price * item.quantity)}</div>
                    <small className="text-muted">Qty: {item.quantity}</small>
                  </div>
                </div>
              ))}

              {/* Order Totals */}
              <div className="row justify-content-end">
                <div className="col-md-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>{formatPrice(orderData.totals.subtotal)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax (7%):</span>
                    <span>{formatPrice(orderData.totals.tax)}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <strong>Total:</strong>
                    <strong className="text-success">{formatPrice(orderData.totals.total)}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="card border-success mb-4">
            <div className="card-body">
              <div className="d-flex align-items-start">
                <Package className="text-success me-3 mt-1" size={24} />
                <div>
                  <h6 className="fw-bold mb-2">What's Next?</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      ✓ Order confirmation email sent to {orderData.customer.email}
                    </li>
                    <li className="mb-2">
                      📦 Your order will be processed within 1-2 business days
                    </li>
                    <li className="mb-2">
                      🚚 Tracking information will be provided once shipped
                    </li>
                    <li className="mb-0">
                      📞 Questions? Contact us at support@thcastore-fl.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <Link to="/shop" className="btn btn-success btn-lg px-4">
              Continue Shopping <ArrowRight className="ms-2" size={18} />
            </Link>
          </div>

          {/* Demo Notice */}
          <div className="alert alert-warning text-center mt-4">
            <strong>Demo Notice:</strong> This is a demonstration checkout. 
            No actual order has been placed and no payment was processed.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;