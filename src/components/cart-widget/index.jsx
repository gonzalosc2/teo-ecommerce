// Carrito de supermercado con contador de elementos seleccionados
import trolley from "./media/trolley.png";
import "./index.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../context" 
import React from "react";

const Cart = () => {
  const { quantityCart } = React.useContext(AppContext);

  return (
    <Link to={"/cart"} style={{textDecoration: "none"}}>
      <div id="cartWidgetPlusCounter">
          <div>
            <img src={trolley} alt="cart-widget" />
          </div>
        {
        quantityCart === 0 
        ? 
          <></>
        :
          <div>
            <span> {quantityCart} </span>
          </div>
        }
      </div>
    </Link>
  );
};

export default Cart;
