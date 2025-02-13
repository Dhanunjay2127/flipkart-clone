import React from "react";

function Products() {
  return (
    <>
      <div className="products">
        <div>
          <img alt="Kilos" src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100"></img>
          <p>Kilos</p>
        </div>
        <div>
          <img alt="Mobiles" src="https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" />
          <p>Mobiles</p>
        </div>

        <div className="products-fashion">
          <img alt="Electronics" src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"></img>
          <div className="fashion-dropdown">
            <p>Electronics</p>
            <select className="fashion-dropdown-select"></select>
          </div>
          <div className="fashion-dropdown-options">
            <p>Cameras & Acessories</p>
            <p>Laptop & Desktops</p>
            <p>Gaming</p>
            <p>Health & Personal Care</p>
            <p>Mobile Acessories</p>
            <p>Smart Wearables</p>
            <p>Powerbanks & Audio</p>
          </div>
        </div>

        <div className="products-fashion">
          <img alt="Fashion" src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100"></img>
          <div className="fashion-dropdown">
            <p>Fashion</p>
            <select className="fashion-dropdown-select"></select>
          </div>
          <div className="fashion-dropdown-options">
            <p>Women Ethnic</p>
            <p>Men Fottwear</p>
            <p>Kids</p>
            <p>Winter</p>
            <p>Sports</p>
            <p>Bags</p>
            <p>Essentials</p>
          </div>
        </div>

        <div className="products-fashion">
          <img alt="Home & Furniture" src="https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100"></img>
          <div className="fashion-dropdown">
            <p>Home & Furniture</p>
            <select className="fashion-dropdown-select"></select>
          </div>
          <div className="fashion-dropdown-options">
            <p>Kitchen & Dinings</p>
            <p>BedRoom Furnitures</p>
            <p>Home Decors</p>
            <p>Tools & Utility</p>
            <p>Living Room Furniture</p>
            <p>Lightings & Electricals</p>
            <p>Pet & Gardenings</p>
          </div>
        </div>

        <div>
          <img alt="Appliances" src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100"></img>
          <p>Appliances</p>
        </div>

        <div>
          <img alt="Flight Bookings" src="https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100"></img>
          <p>Flight Bookings</p>
        </div>

        <div className="products-fashion">
          <img alt="Beauty, Toys & More" src="https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100"></img>
          <div className="fashion-dropdown">
            <p>Beauty, Toys & More</p>
            <select className="fashion-dropdown-select"></select>
          </div>
          <div className="fashion-dropdown-options">
            <p>Kitchen & Dinings</p>
            <p>BedRoom Furnitures</p>
            <p>Home Decors</p>
            <p>Tools & Utility</p>
            <p>Living Room Furniture</p>
            <p>Lightings & Electricals</p>
            <p>Pet & Gardenings</p>
          </div>
        </div>
        <div className="products-fashion">
          <img alt="Two Wheelers" src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100"></img>
          <div className="fashion-dropdown">
            <p>Two Wheelers</p>
            <select className="fashion-dropdown-select"></select>
          </div>
          <div className="fashion-dropdown-options">
            <p>Kitchen & Dinings</p>
            <p>BedRoom Furnitures</p>
            <p>Home Decors</p>
            <p>Tools & Utility</p>
            <p>Living Room Furniture</p>
            <p>Lightings & Electricals</p>
            <p>Pet & Gardenings</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
