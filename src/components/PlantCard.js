import React, { useState } from "react";

function PlantCard({ plant }) {
  const { image, name, price } = plant;
  const [isInStock, setIsInStock] = useState(true);

  const handleStockSwitch = () => {
    setIsInStock(!isInStock);
  };
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={handleStockSwitch} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleStockSwitch}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
