import React from 'react';
import ProductCard from './ProductCard';
import { SkeletonGrid } from '../common/LoadingSkeleton';

const ProductGrid = ({ products, loading = false }) => {
  if (loading) {
    return <SkeletonGrid />;
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="mb-4">
          <span className="display-1">🌿</span>
        </div>
        <h3 className="text-muted">No products found</h3>
        <p className="text-muted">Try adjusting your filters or browse all products.</p>
      </div>
    );
  }

  return (
    <div className="row">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;