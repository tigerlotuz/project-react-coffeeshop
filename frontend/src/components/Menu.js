import "../styles/Menu.css";
import add from "../assets/svg/add.svg";
import header from "../assets/svg/graphics-header.svg";
import footer from "../assets/svg/graphics-footer.svg";
import bag from "../assets/svg/bag.svg";
import navicon from "../assets/svg/navicon.svg";
// import products from "../assets/coffee.json";
import { useEffect, useState } from "react";
import { addProduct } from "../actions/cart";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="menu-container">
      <header className="menu-header">
        <img className="menu-header-img" src={header} alt="header" />

        <img
          className="navicon"
          onClick={() => history.push("/navbar")}
          src={navicon}
          alt="navicon"
        />

        <img
          className="bag"
          onClick={() => history.push("/cart")}
          src={bag}
          alt="bag"
        />

        {cartItems.itemsInCart > 0 ? (
          <h6 className="item-in-bag">{cartItems.itemsInCart}</h6>
        ) : (
          ""
        )}
      </header>
      <main className="menu-main">
        <h1>Meny</h1>
        {products.map((product, index) => (
          <article key={index} className="coffee-container">
            <img
              className="add"
              src={add}
              alt="add"
              onClick={() => dispatch(addProduct(product))}
            />

            <div className="coffee-container-center">
              <h4>{product.title}</h4>
              <hr className="menu-hr" />
              <p>{product.desc}</p>
            </div>
            <h4 className="price">{product.price} kr</h4>
          </article>
        ))}
      </main>
      <footer className="menu-footer">
        <img className="menu-footer-img" src={footer} alt="footer" />
      </footer>
    </section>
  );
};

export default Menu;
