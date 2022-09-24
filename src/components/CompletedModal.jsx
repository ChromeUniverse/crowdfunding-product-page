import React, { useEffect, useRef } from 'react'
import iconCheck from '../assets/icon-check.svg'

function CompletedModal({ closeCompletedModal }) {

  const completedModalRef = useRef(null);
  useEffect(() => {
    completedModalRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    })
  }, []);

  return (
    <div className="modal-container">
      <div ref={completedModalRef} className="completed-modal">
      {/* <div className="completed-modal"> */}
        <img className="completed-modal-icon" src={iconCheck} alt="" />
        <h1 className="completed-modal-title">Thanks for your support!</h1>
        <p className="completed-modal-text">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button className="completed-modal-btn" onClick={closeCompletedModal}>
          Got it!
        </button>
      </div>
    </div>
  );
}

export default CompletedModal