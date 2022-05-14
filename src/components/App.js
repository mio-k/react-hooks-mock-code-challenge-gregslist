import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings]= useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(items => setListings(items))
  }, [])

  function handleDeleteClick(itemId){
    console.log(itemId)
    const newListings = listings.filter(item => item.id !== itemId)
    setListings(newListings)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings = {listings} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
