import React from 'react';

interface CardProps {
  coverImage: string;
  title: string;
  price: number;
  discountRate: number;
}

const Card: React.FC<CardProps> = ({ coverImage, title, price, discountRate }) => {


  return (
    <div className="card">
          <div className="image-container">
      <img className="card-image" src={coverImage} alt={title} />

          </div>
      <h3 className="title">{title}</h3>
      <p>
        <span className="original-price">{price.toFixed()}%</span>
        <span className="discounted-price">{discountRate.toLocaleString()}</span>
      </p>
      <p>
      </p>
    </div>
  );
};

export default Card;
