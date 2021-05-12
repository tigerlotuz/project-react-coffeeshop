import "../styles/Nav.css";
import x from "../assets/svg/close.svg";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeCurrentUser } from "../actions/currentUser";

const Nav = () => {
  const user = useSelector((state) => state.currentUserReducer);
  let history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeCurrentUser());
    history.push('/')
  };

  return (
    <section className="navbar-container">
      <img className="x" src={x} alt="x" onClick={() => history.goBack()} />
      <h3 onClick={() => history.push("/")}>Hem</h3>
      <hr className="navbar-container-hr" />
      <h3 onClick={() => history.push("/menu")}>Meny</h3>
      <hr className="navbar-container-hr" />
      <h3 onClick={() => history.push("/about")}>Vårt kaffe</h3>

      {user.isLoggedin ? (
        <>
          <hr className="navbar-container-hr" />
          <h3 onClick={() => history.push("/profile")}>Min profil</h3>
        </>
      ) : (
        ""
      )}

      {user.isLoggedin ? (
        <>
          <hr className="navbar-container-hr" />
          <h3 onClick={handleClick}>Logga ut</h3>
        </>
      ) : (
        <>
          <hr className="navbar-container-hr" />
          <h3 onClick={() => history.push("/login")}>Logga in</h3>
        </>
      )}
    </section>
  );
};

export default Nav;
