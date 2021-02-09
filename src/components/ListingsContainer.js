import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, isFavorited, setIsFavorited, onToggleFavorite }) {

  const listingComponents = listings.map((listing) => {
    return (
      <ListingCard 
        key={listing.id} 
        listing={listing} 
        isFavorited={isFavorited}
        setIsFavorited={setIsFavorited}
        onToggleFavorite={onToggleFavorite} 
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        {listingComponents}
      </ul>
    </main>
  );
}

export default ListingsContainer;
