import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section>
      <Link to="/">home</Link> |<Link to="/navbar"> navbar</Link> |
      <Link to="/menu"> menu</Link> |<Link to="/about"> about</Link> |
      <Link to="/profile"> profile</Link> |<Link to="/login"> login</Link> |
      <Link to="/status"> status</Link> |<Link to="/cart"> cart</Link> |
    </section>
  );
};

export default Navigation;
