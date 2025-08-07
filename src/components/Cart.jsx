import { useContext } from "react";
import { CartContext } from "../providers/CartContext";
import CheckoutForm from "./CheckoutForm";

function Cart() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container">
        <h1>Tu Carrito</h1>
        <p>Tu carrito está vacío. ¡Empieza a comprar!</p>
      </div>
    );
  }

  const total = cart.reduce(
    (acc, prod) => acc + prod.item.price * prod.cantidad,
    0
  );

  return (
    <div className="container contenedor-cart">
      <div className="cart-datalle">
        <h1>Tu Carrito</h1>
        <h4>Detalle de tu carrito</h4>
        {cart.map((prod) => (
          <div key={prod.item.id}>
            <p>Producto: {prod.item.name}</p>
            <p>
              Precio unitario:{" "}
              {Intl.NumberFormat("es-CL", {
                style: "currency",
                currency: "CLP",
              }).format(prod.item.price)}
            </p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>
              Subtotal:{" "}
              {Intl.NumberFormat("es-CL", {
                style: "currency",
                currency: "CLP",
              }).format(prod.item.price * prod.cantidad)}
            </p>
            <hr />
          </div>
        ))}
        <p>
          Total:{" "}
          {Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
          }).format(total)}
        </p>
      </div>
      <div className="cart-datalle">
        <h3>Resumen de tu compra</h3>
        <p>
          Total a pagar:{" "}
          {Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
          }).format(total)}
        </p>
        <p>
          Productos en el carrito:{" "}
          {cart.reduce((acc, prod) => acc + prod.cantidad, 0)}
        </p>
        <CheckoutForm />
      </div>
    </div>
  );
}

export default Cart;
