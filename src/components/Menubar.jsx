import React from "react";

function Menubar() {
  return (
    <>
      <div className="menu-bar">
        <div className="menu-logo">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart" />
        </div>
        <div className="menu-search">
          <div className="menu-serch-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(92, 90, 90)">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
          <input className="menu-search-input" type="text" placeholder="Search for products, brands more " />
        </div>
        <div className="menu-profile">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Dhanunjay" />
          <p>Dhanunjay</p>
          <div class="dropdown">
            <select className="menu-profile-dropdown "></select>
            <div class="dropdown-content">
              <div className="dropdown-content-icons">
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Dhanunjay" />
                <p>My Profile</p>
              </div>
              <div className="dropdown-content-icons">
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" />
                <p>Cart</p>
              </div>
              <div className="dropdown-content-icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                </svg>
                <p>Orders</p>
              </div>
              <div className="dropdown-content-icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
                <p>Wishlist</p>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-cart">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" />
          <p>Cart</p>
          <div className="menu-cart-count">1</div>
        </div>

        <div className="menu-cart">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" />
          <p>Become a seller</p>
        </div>
        <div className="menu-more">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="menu" />
          <div className="menu-more-options">
            <p>Hello</p>
          </div>
        </div>
      </div>
      <div>
        <button className="reload">Reload Page</button>
      </div>
    </>
  );
}

export default Menubar;
