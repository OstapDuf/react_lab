import React from "react";
import { Link } from "react-router-dom";
import "./success.css";

export const SuccessPage = () => {
  return (
    <div className="success-container">
      <div className="success-message">
        <div className="success-icon">✅</div>
        <h2>Success!</h2>
        <p>Your order was sent to processing! Check your email for further information.</p>
        <Link to="/catalog">
          <button className="btn-back">Go back to Catalog</button>
        </Link>
      </div>
    </div>
  );
};


