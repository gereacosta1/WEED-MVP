import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/product/ProductGrid';
import FiltersBar from '../components/product/FiltersBar';
import productsData from '../data/products.json';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    minThca: ''
  });

  const categories = [...new Set(productsData.map(product => product.category))];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProducts(productsData);
      setFilteredProducts(productsData);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Filter by price range
    if (filters.minPrice !== '') {
      filtered = filtered.filter(product => product.price >= filters.minPrice);
    }
    if (filters.maxPrice !== '') {
      filtered = filtered.filter(product => product.price <= filters.maxPrice);
    }

    // Filter by THCA percentage
    if (filters.minThca !== '') {
      filtered = filtered.filter(product => product.thcaPercent >= filters.minThca);
    }

    setFilteredProducts(filtered);
  }, [products, filters]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <div className="mb-4">
            <h1 className="display-6 fw-bold text-center mb-2">Shop THCA Products</h1>
            <p className="text-muted text-center">
              Browse our premium selection of lab-tested THCA products
            </p>
          </div>

          <FiltersBar 
            filters={filters}
            onFiltersChange={handleFiltersChange}
            categories={categories}
            productCount={filteredProducts.length}
          />

          <ProductGrid products={filteredProducts} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;