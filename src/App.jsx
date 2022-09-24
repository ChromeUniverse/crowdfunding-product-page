import React, { useEffect, useRef, useState } from 'react'

// components
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Stats from './components/Stats'
import Content from './components/Content'
import Modal from './components/Modal'
import CompletedModal from './components/CompletedModal'

// packages
import validator from 'validator'

function App() {

  // state
  const [bookmarked, setBookmarked] = useState(false);
  const [backed, setBacked] = useState(89914);
  const [backers, setBackers] = useState(5007);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(false);
  const [pledgeAmount, setPledgeAmount] = useState(0);
  const [error, setError] = useState('');
  const [showCompletedModal, setShowCompletedModal] = useState(false);

  // data
  const [tiers, setTiers] = useState([
    {
      id: 0,
      title: "Pledge with no reward",
      price: false,
      quantity: false,
      text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
    },
    {
      id: 1,
      title: "Bamboo Stand",
      price: 25,
      quantity: 101,
      text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
    },
    {
      id: 2,
      title: "Black Edition Stand",
      price: 75,
      quantity: 64,
      text: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
    },
    {
      id: 3,
      title: "Mahogany Special Edition",
      price: 200,
      quantity: 1,
      text: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
    }
  ])
  

  // refs
  const modalRef = useRef(null);

  // modal card refs
  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]

  // modal controllers
  const toggleBookmarked = () => setBookmarked(oldBookmarked => !oldBookmarked);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const openCompletedModal = () => setShowCompletedModal(true);
  const closeCompletedModal = () => setShowCompletedModal(false);

  // control selected modal card
  function handleCheckModal(id) {
    setSelected(oldSelected => {
      if (oldSelected === id) return false;
      if (tiers[id].quantity === 0) return oldSelected;
      return id;
    });
    setPledgeAmount(oldPledgeAmount => {
      if (tiers[id].quantity === 0) return oldPledgeAmount;
      return tiers[id].price === false ? 1 : tiers[id].price;
    });
  }

  // pledge amount input change handler
  function handlePledgeAmountChange(event) {    
    setPledgeAmount(oldPledgeAmount => {
      if (event.target.value === '') {
        return 0;
      } else if (validator.isNumeric(event.target.value)) {
        return Number(event.target.value);
      } else {
        return oldPledgeAmount;
      }
    })    
  }

  // pledge amount error handler
  useEffect(() => {
    if (pledgeAmount === 0) {
      setError("Can't be 0")
    }
    else if (selected !== false && pledgeAmount < tiers[selected].price) {
      setError(`Must be above $${tiers[selected].price}`)
    } else {
      setError('')
    }
  }, [pledgeAmount])
  
  // open modal from pledge cards with selected option
  function handlePledgeCardClick(id) {
    if (tiers[id].quantity === 0) return;
    openModal();
    handleCheckModal(id);
  }

  // scroll handler
  useEffect(() => {
    if (showModal && selected !== false) {
      refs[selected].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    } else if (showModal && selected === false) {
      modalRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }, [showModal, selected])
  
  // modal submisssion handler
  function handleModalCardClick(id, amount) {

    console.log('Clicked!');


    // ignore if there are any errors
    if (error) return;

    // update backers
    setBacked(oldBacked => oldBacked += amount);
    setBackers(5008);

    // update tiers and product quantities
    setTiers(oldTiers => {
      return oldTiers.map((oldTier) => {
        if (oldTier.id === id) {        
          return oldTier.quantity === false
            ? oldTier
            : { ...oldTier, quantity: oldTier.quantity - 1 };   
        } else {
          return oldTier;
        }
      })
    })

    // reset selection states
    setSelected(false);
    setPledgeAmount(0);
    setError('');

    // change modals
    closeModal();
    openCompletedModal();
  }
  
  return (
    <>
      <Navbar />
      <main className="main">
        <Overview
          bookmarked={bookmarked}
          toggleBookmarked={toggleBookmarked}
          openModal={openModal}
        />
        <Stats backed={backed} goal={100000} backers={backers} />
        <Content tiers={tiers} handlePledgeCardClick={handlePledgeCardClick} />
      </main>

      {showModal && (
        <Modal
          modalRef={modalRef}
          selected={selected}
          closeModal={closeModal}
          tiers={tiers}
          handleCheckModal={handleCheckModal}
          pledgeAmount={pledgeAmount}
          handlePledgeAmountChange={handlePledgeAmountChange}
          handleModalCardClick={handleModalCardClick}
          error={error}
          refs={refs}
        />
      )}

      {showCompletedModal && <CompletedModal closeCompletedModal={closeCompletedModal} />}
    </>
  );
}

export default App