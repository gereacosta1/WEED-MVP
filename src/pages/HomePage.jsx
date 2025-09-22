import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Truck } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import productsData from '../data/products.json';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setFeaturedProducts(productsData.slice(0, 4));
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-success text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="py-5">
                <h1 className="display-4 fw-bold mb-4">
                  Premium THCA Products
                  <span className="d-block text-warning">Legal in Florida</span>
                </h1>
                <p className="lead mb-4">
                  Discover our curated selection of high-quality THCA flower, pre-rolls, 
                  and vape cartridges. Lab-tested for purity and potency.
                </p>
                <div className="d-flex gap-3 mb-4">
                  <span className="badge bg-warning text-dark fs-6 px-3 py-2">21+ Only</span>
                  <span className="badge bg-light text-dark fs-6 px-3 py-2">Lab Tested</span>
                  <span className="badge bg-info fs-6 px-3 py-2">Florida Legal</span>
                </div>
                <Link to="/shop" className="btn btn-warning btn-lg px-4 py-3">
                  Shop Now <ArrowRight className="ms-2" size={20} />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img 
                  src="./public/img/cogollo6.jpg" 
                  alt="Premium Cannabis"
                  className="img-fluid rounded-3 shadow-lg"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <Leaf className="text-success" size={32} />
                </div>
                <h5 className="fw-bold">Premium Quality</h5>
                <p className="text-muted">
                  Hand-selected strains with high THCA content and exceptional terpene profiles.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <Shield className="text-success" size={32} />
                </div>
                <h5 className="fw-bold">Lab Tested</h5>
                <p className="text-muted">
                  Every product is third-party tested for potency, pesticides, and heavy metals.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <Truck className="text-success" size={32} />
                </div>
                <h5 className="fw-bold">Fast Delivery</h5>
                <p className="text-muted">
                  Quick and discreet delivery throughout Florida for customers 21+.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">Featured Products</h2>
            <p className="text-muted">Discover our most popular THCA products</p>
          </div>
          
          <ProductGrid products={featuredProducts} loading={loading} />
          
          <div className="text-center mt-5">
            <Link to="/shop" className="btn btn-outline-success btn-lg">
              View All Products <ArrowRight className="ms-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-4 bg-warning">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center">
                <Shield className="text-dark me-3" size={24} />
                <div>
                  <h6 className="mb-1 text-dark fw-bold">Age Verification Required</h6>
                  <p className="mb-0 text-dark">
                    You must be 21+ to purchase THCA products. Valid Florida ID required.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/legal" className="btn btn-dark">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;