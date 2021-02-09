import React from "react";

function ListingCard({ listing, isFavorited, setIsFavorited, onToggleFavorite }) {

  const { description, image, location } = listing

  function handleClick() {
    // change state variable 'isFavorited'
    // setIsFavorited(isFavorited => !isFavorited)
    // change value of 'isFavorited' state variable on click
    onToggleFavorite(listing)

  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active" onClick={handleClick}>
            ★
          </button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
