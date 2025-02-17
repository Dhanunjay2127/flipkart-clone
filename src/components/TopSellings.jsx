import React, { useState } from "react";
import img from "../images/image.png";

function TopSellings() {
  const [images] = useState([
    {
      image: "https://img.freepik.com/premium-photo/smartphone-bed-holiday-concept_36743-308.jpg?w=740",
      name: "Smartphone",
      price: "₹12,999",
    },
    {
      image: "https://img.freepik.com/premium-photo/paper-boxes-trolley-with-credit-card_36743-391.jpg?w=740",
      name: "Shopping Cart",
      price: "₹499",
    },
    {
      image: "https://img.freepik.com/premium-photo/savings-plans-housing-loans-market-concept_36743-395.jpg?w=740",
      name: "Savings Plan",
      price: "₹999",
    },
  ]);
  return (
    <>
      <div className="top-selling-container">
        <div className="suggest">
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
        </div>
        <div className="selling-adv">
          <img className="selling-img" src={img} />
        </div>
      </div>
    </>
  );
}

export default TopSellings;
