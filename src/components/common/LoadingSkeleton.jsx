import React from 'react';

export const ProductCardSkeleton = () => {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="placeholder-wave">
          <div className="placeholder bg-light" style={{ height: '250px' }}></div>
        </div>
        <div className="card-body">
          <div className="placeholder-wave">
            <span className="placeholder col-8 mb-2"></span>
            <span className="placeholder col-6 mb-2"></span>
            <span className="placeholder col-4 mb-3"></span>
            <span className="placeholder col-12 mb-2"></span>
            <span className="placeholder col-7"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonGrid = ({ count = 8 }) => {
  return (
    <div className="row">
      {Array.from({ length: count }, (_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};