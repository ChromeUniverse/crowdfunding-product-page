import React from 'react'

import logo from '../assets/logo-mastercraft.svg'
import bookmark from '../assets/icon-bookmark.svg'

function Overview({ bookmarked, toggleBookmarked, openModal }) {
  return (
    <section className="overview">
      <img className="overview-icon" src={logo} alt="" />
      <h2 className="overview-title">Mastercraft Bamboo Monitor Riser</h2>
      <h3 className="overview-subtitle">
        A beautiful and handcrafted monitor stand to reduce neck and eye strain.
      </h3>

      <div className="overview-footer">
        <button className="overview-footer-btn" onClick={openModal}>
          Back this project
        </button>
        <div className="overview-footer-bookmark" onClick={toggleBookmarked}>
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none">
              <circle
                fill={bookmarked ? "#147b74" : "#2F2F2F"}
                cx="28"
                cy="28"
                r="28"
              />
              <path
                fill={bookmarked ? "#ffffff" : "#B1B1B1"}
                d="M23 19v18l5-5.058L33 37V19z"
              />
            </g>
          </svg>
          <p
            className={`overview-footer-bookmark-text ${
              bookmarked ? "overview-footer-bookmark-text-highlight" : ""
            }`}
          >
            {bookmarked ? "Bookmarked" : "Bookmark"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Overview