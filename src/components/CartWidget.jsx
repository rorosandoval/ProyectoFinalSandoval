import { useContext } from "react";
import { CartContext } from "../providers/CartContext";

function CartWidget() {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div className="cart">
      <i className="bi bi-cart"></i>{" "}
      {cantidadTotal > 0 && <span className="cartCantidad">{cantidadTotal}</span>}
    </div>
  );
}

export default CartWidget;
