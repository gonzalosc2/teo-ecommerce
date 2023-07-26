// Componente de barra de navegación para poner como header de la app
import CartDetail from "../cart-widget";
import { Link } from "react-router-dom";
import "./index.css";
import OrderWidget from "../order-widget";
const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h3 id="merchantTitle"> Teo's E-commerce </h3>
        </Link>
      </div>
      <div id='rhs_navbar'>
        <OrderWidget />
        <Link to={"/cart"} style={{ textDecoration: "none", color: "#fff" }}>
          <CartDetail/>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
