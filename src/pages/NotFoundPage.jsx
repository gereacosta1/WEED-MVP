import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="mb-4">
            <span className="display-1">🌿</span>
          </div>
          
          <h1 className="display-4 fw-bold mb-3">404</h1>
          <h2 className="fw-bold mb-3">Page Not Found</h2>
          
          <p className="text-muted mb-4">
            Sorry, we couldn't find the page you're looking for. 
            The page might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/" className="btn btn-success">
              <Home size={18} className="me-2" />
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn btn-outline-secondary"
            >
              <ArrowLeft size={18} className="me-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;