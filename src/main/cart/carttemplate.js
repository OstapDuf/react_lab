import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { adjustQuantity, removeItemFromCart } from "../../redux/slice.js";
import { Link } from "react-router-dom";
import "./cart.css";

export const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    console.log("Cart Items:", cartItems);
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-page-container">
            <h2 className="cart-header">Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <div className="empty-cart-message">
                    <p>Your cart is empty!</p>
                    <Link to="/Catalog">
                        <button className="btn btn-primary">Back to Catalog</button>
                    </Link>
                </div>
            ) : (
                <div className="cart-items-list">
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <div className="cart-item-image">
                                <img
                                    src={item.imageUrl || "https://via.placeholder.com/150"}
                                    alt={item.title}
                                    className="cart-item-img"
                                />
                            </div>
                            <div className="cart-item-details">
                                <h4>{item.title}</h4>
                                <p>
                                    <strong>Price:</strong>
                                    {parseFloat(item.price).toFixed(2)} 
                                </p>
                                <div className="quantity-control">
                                    <button
                                        className="quantity-btn"
                                        onClick={() =>
                                            dispatch(
                                                adjustQuantity({
                                                    id: item.id,
                                                    quantity: item.quantity - 1,
                                                })
                                            )
                                        }
                                        disabled={item.quantity === 1}
                                    >
                                        -
                                    </button>
                                    <span className="quantity-count">{item.quantity}</span>
                                    <button
                                        className="quantity-btn"
                                        onClick={() =>
                                            dispatch(
                                                adjustQuantity({
                                                    id: item.id,
                                                    quantity: item.quantity + 1,
                                                })
                                            )
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() =>
                                        dispatch(removeItemFromCart(item.id))
                                    }
                                >
                                    Remove
                                </button>
                            </div>
                            <div className="cart-item-total">
                                <p>
                                    Total: {(parseFloat(item.price) * item.quantity).toFixed(2)}
                                    
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cartItems.length > 0 && (
                <div className="cart-summary">
                    <h3>Total: {totalAmount.toFixed(2)} USD</h3>
                    <div className="cart-buttons">
                        <Link to="/Catalog">
                            <button className="btn btn-secondary">Back to Catalog</button>
                        </Link>
                        <button className="btn btn-primary">Continue</button>
                    </div>
                </div>
            )}
        </div>
    );
};
