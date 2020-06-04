import React from 'react';
import './App.css';
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';
import HomeeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">Qraft Store</Link>
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
        <Switch>
        <Route path ="/" exact={true} component ={HomeeScreen}/>
        <Route path="/product/:id" component ={ProductScreen}/>
        </Switch>
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
