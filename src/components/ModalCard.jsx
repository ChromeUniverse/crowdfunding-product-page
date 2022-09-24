import React from "react";

function ModalCard({
  refProp,
  id,
  selected,
  toggleSelected,
  title,
  price,
  quantity,
  text,
  pledgeAmount,
  handlePledgeAmountChange,
  handleModalCardClick,
  error
}) {
  return (
    <div
      ref={refProp}
      className={`
        modal-card
        ${selected ? "modal-card-selected" : ""} 
        ${quantity === 0 ? "modal-card-hidden" : ""}
      `}
    >
      <div className="modal-card-header">
        <label className="modal-card-checkbox-container">
          <input
            className="modal-card-checkbox"
            type="checkbox"
            checked={selected}
            onChange={() => toggleSelected(id)}
          />
          <span className="modal-card-checkbox-checkmark"></span>
        </label>
        <p className="modal-card-title">{title}</p>

        {/* no price provided */}
        {price !== false && (
          <p className="modal-card-pledge">Pledge ${price} or more</p>
        )}

        {/* no quantity provided */}
        {quantity !== false && (
          <div className="modal-card-quantity">
            <p className="modal-card-quantity-highlight">{quantity}</p>
            <p>left</p>
          </div>
        )}
      </div>

      <p className="modal-card-text">{text}</p>

      {/* only render divider and footer if selected */}
      {selected && (
        <>
          <hr className="modal-card-divider" />
          <div className="modal-card-footer">
            <p className="modal-card-footer-prompt">Enter your pledge</p>
            <p className="modal-card-footer-error">{error}</p>
            <div className="modal-card-footer-input-container">
              <input
                className={`modal-card-footer-input ${
                  error ? "modal-card-footer-input-error" : ""
                }`}
                type="text"
                value={pledgeAmount}
                onChange={handlePledgeAmountChange}
              />
              <p className="modal-card-footer-input-placeholder">$</p>
            </div>
            <button
              className="modal-card-footer-btn"
              onClick={() => handleModalCardClick(id, pledgeAmount)}
            >
              Continue
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalCard;
