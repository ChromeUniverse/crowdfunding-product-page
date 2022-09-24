import React from 'react'
import ModalCard from './ModalCard'
import closeIcon from '../assets/icon-close-modal.svg'

function Modal({
  selected,
  closeModal,
  tiers,
  handleCheckModal,
  pledgeAmount,
  handlePledgeAmountChange,
  handleModalCardClick,
  error,
  refs,
  modalRef
}) {

  const toggleSelected = (id) => handleCheckModal(id);
  
  // const handlePledgeAmountChange = (event) => handlePledgeAmountChange(event);

  return (
    <div ref={modalRef} className="modal-container">
      <div className="modal">
        <img
          className="modal-close"
          src={closeIcon}
          alt=""
          onClick={closeModal}
        />
        <h2 className="modal-title">Back this project</h2>
        <p className="modal-desc">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        {tiers.map((tier, index) => (
          <ModalCard
            refProp={refs[index]}
            id={tier.id}
            // key={nanoid()}
            selected={tier.id === selected}
            toggleSelected={toggleSelected}
            title={tier.title}
            price={tier.price}
            quantity={tier.quantity}
            text={tier.text}
            pledgeAmount={pledgeAmount}
            handlePledgeAmountChange={handlePledgeAmountChange}
            handleModalCardClick={handleModalCardClick}
            error={error}
          />
        ))}
      </div>
    </div>
  );
}

export default Modal