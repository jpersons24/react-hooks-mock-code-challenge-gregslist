import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [isFavorited, setIsFavorited] = useState(false)

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => {
      const allListings = data.map(listing => {
        return { ...listing, favorite: false }
      })
      setListings(allListings)
    })
  }, [])

  function toggleFavorite(listingObject) {
    console.log(listingObject)
  }


  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} isFavorited={isFavorited} onToggleFavorite={toggleFavorite} setIsFavorited={setIsFavorited} />
    </div>
  );
}

export default App;
