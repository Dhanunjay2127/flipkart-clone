import React from "react";

function TopStories() {
  const mobileNames = [
    "iPhone 15 Pro Max",
    "iPhone 15",
    "iPhone 14 Pro",
    "iPhone 14",
    "iPhone 13 Mini",
    "Samsung Galaxy S23 Ultra",
    "Samsung Galaxy S23",
    "Samsung Galaxy Z Fold5",
    "Samsung Galaxy Z Flip5",
    "Samsung Galaxy A54",
    "OnePlus 11 Pro",
    "OnePlus Nord 3",
    "OnePlus 10T",
    "OnePlus 9R",
    "Google Pixel 8 Pro",
    "Google Pixel 8",
    "Google Pixel 7a",
    "Google Pixel 6 Pro",
    "Xiaomi 13 Pro",
    "Xiaomi Redmi Note 12 Pro",
    "Xiaomi Poco F5",
    "Xiaomi Mi 11X",
    "Realme GT 3",
    "Realme Narzo 50 Pro",
    "Realme 11 Pro+",
    "Vivo X90 Pro",
    "Vivo V27 Pro",
    "Vivo Y100",
    "Oppo Reno 10 Pro+",
    "Oppo Find X6 Pro",
    "Oppo F21 Pro",
    "Asus ROG Phone 7 Ultimate",
    "Asus Zenfone 10",
    "Motorola Edge 40 Pro",
    "Motorola G73 5G",
    "Motorola Razr 40 Ultra",
    "Nothing Phone (2)",
    "Nothing Phone (1)",
    "iQOO 11 Pro",
    "iQOO Neo 7",
    "Nokia X30 5G",
    "Nokia G60",
    "Sony Xperia 1 V",
    "Sony Xperia 5 IV",
    "Samsung Galaxy M14",
    "Samsung Galaxy F54",
    "Samsung Galaxy A74",
    "Xiaomi 12T Pro",
    "Redmi K50 Ultra",
    "Honor Magic 5 Pro",
    "Tecno Phantom V Fold",
  ];

  return (
    <>
      <div className="top-stories-container">
        <div className="top-stories-heading">
          <p>Top Stories : Brand Directory</p>
        </div>
        <div>
          <span>MOST SEARCHED FOR ON FLIPKART :</span>
          {mobileNames.map((item) => (
            <a className="top-stories-link" href="#">
              {item} |
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopStories;
