import "../styles/Profile.css";
import header from "../assets/svg/graphics-header.svg";
import navicon from "../assets/svg/navicon.svg";
import profile from "../assets/svg/profile.svg";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  let history = useHistory();
  const user = useSelector((state) => state.currentUserReducer);

  const totalPrice = () => {
    let totalPrice = 0;
    if (user.user.orders.length > 0) {
      user.user.orders.forEach((item) => {
        let Price = item.totalSum;
        totalPrice += Price;
      });
    }
    return totalPrice;
  };

  return (
    <section className="profile-container">
      <header className="profile-header">
        <img className="profile-header-img" src={header} alt="header" />
        <img
          className="navicon"
          onClick={() => history.push("/navbar")}
          src={navicon}
          alt="navicon"
        />
      </header>

      <main className="profile-wrapper">
        <section className="profile-main">
        <img className="profile" src={profile} alt="profile" />
        <h4>{user.user.name}</h4>
        <p className="email">{user.user.email}</p>
        <h5>Orderöversikt</h5>
        {user.user.orders.length === 0 ? (
          <p className="orderstatus-tom profile-bold">Du har inte lagt någon order ännu</p>
        ) : (
          user.user.orders.map((item, index) => (
            <article key={index} className="profile-main-container">
              <div className="ordernummer">
                <p>{item.orderNumber}</p>
                <p>total ordersumma </p>
              </div>
              <div className="ordersumma">
                <p>{item.date}</p>
                <p className="profile-bold">{item.totalSum} kr</p>
              </div>
            </article>
          ))
        )}

        <article className="profile-main-container total">
          <div className="ordernummer">
            <p>Total spenderat </p>
          </div>
          <div className="ordersumma">
            <p className="profile-bold">{totalPrice()} kr</p>
          </div>
        </article>
        </section>
      </main>
    </section>
  );
};

export default Profile;
