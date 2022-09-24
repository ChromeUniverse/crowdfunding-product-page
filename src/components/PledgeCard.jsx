import React from "react";

function PledgeCard({ id, title, price, quantity, text, handlePledgeCardClick }) {

  return (
    <div
      className={`pledge-card ${quantity === 0 ? "pledge-card-hidden" : ""}`}
    >
      <div className="pledge-card-header">
        <h3 className="pledge-card-title">{title}</h3>
        <p className="pledge-card-price">Pledge ${price} or more</p>
      </div>
      <p className="pledge-card-text">{text}</p>
      <div className="pledge-card-footer">
        <div className="pledge-card-quantity">
          <span className="pledge-card-quantity-highlight">{quantity}</span>
          <p>left</p>
        </div>
        <button
          className={`pledge-card-btn ${
            quantity === 0 ? "pledge-card-btn-hidden" : ""
          }`}
          onClick={() => handlePledgeCardClick(id)}
        >
          {quantity === 0 ? "Out of stock" : "Select Reward"}
        </button>
      </div>
    </div>
  );
}

export default PledgeCard;
