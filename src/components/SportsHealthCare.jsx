import React, { useState } from "react";

function SportsHealthCare() {
  const [images, setImages] = useState([
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
    {
      name: "Facial Creams",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1691096674730-2b5fb28b726f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEhlYWx0aCUyMGNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Shetascope",
      price: "₹1,799",
      image: "https://plus.unsplash.com/premium_photo-1661375169720-03eeaf61ce7f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Tablets",
      price: "₹199",
      image: "https://plus.unsplash.com/premium_photo-1661549821614-52c69bc707b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc5fHx8ZW58MHx8fHx8",
    },
    {
      name: "Microscope",
      price: "₹4,499",
      image: "https://plus.unsplash.com/premium_photo-1715228482059-3147a98cd2e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWljcm9zY29wfGVufDB8fDB8fHww",
    },
    {
      name: "Cricket Bat",
      price: "₹1,999",
      image: "https://plus.unsplash.com/premium_photo-1679917489673-b952cee5857a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
  ]);
  const [index, setIndex] = useState(6);
  const render_images = images.slice(index - 6, index);

  function handleClick(event) {
    if (event.target.id === "forword") {
      if (images.length >= 12) {
        setIndex((pre) => pre + 6);
      } else {
        setIndex(images.length);
      }
    } else {
      if (index > 6 && index >= 12) {
        setIndex((pre) => pre - 6);
      } else if (index > 6 && index < 12) {
        setIndex(6);
      }
    }
  }

  return (
    <>
      <div className="toys-container">
        <div className="toys-text">
          <p>Sports, HealthCare & more</p>
        </div>
        {render_images.length > 0 &&
          render_images.map((item, i) => (
            <div className="toy-img-container">
              <img src={item.image} className="toy-img" id={i}></img>
              <div className="toy-price-tag">
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        <button style={{ display: index < images.length ? "" : "none" }} onClick={handleClick} id="forword" className="toy-button toy-forword">
          {">"}
        </button>
        <button style={{ display: index > 6 ? "" : "none" }} onClick={handleClick} id="backword" className="toy-button toy-backword">
          {"<"}
        </button>
      </div>
    </>
  );
}

export default SportsHealthCare;
