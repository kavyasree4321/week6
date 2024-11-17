import React from 'react';


const ProductCard = ({ name, price, description }) => {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p><strong>Price:</strong> ${price}</p>
    </div>
  );
};

const task19 = () => {
  return (
    <div>
      <ProductCard 
        name="Product Name" 
        price={29.99} 
        description="This is a great product." 
      />
      <ProductCard 
        name="Another Product" 
        price={49.99} 
        description="This product is even better!" 
      />
    </div>
  );
};

export default task19;
