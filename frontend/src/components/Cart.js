import "../styles/Cart.css";
import header from "../assets/svg/graphics-header.svg";
import bag from "../assets/svg/bag.svg";
import navicon from "../assets/svg/navicon.svg";
import poly from "../assets/svg/polygon.svg";
import arrowUp from "../assets/svg/arrow-up.svg";
import arrowDown from "../assets/svg/arrow-down.svg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, addProduct } from "../actions/cart";
import { checkOutCart } from "../actions/cartCheckout";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  let history = useHistory();

  const totalPrice = () => {
    let totalPrice = 0;
    if (cartItems.itemsInCart > 0) {
      cartItems.products.forEach((item) => {
        let Price = item.product.price * item.amount;
        totalPrice += Price;
      });
    }
    return totalPrice;
  };

  return (
    <section className="cart-container">
      <header className="cart-header">
        <img className="cart-header-img" src={header} alt="header" />
        <img className="navicon2" src={navicon} alt="navicon" />
        
          <img 
          className="bag" 
          onClick={() => history.push("/menu")}
          src={bag} 
          alt="bag" />
        
        {cartItems.itemsInCart > 0 ? (
          <h6 className="item-in-bag">{cartItems.itemsInCart}</h6>
        ) : (
          ""
        )}
      </header>
      <div id="overlay"></div>
      <main className="cart-main-container">
        <img className="poly" src={poly} alt="polygon" />
        {cartItems.itemsInCart > 0 ? (
          <h3>Din beställning</h3>
        ) : (
          <h3>Varukorgen är tom</h3>
        )}
        {cartItems.products.map((item, index) => (
          <article key={index} className="cart-main-container-order">
            <div className="cart-main-container-order-center">
              <h4>{item.product.title}</h4>
              <hr className="cart-hr cart-hr-long" />
              <p>{item.product.price * item.amount}kr</p>
            </div>
            <div className="cart-main-container-order-right">
              <img
                className="arrow-up"
                onClick={() => dispatch(addProduct(item.product))}
                src={arrowUp}
                alt="polygon"
              />
              <p>{item.amount}</p>
              <img
                className="arrow-down"
                onClick={() => dispatch(removeProduct(index))}
                src={arrowDown}
                alt="polygon"
              />
            </div>
          </article>
        ))}
        {cartItems.itemsInCart > 0 ? (
          <article className="cart-main-container-order cart-main-container-order-total">
            <div className="cart-main-container-order-center">
              <h4>Total</h4>
              <hr className="cart-hr cart-hr-long" />
              <p>inkl moms + drönarleverans</p>
            </div>
            <h4 className="price">{totalPrice()} kr</h4>
          </article>
        ) : (
          ""
        )}

        {cartItems.itemsInCart > 0 ? (
          <Link className="link" to="/status">
            <button
              onClick={() => dispatch(checkOutCart({totalPrice: totalPrice(),totalItems:cartItems.itemsInCart }))}
              className="btn btn3"
              type="submit"
            >
              <h4>Take my money!</h4>
            </button>
          </Link>
        ) : (
          ""
        )}
      </main>
    </section>
  );
};

export default Cart;
