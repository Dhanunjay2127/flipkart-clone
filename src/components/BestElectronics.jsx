import React, { useState } from "react";

function BestElectronics() {
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
    {
      image: "https://img.freepik.com/premium-photo/close-up-view-alarm-clock-morning-wake-up-concept_36743-312.jpg?w=740",
      name: "Alarm Clock",
      price: "₹1,299",
    },
    {
      image: "https://img.freepik.com/premium-photo/blank-screen-notebook-computer-smartphone-bed-holiday-concept_36743-310.jpg?w=740",
      name: "Laptop",
      price: "₹39,999",
    },
    {
      image: "https://img.freepik.com/premium-photo/online-shopping-ecommmerce-concept_36743-257.jpg?w=740",
      name: "E-Commerce",
      price: "₹2,499",
    },
    {
      image: "https://img.freepik.com/premium-photo/hand-hold-fried-chicken-isolated-white_36743-421.jpg?w=740",
      name: "Fried Chicken",
      price: "₹199",
    },
    {
      image: "https://img.freepik.com/free-photo/faceless-person-writing-notebook-near-stationery-laptop-table_23-2148128433.jpg?t=st=1739473010~exp=1739476610~hmac=ad28548d4b0c03422d2e98efba38b9d15f254547c294317cb53274423cc6d7f0&w=740",
      name: "Notebook",
      price: "₹799",
    },
  ]);

  const [index, setIndex] = useState(5);
  const [isSliding, setIsSliding] = useState(false);
  const render_images = images.slice(index - 5, index);
  function handleArrow(event) {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => setIsSliding(false), 1000);

      if (event.target.id === "arrow-right") {
        if (images.length >= index + 5) {
          setIndex((pre) => pre + 5);
        } else {
          setIndex(images.length);
        }
      } else {
        if (index > 10) {
          setIndex((pre) => pre - 5);
        } else {
          setIndex(5);
        }
      }
    }
  }

  return (
    <>
      <div className="best-electronics-container">
        <div className="best-electronics">
          <h4 className="electronis-text">Best Of Electronics</h4>
          <div className="electronics">
            {render_images.length &&
              render_images.map((item, index) => (
                <div key={index}>
                  <div>
                    <img key={index} className="electronics-img" src={item.image} alt={`slide${index}`} />
                  </div>
                  <div className="electronics-img-text">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
              ))}
            {images.length > index && (
              <p onClick={handleArrow} id="arrow-right" className="electronics-arrow arrow-right">
                {">"}
              </p>
            )}
            {(images.length === index || index > 5) && (
              <p onClick={handleArrow} id="arrow-left" className="electronics-arrow arrow-left">
                {"<"}
              </p>
            )}
          </div>
        </div>
        <div>
          <img className="add-img" src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/ec9bba198c534edb.jpg?q=20"></img>
        </div>
      </div>
    </>
  );
}

export default BestElectronics;
