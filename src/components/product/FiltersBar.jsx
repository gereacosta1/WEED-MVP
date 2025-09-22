import React from 'react';

const FiltersBar = ({ filters, onFiltersChange, categories, productCount }) => {
  const handleCategoryChange = (e) => {
    onFiltersChange({
      ...filters,
      category: e.target.value
    });
  };

  const handleMinPriceChange = (e) => {
    onFiltersChange({
      ...filters,
      minPrice: e.target.value ? parseFloat(e.target.value) : ''
    });
  };

  const handleMaxPriceChange = (e) => {
    onFiltersChange({
      ...filters,
      maxPrice: e.target.value ? parseFloat(e.target.value) : ''
    });
  };

  const handleMinThcaChange = (e) => {
    onFiltersChange({
      ...filters,
      minThca: e.target.value ? parseFloat(e.target.value) : ''
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      category: '',
      minPrice: '',
      maxPrice: '',
      minThca: ''
    });
  };

  return (
    <div className="bg-light p-4 rounded-3 mb-4 shadow-sm">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <div className="row g-3">
            <div className="col-md-3">
              <label htmlFor="categoryFilter" className="form-label small fw-bold">
                Category
              </label>
              <select
                id="categoryFilter"
                className="form-select form-select-sm"
                value={filters.category}
                onChange={handleCategoryChange}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="col-md-3">
              <label htmlFor="minPrice" className="form-label small fw-bold">
                Min Price
              </label>
              <input
                type="number"
                id="minPrice"
                className="form-control form-control-sm"
                placeholder="$0"
                value={filters.minPrice}
                onChange={handleMinPriceChange}
                min="0"
                step="0.01"
              />
            </div>
            
            <div className="col-md-3">
              <label htmlFor="maxPrice" className="form-label small fw-bold">
                Max Price
              </label>
              <input
                type="number"
                id="maxPrice"
                className="form-control form-control-sm"
                placeholder="$100"
                value={filters.maxPrice}
                onChange={handleMaxPriceChange}
                min="0"
                step="0.01"
              />
            </div>
            
            <div className="col-md-3">
              <label htmlFor="minThca" className="form-label small fw-bold">
                Min THCA %
              </label>
              <input
                type="number"
                id="minThca"
                className="form-control form-control-sm"
                placeholder="0%"
                value={filters.minThca}
                onChange={handleMinThcaChange}
                min="0"
                max="100"
                step="0.1"
              />
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
          <div className="d-flex align-items-center justify-content-lg-end gap-3">
            <span className="text-muted small">
              {productCount} product{productCount !== 1 ? 's' : ''} found
            </span>
            <button
              onClick={clearFilters}
              className="btn btn-outline-secondary btn-sm"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;