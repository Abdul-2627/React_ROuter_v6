import { NavLink } from "react-router-dom"

export const Footer=()=>{
    return<footer className="footer">
  <div className="footer-top-line">
    <p>Your Trusted Ecommerce Partner</p>
  </div>

  <div className="footer-content">
    <div className="footer-section">
      <h3>Payments</h3>
      <div className="foot-cards">
        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
        <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" />
      </div>
    </div>

    <div className="footer-section">
      <h3>Shopping</h3>
      <ul>
        <li><NavLink to="#">Men's Fashion</NavLink></li>
        <li><NavLink to="#">Women's Fashion</NavLink></li>
        <li><NavLink to="#">Electronics</NavLink></li>
        <li><NavLink to="#">Accessories</NavLink></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Experience</h3>
      <ul>
        <li><NavLink to="#">Track Order</NavLink></li>
        <li><NavLink to="#">Customer Service</NavLink></li>
        <li><NavLink to="#">Gift Cards</NavLink></li>
        <li><NavLink to="#">Help Center</NavLink></li>
      </ul>
    </div>

    <div className="footer-section newsletter">
      <h3>Newsletter</h3>
      <p>Be the first to know about new arrivals and exclusive offers.</p>
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Subscribe</button>
    </div>
  </div>

  <hr />

  <div className="footer-bottom">
    <p>&copy; 2025 YourCompany. All rights reserved.</p>
  </div>
</footer>
}