import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => {
      const allListings = data
      setListings(allListings)
    })
  }, [])

  function handleListingDelete(id) {
    const updatedListings = listings.filter((listing) => (id !== listing.id))
    setListings(updatedListings)
  }

  const displayedListings = listings.filter((listing) => 
    listing.description.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer listings={displayedListings} onDeleteListing={handleListingDelete} />
    </div>
  );
}

export default App;
