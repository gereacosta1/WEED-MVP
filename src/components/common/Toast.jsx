import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', show, onHide, duration = 3000 }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, onHide, duration]);

  if (!show) return null;

  const bgClass = type === 'success' ? 'bg-success' : 'bg-danger';

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 9999 }}>
      <div className={`toast show ${bgClass} text-white`} role="alert">
        <div className="toast-body d-flex justify-content-between align-items-center">
          <span>{message}</span>
          <button 
            type="button" 
            className="btn-close btn-close-white" 
            onClick={onHide}
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Toast;