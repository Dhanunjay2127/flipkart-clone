import React, { useState } from "react";

function BeautyFoodsToys() {
  const [images, setImages] = useState([
    {
      name: "Teddy Bear",
      price: "₹2,099",
      image: "https://media.istockphoto.com/id/909772478/photo/brown-teddy-bear-isolated-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=F4252bOrMfRTB8kWm2oM2jlb9JXY08tKCaO5G_ms1Uw=",
    },
    {
      name: "Toy Car",
      price: "₹1,499",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSv_-GgNcf12HxVGa6wxyX_qxA659IkVZH3Tgkubsrh3DSd03YLnfRuKyACpC7Ei7OKpcSdmwrf3_ITY0QADhPDoI4XfZKqI9GnDjZ1RHfAqwBgXLRB1RytRA",
    },
    {
      name: "Makeup Things",
      price: "₹299",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Facial Creams",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Chocolate Coffee",
      price: "₹799",
      image: "https://images.unsplash.com/photo-1587790032594-babe1292cede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZCUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      name: "Coffee Beans",
      price: "₹199",
      image: "https://images.unsplash.com/photo-1525088553748-01d6e210e00b?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pizza",
      price: "₹499",
      image: "https://images.unsplash.com/photo-1582571352032-448f7928eca3?q=80&w=1592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Kids Bicycle",
      price: "₹8,999",
      image: "https://media.istockphoto.com/id/614319068/photo/children-bicycle.jpg?s=1024x1024&w=is&k=20&c=tDqCO-7iriwYhRdod_NGkAenKUaZNsVWqmNQ7VNhL2w=",
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
          <p>Beauty, Food, Toys & more</p>
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

export default BeautyFoodsToys;
