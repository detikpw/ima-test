import React from 'react';

const portfolioItem = ({ icon, label, description }) => (
  <div className="m-2 p-4 bg-alt-2 w-1/2 portfolio-item">
    {icon}
    <div className="mt-4 text-red-500">
      {label}
    </div>
    <p className="mt-2 text-sm">
      {description}
    </p>
  </div>
);

export default portfolioItem;