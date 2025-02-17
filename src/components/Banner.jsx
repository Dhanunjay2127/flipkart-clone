import React, { useState, useEffect } from "react";

function Banner() {
  const images = ["https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f8dae5ce006b7d54.jpg?q=20", "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/766ea612e03ff01d.jpg?q=20", "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/ba7f29f7ecb4c88b.jpg?q=20", "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a6d74b7e7af9bcdc.jpg?q=20", "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f454b1f18e9ea9d3.jpg?q=20"];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length) {
        setTransition(false);
        setIndex(0);
        setTimeout(() => setTransition(true), 50);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index, images.length]);

  function handleClick(event) {
    if (event.target.id === "forword") {
      if (index === images.length) {
        setTransition(false);
        setIndex(0);
        setTimeout(() => setTransition(true), 50);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    } else {
      if (index === 0) {
        setTransition(false);
        setIndex(images.length - 1);
        setTimeout(() => setTransition(true), 50);
      } else {
        setIndex((prevIndex) => prevIndex - 1);
      }
    }
  }

  return (
    <div className="banner-container middle">
      <div className="banner">
        <div
          className="carousel"
          style={{
            transform: `translateX(${-index * 100}%)`,
            transition: transition ? "transform 1s ease-in-out" : "none",
          }}
        >
          {[...images, images[0]].map((img, i) => (
            <img key={i} src={img} alt={`slide${i + 1}`} />
          ))}
        </div>
        <button id="forword" onClick={handleClick} className="banner-button-forword banner-button">
          {">"}
        </button>
        <button id="backword" onClick={handleClick} className="banner-button-backword banner-button">
          {"<"}
        </button>
      </div>

      <div className="indicator-container">
        <div className="indicator"></div>
      </div>
    </div>
  );
}

export default Banner;
