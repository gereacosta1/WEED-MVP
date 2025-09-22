import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="text-success">🌿 THCA Store FL</h5>
            <p className="text-muted mb-2">
              Premium THCA products for Florida residents 21+
            </p>
            <div className="d-flex gap-2 mb-3">
              <span className="badge bg-warning text-dark">21+ Only</span>
              <span className="badge bg-info">Demo Only</span>
              <span className="badge bg-secondary">Florida Legal</span>
            </div>
          </div>
          
          <div className="col-md-6">
            <h6 className="text-success">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/legal" className="text-light text-decoration-none">Legal & FAQ</Link></li>
              <li><Link to="/shop" className="text-light text-decoration-none">Shop Products</Link></li>
              <li><a href="#" className="text-light text-decoration-none">Lab Results</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-secondary" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-muted mb-0">
              &copy; 2024 THCA Store FL. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <small className="text-warning fw-bold">
              DEMO SITE • NOT FOR ACTUAL PURCHASES
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;