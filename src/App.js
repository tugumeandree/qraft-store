import React from 'react';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">Qraft Store</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Art and Craft</a>
        </li>

        <li>
          <a href="index.html">Interior Design</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="/images/d3.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Lamp Ornament</a>
              </div>
              <div className="product-brand">Qraft Store</div>
              <div className="product-price">$10</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/d2.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Flower Vessel Set</a>
              </div>
              <div className="product-brand">Qraft Store</div>
              <div className="product-price">$10</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d7.jpeg" alt="product" />
              <div className="product-name">
                <a href="product.html">Wall Hanging</a>
              </div>
              <div className="product-brand">Qraft Store</div>
              <div className="product-price">$10</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d4.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Flower Pots</a>
              </div>
              <div className="product-brand">Qraft Store</div>
              <div className="product-price">$10</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d5.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Tyre Coffe Table</a>
              </div>
              <div className="product-brand">Qraft Store</div>
              <div className="product-price">$10</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d7.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Wall Mirror</a>
              </div>
              <div className="product-brand">Qraft Store</div>
              <div className="product-price">$10</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>

        </ul>
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  );
}

export default App;
