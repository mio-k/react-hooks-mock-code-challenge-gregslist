import React, { useState } from "react";

function ListingCard({listing, handleDeleteClick}) {

  const [star, setStar] = useState(false)
  // console.log(listing)

  function onDeleteClick() {
    let itemId = listing.id
    fetch(`http://localhost:6001/listings/${itemId}`, {
      method: "DELETE",
    });
    handleDeleteClick(itemId);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.escription} />
      </div>
      <div className="details">
        {star ? (
          <button className="emoji-button favorite active" onClick={()=>setStar(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setStar(true)}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={onDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
