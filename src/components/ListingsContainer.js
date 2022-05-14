import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDeleteClick}) {

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => {
          return (
          <ListingCard key={listing.id} listing={listing} handleDeleteClick={handleDeleteClick}/>
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
