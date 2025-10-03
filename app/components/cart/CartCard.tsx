'use client';
import './cart.scss';
import { CartCardProps } from './FlowerInterface';
import { useState } from 'react';


function CartCard({ flower, trash }: CartCardProps) {
  const [quantity, setQuantity] = useState(1);

  function handleAdd() {
    setQuantity(prev => prev + 1);
  }

  function handleMinus() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
    if (quantity === 1) {
      setQuantity(1);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={flower.imageUrl} alt={flower.name} className="product-image" />
      </div>

      <div className="product-details" style={{ flex: 1 }}>
        <div className="product-header">
          <h2 className="product-title">{flower.name}</h2>
          {trash ? <button className="delete-btn">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
          </button> : null}
        </div>

        <div className="product-info">
          <p className="product-code-label">Код: <span>{flower.id}</span></p>
          <p className="product-quantity-label">Кількість:</p>
          <div className="quantity-control">
            <button className="quantity-btn" onClick={handleMinus}>−</button>
            <input
              type="number"
              className="quantity-input"
              value={quantity}
              onChange={handleInputChange}
              min="1"
            />
            <button className="quantity-btn" onClick={handleAdd}>+</button>
          </div>
        </div>

        <div className="product-price">
          {flower.price} {flower.currency}
        </div>
      </div>
    </div>
  );
}


export default CartCard;