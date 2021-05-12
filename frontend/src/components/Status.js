import "../styles/Status.css";
import drone from "../assets/svg/drone.svg";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../actions/cart";
import { useHistory } from "react-router-dom";

const Status = () => {
  const checkOutCart = useSelector((state) => state.cartCheckOutReducer);
  const user = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  let history = useHistory();

  function handleClick() {
    history.push("/");
    if (user.isLoggedin) {
      fetch(`http://localhost:8080/api/users/addorder/${user.user.email}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...checkOutCart,
        }),
      });
    }
    dispatch(clearCart());
  }

  return (
    <section className="status-wrapper">
      <main className="status-container">
      <p className="status-ordernummer">
        Ordernummer{" "}
        <span className="ordernumber">{checkOutCart.orderNumber}</span>
      </p>
      <img className="drone" src={drone} alt="drone" />
      <h2>Din beställning är på väg!</h2>
      <p className="time">{checkOutCart.totalItems * 2 + 10} minuter</p>
      <button onClick={handleClick} className="btn btn2" type="submit">
        <h4>Ok, cool!</h4>
      </button>
      </main>
    </section>
  );
};

export default Status;
//onClick={() => history.push("/about")}
