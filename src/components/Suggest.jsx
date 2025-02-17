import React, { useState } from "react";

function Suggest() {
  const [watches, setWatches] = useState([
    {
      name: "Sport Shoes",
      price: "₹1,099",
      image: "https://images.unsplash.com/photo-1584590069631-1c180f90a54c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0cyUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      name: "Batmitan",
      price: "₹1,499",
      image: "https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwb3J0cyUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      name: "Table Tennis",
      price: "₹899",
      image: "https://plus.unsplash.com/premium_photo-1709048991273-40bfaff7fe54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNwb3J0cyUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
  ]);

  function SuggestCard({ images }) {
    return (
      <>
        <div className="suggest-card">
          <div className="suggest-card-heading">
            <p>Suggested For You</p>
            <button className="exlore-more">{">"}</button>
          </div>
          <div className="suggest-items-container">
            <div className="box1 item">
              <img className="suggest-img" src={images[0].image} alt="" />
              <p>{images[0].name}</p>
              <p>{images[0].price}</p>
            </div>
            <div className="item box2">
              <img className="suggest-img" src={images[1].image} alt="" />
              <p>{images[1].name}</p>
              <p>{images[1].price}</p>
            </div>
            <div className="item box3">
              <img className="suggest-img" src={images[2].image} alt="" />
              <p>{images[2].name}</p>
              <p>{images[2].price}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="suggest-container">
        <SuggestCard images={watches} />
        <SuggestCard images={watches} />
        <SuggestCard images={watches} />
      </div>
    </>
  );
}

export default Suggest;
